// Recebe o pedido de orçamento do simulador e repassa, assinado, para a
// plataforma Inteligência de Negócios da Oktopus Tech.
// O segredo fica só aqui no servidor (variáveis do Netlify), nunca no navegador.
//
// Variáveis de ambiente:
//   OKTOPUS_INGEST_KEY_ID   ex.: ok_3f9a...
//   OKTOPUS_INGEST_SECRET   segredo da chave
//   OKTOPUS_INGEST_URL      opcional; padrão https://bi.oktopustech.com.br/api/lead-ingest
import { createHmac } from "node:crypto";

const DOMAIN = "brazzariaeventos.com.br";
const MAX_BODY = 8192;
const env = (k) => (globalThis.Netlify?.env?.get?.(k) ?? process.env[k] ?? "").trim();
const str = (v, max) => (typeof v === "string" && v.trim() ? v.trim().slice(0, max) : undefined);
const done = (status = 204) => new Response(null, { status });

/** Só aceita pedido vindo do próprio site (ou de uma prévia dele no Netlify). */
export function originOk(origin) {
  if (!origin) return false;
  try {
    const h = new URL(origin).hostname;
    return h === DOMAIN || h === "www." + DOMAIN || /--brazzaria-eventos\.netlify\.app$/.test(h) || h === "brazzaria-eventos.netlify.app";
  } catch {
    return false;
  }
}

/** Monta o que vai para a plataforma. Devolve null se não há o que registrar. */
export function buildLead(input) {
  if (!input || typeof input !== "object") return null;
  if (str(input.website, 200)) return null; // campo-isca preenchido: robô
  const phone = str(input.phone, 40);
  const digits = (phone ?? "").replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) return null;
  const url = (v) => {
    const s = str(v, 2000);
    try { return s && /^https?:$/.test(new URL(s).protocol) ? s : undefined; } catch { return undefined; }
  };
  const group = (o, keys) => {
    const out = {};
    for (const k of keys) { const v = str(o?.[k], 200); if (v) out[k] = v; }
    return Object.keys(out).length ? out : undefined;
  };
  return {
    domain: DOMAIN,
    name: str(input.name, 200),
    phone,
    service: str(input.service, 200),
    city: str(input.city, 120),
    message: str(input.message, 5000),
    landing_page: url(input.landing_page),
    referrer: str(input.referrer, 2000),
    utm: group(input.utm, ["source", "medium", "campaign", "term", "content"]),
    click_ids: group(input.click_ids, ["gclid", "fbclid", "msclkid"]),
    consent: true, // informou o WhatsApp depois de ler o aviso do formulário
  };
}

export function sign(secret, timestamp, raw) {
  return createHmac("sha256", secret).update(`${timestamp}.${raw}`).digest("hex");
}

export default async (req) => {
  if (req.method !== "POST") return done(405);
  if (!originOk(req.headers.get("origin"))) return done(403);

  const text = await req.text();
  if (text.length > MAX_BODY) return done(413);
  let input;
  try { input = JSON.parse(text); } catch { return done(400); }

  const lead = buildLead(input);
  // Sem WhatsApp válido, ou robô: responde igual, sem registrar nada
  if (!lead) return done();

  const keyId = env("OKTOPUS_INGEST_KEY_ID");
  const secret = env("OKTOPUS_INGEST_SECRET");
  if (!keyId || !secret) {
    console.error("[lead] faltam OKTOPUS_INGEST_KEY_ID e OKTOPUS_INGEST_SECRET");
    return done();
  }
  const raw = JSON.stringify(lead);
  const ts = String(Math.floor(Date.now() / 1000));
  try {
    const r = await fetch(env("OKTOPUS_INGEST_URL") || "https://bi.oktopustech.com.br/api/lead-ingest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-oktopus-key": keyId,
        "x-oktopus-timestamp": ts,
        "x-oktopus-signature": sign(secret, ts, raw),
      },
      body: raw,
    });
    if (!r.ok) console.error("[lead] a plataforma respondeu", r.status);
  } catch (e) {
    console.error("[lead] falha ao enviar", String(e?.message ?? e).slice(0, 120));
  }
  // O visitante nunca fica esperando nem vê erro: o WhatsApp já abriu
  return done();
};
