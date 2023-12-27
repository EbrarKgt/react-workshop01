import "./AddProducts.css";
import React, { useState } from "react";

export default function AddProducts() {
  const [newProduct, setNewProduct] = useState({});

  const handleAddNewProduct = () => {
    console.log("New product added:", newProduct);
  };
  const inputFields = [
    { label: "Title", name: "title" },
    { label: "Description", name: "description" },
    { label: "Brand", name: "brand" },
    { label: "Category", name: "category" },
    { label: "Rating", name: "rating" },
    { label: "Stock", name: "stock" },
    { label: "Price", name: "price" },
    { label: "Img URL", name: "img" },
  ];

  return (
    <div className="container mt-5">
      <h2>Add New Product</h2>
      <form>
        {inputFields.map((field, index) => (
          <div className="mb-3" key={index}>
            <label htmlFor={field.name} className="form-label">
              {field.label}
            </label>
            <input
              type="text"
              className="form-control"
              id={field.name}
              name={field.name}
              value={newProduct[field.name]}
            />
          </div>
        ))}
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddNewProduct}
        >
          Save Product
        </button>
      </form>
    </div>
  );
}
