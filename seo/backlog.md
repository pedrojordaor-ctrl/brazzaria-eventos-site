# Backlog de SEO

Ordenado por impacto. Ponto = ponto do padrão de SEO (1 a 8). O status oficial fica no BI.

| # | Ponto | Gravidade | Status | Problema | Correção |
|---|---|---|---|---|---|
| 1 | 1 | Alta | Aberto | O site tem uma página só para todas as buscas: casamento, aniversário, evento corporativo, churrasqueiro exclusivo, feijoada, paella, hamburgada e TexMex. | Criar páginas por tipo de evento, começando por casamento, aniversário e corporativo, cada uma com cardápio indicado, dúvidas daquele cliente e o simulador. Depende do ok do Pedro e de conteúdo real (fotos de eventos, o que muda em cada tipo). |
| 2 | 2 | Alta | Em revisão ([PR](https://github.com/pedrojordaor-ctrl/brazzaria-eventos-site/pull/1)) | Título começa pela marca e não diz a região; a descrição também não cita São Paulo. | Serviço no começo do título, região no título e na descrição, marca no fim. |
| 3 | 1 | Alta | Em revisão ([PR](https://github.com/pedrojordaor-ctrl/brazzaria-eventos-site/pull/1)) | A página não diz em lugar nenhum onde a Brazzaria atende. A pergunta sobre cidade responde só que o deslocamento é calculado. | Região na resposta da pergunta frequente e nos dados estruturados do negócio (areaServed). |
| 4 | 8 | Alta | Aberto | O site não registra nenhuma conversão: o simulador só abre o WhatsApp, não há formulário que grave lead nem medição de clique. A ficha conta lead como conversão, mas hoje não há como contar. | Ligar o envio do simulador à captura de leads do BI, com aviso de privacidade. É mudança de produto, não só de SEO: decisão do Pedro. |
| 5 | 1 | Média | Aberto | O H1 é a frase de marca e não diz o serviço. O serviço aparece só na linha pequena acima. | Levar o serviço para o H1 e manter a frase de marca como destaque logo abaixo. Mexe na voz da marca: precisa do ok do Pedro. |
| 6 | 6 | Média | Em revisão ([PR](https://github.com/pedrojordaor-ctrl/brazzaria-eventos-site/pull/1)) | As sete perguntas frequentes da página não têm dados estruturados. | Bloco FAQPage gerado a partir do próprio texto das perguntas e respostas da página. |
| 7 | 3 | Média | Em revisão (PR da rodada 2026-11-23) | Imagens pesadas para o tamanho exibido: logo de 190 KB carregado no topo, hamburgada 233 KB, paella 210 KB, foto do topo no celular 148 KB. | Regerar no tamanho exibido e medir antes e depois. O logo é o mais urgente, porque carrega na primeira tela. |
| 8 | 4 | Média | Aberto | Não foi possível conferir se a Brazzaria Eventos tem ficha no Google como empresa que atende no local do cliente. | Pendência da equipe: criar ou conferir a ficha, com área de atendimento (São Paulo e raio de 150 km), WhatsApp, site e fotos de eventos. |
| 9 | 8 | Média | Aberto | Search Console verificado no site, mas não conectado ao BI: sem posição nem clique. | Pendência do Pedro: conectar o Google da Brazzaria em Integrações, no BI. |
| 10 | 6 | Baixa | Aberto | Dados estruturados do negócio usam a imagem do favicon como logo e não trazem e-mail nem horário de atendimento. | Trocar o logo pelo arquivo do logo e incluir horário de atendimento, se o Pedro informar. |
| 11 | 7 | Baixa | Aberto | Links de fora ainda não levantados. O Instagram no site é @brazzaria.co. | Na rodada mensal, listar quem pode apontar para o site (espaços de eventos parceiros, assessorias de casamento, fornecedores) como rascunho de contato para o Pedro. |
| 12 | 2 | Baixa | Aberto | O crédito do rodapé é um link só com imagem, sem texto alternativo, e aponta para oktopus-tech.netlify.app. | Dar texto ao link e conferir com o Pedro o endereço oficial da Oktopus Tech. |

## Está certo (não mexer)

- Endereço oficial único: canonical, Open Graph e sitemap com `www`; sem `www` redireciona com 301.
- Open Graph completo, com imagem de 1200x630.
- Página 404 própria, robots.txt e sitemap no ar.
- Foto do topo em WebP, com versão para celular, pré-carregada e com prioridade; demais imagens com carregamento adiado, largura e altura declaradas e texto alternativo.
- Preço, mínimo de convidados e o que está incluso aparecem na página e nas perguntas frequentes.
