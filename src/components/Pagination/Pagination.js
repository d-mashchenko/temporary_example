import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import { Icon } from "../../assets/icons/icons";
import { setPageNumbers } from "../../services/functions";

import "./Pagination.scss";

export function Pagination({
  onPageChange,
  currentPage,
  totalProducts,
  productsPerPage,
}) {
  const pageNumbers = totalProducts
    ? setPageNumbers(totalProducts, productsPerPage)
    : 17;

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<Icon icon="chevron-right" size={35} color={"#757575"} />}
      previousLabel={<Icon icon="chevron-right" size={35} color={"#757575"} />}
      onPageChange={(e) => onPageChange(e.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={pageNumbers}
      renderOnZeroPageCount={null}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      forcePage={currentPage - 1}
      containerClassName="Pagination__container"
      pageClassName="Pagination__page"
      pageLinkClassName="Pagination__page-link"
      activeLinkClassName="active"
      breakClassName="Pagination__break"
      breakLinkClassName="Pagination__break-link"
      previousClassName="Pagination__previous"
      nextClassName="Pagination__next"
      previousLinkClassName="Pagination__previous-link"
      nextLinkClassName="Pagination__next-link"
    />
  );
}

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalProducts: PropTypes.number,
  productsPerPage: PropTypes.number,
};
