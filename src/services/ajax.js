export async function getProducts(limit = 8, page = 0) {
  const response = await fetch(
    `https://api.thedogapi.com/v1/breeds?limit=${limit}&page=${page}`
  );
  if (!response.ok) throw new Error();
  return response.json();
}

export async function getProductDetails(id) {
  const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`);
  if (!response.ok) throw new Error();
  return response.json();
}

export async function getProductImage(imageId) {
  const response = await fetch(
    `https://api.thedogapi.com/v1/images/${imageId}`
  );
  if (!response.ok) throw new Error();
  return response.json();
}

export async function getProductsByFilter(value) {
  const response = await fetch(
    `https://api.thedogapi.com/v1/breeds/search?q=${value}`
  );
  if (!response.ok) throw new Error();
  return response.json();
}

export async function filterCompareData(array) {
  const response = await getProducts(170);
  const idsForCompare = array.map((item) => item.id);
  const comparedData = response.filter((item) =>
    idsForCompare.includes(item.id)
  );
  return comparedData;
}
