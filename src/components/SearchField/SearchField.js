import debounce from "lodash.debounce";
import PropTypes from "prop-types";
import { Icon } from "../../assets/icons/icons";

import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getProductsByFilter } from "../../services/ajax";
import { ProductsContext } from "../../App";
import { useSearchParams } from "react-router-dom";

import "./SearchField.scss";

export function SearchField({ instant }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("search") || "");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const { setProductsFromContext } = useContext(ProductsContext);
  const [isFirstMount, setIsFirstMount] = useState(false);

  async function loadProductsByFilter() {
    try {
      const data = await getProductsByFilter(value);
      value && !data.length
        ? setProductsFromContext(null)
        : setProductsFromContext(data);
    } catch {
      setIsError(true);
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (instant) return;
    if (window.location.pathname !== "/products") {
      navigate("/products");
    }
    loadProductsByFilter();
  };

  useEffect(() => {
    if (instant && isFirstMount) {
      searchParams.set("search", value);
      setSearchParams(searchParams);
      loadProductsByFilter();
    }
    setIsFirstMount(true);
  }, [value]);

  useEffect(() => {
    if (searchParams.get("search")) {
      setValue(searchParams.get("search"));
      loadProductsByFilter();
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="SearchField__form">
      <div className="SearchField__container">
        <Icon
          className="SearchField__icon"
          icon="search"
          size={22}
          color={instant ? "#757575" : `#fff`}
        />
        <input
          className={
            instant ? `SearchField__input instant` : "SearchField__input"
          }
          onChange={handleChange}
          value={value}
          type="text"
          placeholder="Search for products"
        />
      </div>
    </form>
  );
}

SearchField.propTypes = {
  instant: PropTypes.bool,
};
