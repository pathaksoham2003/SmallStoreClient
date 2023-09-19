import React, { useState } from "react";
import { createProduct } from "../features/product/productSlice";
import { useDispatch } from "react-redux";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [pro, setPro] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });
  const handleChange = (e) => {
    setPro((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(pro));
    setPro(()=>{
      return {
        name: "",
        price: "",
        image: "",
        description: "",
      }
    })
  };
  return (
    <form className="contain">
      <div className="input-group">
        <input
          type="text"
          value={pro.name}
          name="name"
          onChange={handleChange}
        />
        <label>Name</label>
      </div>
      <div className="input-group">
        <input
          type="number"
          onChange={handleChange}
          value={pro.price}
          name="price"
        />
        <label>Price</label>
      </div>
      <div className="input-group">
        <input
          type="text"
          onChange={handleChange}
          value={pro.image}
          name="image"
        />
        <label>Image</label>
      </div>
      <div className="input-group">
        <input
          type="text"
          onChange={handleChange}
          value={pro.description}
          name="description"
        />
        <label>Description</label>
      </div>
      <button className="form-button" onClick={handleSubmit} type="submit">
        Create the product
      </button>
    </form>
  );
};

export default CreateProduct;
