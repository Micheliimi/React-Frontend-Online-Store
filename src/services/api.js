export async function getCategories() {
  // Implemente aqui
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const request = await fetch(url);
  const requestJson = await request.json();
  return requestJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const request = await fetch(url);
  const requestJson = await request.json();
  return requestJson;
}
