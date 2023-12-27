import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const fetchProduct = async () => {
    let response = await fetch(`https://dummyjson.com/product/${productId}`);
    let json = await response.json();
    setProduct(json);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid"
          />
        </div>
        <div className="col-lg-8">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <p>Discount: {product.discountPercentage}%</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
}
