export function getPriceInTemplates(template: string, price: string) {
  return template.replace('%s', price.toLocaleString())
}
