import fs from 'node:fs'
import path from 'node:path'

// Lê um arquivo de `content/` em tempo de build. É o único ponto de acesso ao conteúdo:
// os componentes nunca têm texto fixo, tudo vem destes arquivos (editáveis pelo CMS).
// Só pode ser importado por componentes de servidor (usa `node:fs`).
export function getContent(name) {
  const file = path.join(process.cwd(), 'content', `${name}.json`)
  return JSON.parse(fs.readFileSync(file, 'utf8'))
}
