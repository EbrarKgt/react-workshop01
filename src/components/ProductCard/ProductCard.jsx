import "./ProductCard.css";
import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const handleDelete = (productId) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete product with ID ${props.product.id}?`
    );

    if (confirmDelete) {
      window.alert(`Product with ID ${props.product.id} has been deleted.`);
    }
  };

  return (
    <div className="card">
      <img src={props.product.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-header" style={{ fontWeight: 'bold' }}>{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
        <p className="price">{props.product.price}₺</p>
        <div className="button-container">
        <Link
          to={"/product-detail/" + props.product.id}
          className="btn btn-info btn-sm"
        >
          Details
        </Link>
        <button onClick={handleDelete} className="btn btn-danger btn-sm">
          Delete
        </button>
      </div>
    </div>
    </div>
  );
  }