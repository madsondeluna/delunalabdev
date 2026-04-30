# Guia de conteúdo

Todos os dados do site ficam nos arquivos `.ts` desta pasta. Para qualquer mudança de conteúdo, edite o arquivo correspondente e faça push. O deploy acontece automaticamente.

Após editar, execute no terminal para confirmar que não há erros antes do push:

```bash
node node_modules/next/dist/bin/next build
```

---

## apps.ts

Cada app é um objeto dentro do array `apps`.

**Campos:**

- `id` — número único, incremente a partir do último
- `title` — nome do app (minúsculas, padrão do site)
- `description` — texto curto descrevendo o app
- `url` — link para o app ao vivo; use `"#"` se ainda não tiver URL
- `githubUrl` — link para o repositório (opcional; omita o campo se não houver)
- `tags` — array de strings com as tecnologias usadas
- `status` — somente `"live"`, `"beta"`, ou `"development"`

**Adicionar um app:**

```ts
{
  id: 5,
  title: "meu novo app",
  description: "descrição do que o app faz.",
  url: "https://meuapp.com",
  githubUrl: "https://github.com/madsondeluna/meuapp",
  tags: ["react", "python"],
  status: "live",
},
```

Adicione o objeto ao final do array, antes do `]`.

**Editar um app:**

Localize o objeto pelo `title` ou `id` e altere os campos desejados.

**Excluir um app:**

Remova o objeto inteiro do array. Não esqueça de remover a vírgula do objeto anterior se for o último.

---

## courses.ts

**Campos:**

- `id` — número único
- `title` — nome do curso
- `level` — somente `"beginner"`, `"intermediate"`, ou `"advanced"`
- `description` — texto curto do conteúdo
- `tags` — tecnologias abordadas
- `status` — somente `"available"` ou `"coming soon"`
- `url` — link de acesso ao curso; use `"#"` se não tiver ainda

**Adicionar um curso:**

```ts
{
  id: 7,
  title: "nome do curso",
  level: "beginner",
  description: "o que o aluno vai aprender.",
  tags: ["python", "bash"],
  status: "available",
  url: "https://link-do-curso.com",
},
```

**Editar e excluir:** mesmo processo descrito em apps.ts.

---

## videos.ts

**Campos:**

- `id` — número único
- `title` — título do vídeo
- `duration` — duração no formato `"MM:SS"`
- `platform` — nome da plataforma, ex: `"youtube"`
- `url` — link direto para o vídeo; use `"#"` se não tiver ainda
- `category` — somente `"tutorial"`, `"project"`, `"concept"`, ou `"workflow"`

**Adicionar um vídeo:**

```ts
{
  id: 7,
  title: "título do vídeo",
  duration: "15:30",
  platform: "youtube",
  url: "https://youtube.com/watch?v=...",
  category: "tutorial",
},
```

**Editar e excluir:** mesmo processo descrito em apps.ts.

---

## gallery.ts

**Campos:**

- `id` — número único
- `label` — descrição da imagem (aparece no card e no modal)
- `aspect` — proporção da imagem, ex: `"16/9"`, `"4/3"`, `"1/1"`, `"3/2"`, `"4/5"`
- `shade` — cor de fundo do placeholder: `"var(--surface)"` ou `"var(--dim)"`
- `image` — caminho da imagem (opcional); use `"/gallery/nome-do-arquivo.png"` após colocar o arquivo em `public/gallery/`

**Adicionar um item com imagem:**

1. Copie a imagem para `public/gallery/minha-imagem.png`
2. Adicione ao array:

```ts
{
  id: 9,
  label: "nome descritivo da imagem",
  aspect: "16/9",
  shade: "var(--surface)",
  image: "/gallery/minha-imagem.png",
},
```

**Adicionar um item sem imagem (placeholder):**

```ts
{
  id: 9,
  label: "nome descritivo",
  aspect: "4/3",
  shade: "var(--dim)",
},
```

**Editar e excluir:** mesmo processo descrito em apps.ts.

---

## opinions.ts

Cada opinion tem dois textos: `excerpt` (resumo que aparece na listagem) e `content` (texto completo da página dedicada).

**Campos:**

- `id` — número único
- `slug` — identificador da URL, sem espaços ou acentos, separado por hífens; ex: `"meu-novo-texto"`. Deve ser único. Gera a rota `/opinions/meu-novo-texto`
- `title` — título do texto
- `date` — data no formato `"AAAA-MM-DD"`
- `readTime` — tempo estimado de leitura, ex: `"5 min"`
- `excerpt` — parágrafo curto que aparece na listagem (1-3 frases)
- `tags` — array de temas
- `content` — texto completo. Separe parágrafos com uma linha em branco (`\n\n`)

**Adicionar uma opinion:**

```ts
{
  id: 5,
  slug: "titulo-do-texto",
  title: "título do texto",
  date: "2025-06-01",
  readTime: "4 min",
  excerpt: "frase de abertura que aparece na listagem.",
  tags: ["tema", "outro-tema"],
  content: `primeiro parágrafo do texto completo.

segundo parágrafo separado por linha em branco.

terceiro parágrafo.`,
},
```

**Editar o texto de uma opinion:**

Localize pelo `slug` ou `title` e edite o campo `content`. Parágrafos são separados por `\n\n` dentro da template string (entre crases).

**Excluir uma opinion:**

Remova o objeto do array. A rota `/opinions/[slug]` correspondente deixa de existir no próximo build.

**Alterar o slug de uma opinion existente:**

Mude o campo `slug`. A URL antiga vai deixar de funcionar, então só faça isso se o texto ainda não foi compartilhado publicamente.
