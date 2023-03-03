import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/styles/main.scss";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { ProductInner } from "./pages/ProductInner/ProductInner";

export const ProductsContext = createContext();

function App() {
  const [productsFromContext, setProductsFromContext] = useState([]);
  const [value, setValue] = useState([]);

  return (
    <BrowserRouter>
      <ProductsContext.Provider
        value={{ productsFromContext, setProductsFromContext, value, setValue }}
      >
        <div id="wrapper">
          <Header />
          <div id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductInner />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ProductsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
