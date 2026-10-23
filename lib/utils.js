// Campos de texto/link vazios no CMS chegam como string vazia; trata como "sem valor".
// Fica separado de content.js porque este arquivo também é usado em componentes de navegador,
// e content.js depende de `node:fs`.
export function hasValue(value) {
  return typeof value === 'string' && value.trim().length > 0
}
