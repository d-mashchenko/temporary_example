import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getProductDetails, getProductImage } from '../../services/ajax';

import { Preloader } from '../../components/Preloader/Preloader';
import { ErrorMessage } from '../../components/ErrorMesage/ErrorMessage';

import './ProductInner.scss';

export function ProductInner() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [productImageUrl, setPdouctImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function loadProductDetails() {
    try {
      const data = await getProductDetails(id);
      setProduct(data);
    } catch {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  }

  async function loadProductImage() {
    try {
      const id = product.reference_image_id;
      const data = await getProductImage(id);
      setPdouctImageUrl(data.url);
    } catch {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProductDetails();
  }, []);

  useEffect(() => {
    product && loadProductImage();
  }, [product]);

  return (
    <div className="ProductInner">
      {loading && <Preloader />}
      {isError && <ErrorMessage />}
      <div className="container">
        <div className="ProductInner__link-container">
          {productImageUrl && (
            <Link className="ProductInner__link" to="/products">
              Go to dogs list
            </Link>
          )}
        </div>
        <div className="ProductInner__content">
          <div className="ProductInner__image-container">
            {productImageUrl && (
              <img
                className="ProductInner__image"
                src={productImageUrl}
                alt="fine_dog"
              />
            )}
          </div>
          <div className="ProductInner__info-container">
            {product && (
              <>
                <h2 className="ProductInner__title">{product.name}</h2>
                <h5 className="ProductInner__subtitle">
                  <b>Bred for: </b>
                  {product.bred_for
                    ? product.bred_for.toLowerCase()
                    : ' unknown'}
                </h5>
                <h5 className="ProductInner__subtitle">
                  <b>Country origin:</b>
                  {product.origin ? product.origin : ' unknown'}
                </h5>
                <h5 className="ProductInner__subtitle">
                  <b>Height:</b>
                  {` ${product.height.metric} cm (${product.height.imperial} inch)`}
                </h5>
                <h5 className="ProductInner__subtitle">
                  <b>Weight:</b>
                  {` ${product.weight.metric} kg (${product.weight.imperial} lb)`}
                </h5>
                <h5 className="ProductInner__subtitle">
                  <b>Life span: </b>
                  {product.life_span}
                </h5>
                <h5 className="ProductInner__subtitle">
                  <b>Temperament: </b>
                  {product.temperament
                    ? product.temperament.toLowerCase()
                    : ' unknown'}
                </h5>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
