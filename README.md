# Modelo de site institucional para ONGs

Site institucional simples, gratuito e editável pela própria ONG. Foi pensado como **modelo**
(template) do Instituto Incrementar: cada ONG parceira recebe uma cópia, com conta própria no
GitHub e no Netlify, e edita o conteúdo por um painel em `/admin`, sem precisar de desenvolvedor.

- **Next.js** (React) exportado como site estático, então o Google indexa o conteúdo.
- **Tailwind CSS v3** com tokens de cor nomeados (`tailwind.config.js`).
- **Sveltia CMS** em `/admin`: o painel grava as edições como commits no GitHub e o Netlify
  republica o site sozinho. Não há banco de dados nem servidor.
- O "formulário" é um **link para um Google Forms**, editável no painel.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`. Para gerar a versão final (pasta `out/`):

```bash
npm run build
```

## Estrutura

```
app/            # layout e página única (lê o conteúdo e monta as seções)
components/     # Header, Hero, Sobre, Projetos, Equipe, Parceiros, Contato, Footer
content/        # TODO o texto do site, em JSON (é o que o painel edita)
lib/            # getContent (lê content/) e utilitários
public/uploads/ # imagens enviadas pelo painel
public/admin/   # painel: index.html + config.yml (campos editáveis)
```

Regra do modelo: **nenhum texto fica fixo nos componentes**. Para um texto ficar editável, ele
precisa estar em `content/*.json` e ter um campo em `public/admin/config.yml`. Seções com lista
vazia (projetos, equipe, parceiros) somem do site e do menu.

## Criar o site de uma nova ONG

1. A ONG cria uma conta no **GitHub** e no **Netlify** (ambos gratuitos).
2. No GitHub do Instituto, abra este repositório e clique em **Use this template → Create a new
   repository**, na conta da ONG.
3. No repositório novo, edite `public/admin/config.yml` e troque `backend.repo` por
   `conta-da-ong/nome-do-repositorio`.
4. No Netlify: **Add new site → Import an existing project → GitHub**, escolha o repositório.
   O `netlify.toml` já define o build (`npm run build`) e a pasta publicada (`out`).
5. Personalize o que for preciso: cores em `tailwind.config.js`, e o conteúdo inicial pelo painel.

## Acesso ao painel (`/admin`)

Quem edita precisa de acesso de **escrita** ao repositório da ONG no GitHub (convide como
colaborador). Há dois jeitos de entrar em `https://site-da-ong.netlify.app/admin`:

**A) Token pessoal (mais rápido, sem configurar nada no Netlify).**
Na tela de login, clique em **Sign In with Token** e cole um token do GitHub (fine-grained, com
acesso ao repositório e permissão *Contents: Read and write*). O botão do painel leva à página de
criação do token. O token fica guardado só no navegador de quem editou.

**B) Login com a conta do GitHub (melhor para quem não é técnico).**
1. No GitHub da ONG: *Settings → Developer settings → OAuth Apps → New OAuth App*, com
   *Authorization callback URL* `https://api.netlify.com/auth/done` e o endereço do site em
   *Homepage URL*.
2. No Netlify: *Project configuration → Access & security → OAuth → Install provider → GitHub*,
   colando o *Client ID* e o *Client Secret* gerados.
3. Em `/admin`, clique em **Sign in with GitHub**.

> Confirme os nomes exatos dos menus nas telas atuais do GitHub e do Netlify, que mudam com
> frequência. A documentação do painel está em <https://sveltiacms.app/en/docs/backends/github>.

## Testar o painel sem publicar

Com `npm run dev` rodando, abra `http://localhost:3000/admin/index.html` no Chrome ou Edge
(no servidor local o endereço precisa terminar em `/index.html`; no Netlify basta `/admin`) e use
**Trabalhar com Repositório Local** (*Work with Local Repository*), escolhendo a pasta deste
projeto. As edições são salvas direto nos arquivos de `content/`, sem passar pelo GitHub.

## Dicas para quem edita

- Use imagens leves (idealmente até ~500 KB): cada imagem enviada vira um commit no repositório.
- O logo funciona melhor em SVG ou PNG quadrado.
- Links internos usam `#`, por exemplo `#contato`; links externos começam com `https://`.
