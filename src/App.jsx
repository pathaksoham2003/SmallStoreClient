import { useEffect, useState } from "react";
import "./App.css";
import Edit from "./assets/edit.svg";
import Card from "./components/Card";
import { deleteProduct, getAllProducts,selectAllProducts } from "./features/product/productSlice";
import CreateProduct from "./pages/CreateProduct";
import UpdateProduct from "./pages/UpdateProduct";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const value = useSelector(selectAllProducts);
  const [productId , setProductId] = useState("");
  useEffect(()=>{
    dispatch(getAllProducts());
  },[])

  const [addBut, setAddBut] = useState(false);
  
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  }
  return (
    <>
    <button
        className="card-button"
        onClick={() => setAddBut((prev) => !prev)}
      >
        Add Product
      </button>
      {addBut ? <CreateProduct /> : <></>}
      <div className="cards-container">
        {value.map((product) => {
          return <Card cardItem={product} handleId={setProductId} handleDelete={handleDelete}/>;
        })}
      </div>
      { productId.length !== 0 ? <UpdateProduct productId={productId}/> : <></>}
    </>
  );
}

export default App;
