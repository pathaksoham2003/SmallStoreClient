import React, { useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectById, updateProduct } from '../features/product/productSlice';
const UpdateProduct = ({productId}) => {
  const dispatch = useDispatch();
  const productToUpdate = useSelector((state)=>selectById(state,productId));
  const [pro,setPro] = useState(productToUpdate);
  useEffect(()=>{
    setPro(productToUpdate);
  },[productId])
  const handleChange = (e) => {
    setPro((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(updateProduct(pro));
  }
  return (
    <>
    <button className="card-button">Update Product</button>
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
    </>
  )
}

export default UpdateProduct