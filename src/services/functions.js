export function getVisiblePages(filteredData, itemsPerPage, currentPage) {
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const slicedArray = filteredData.slice(firstIndex, lastIndex);
  return slicedArray;
}

export function setPageNumbers(totalItems, itemsPerPage) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return pageNumbers.length;
}
