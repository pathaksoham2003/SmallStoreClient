import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const host = import.meta.env.VITE_SERVER_URL;
export const getAllProducts = createAsyncThunk("AllProduct/get",async()=>{
  const response  = await fetch(`${host}/product/all`)
  const data = await response.json();
  return data;
})
export const createProduct = createAsyncThunk("AllProduct/create",async(productData)=>{
  const response = await fetch(`${host}/product/create`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(productData)
  })
  const data = await response.json();
  return data;
})
export const updateProduct = createAsyncThunk("AllPoroduct/update",async(productData)=>{
  const response = await fetch(`${host}/product/update/${productData._id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(productData)
  })
  const data = await response.json();
  return data;
})

export const deleteProduct = createAsyncThunk("AllProduct/delete",async(id)=>{
  const response = await fetch(`${host}/product/delete/${id}`,{
    method:"DELETE",
    headers:{
      "Content-Type":"application/json"
    }
  })
  const data = await response.json();
  return data;
})
const productSlice = createSlice({
  name:"AllProduct",
  initialState:[],
  reducers: {
  },
  extraReducers:(builder)=>{
    builder
    .addCase(getAllProducts.fulfilled , (state,action)=>{
      return action.payload;
    })
    .addCase(createProduct.fulfilled, (state,action)=>{
      state.push(action.payload);
    })
    .addCase(updateProduct.fulfilled,(state,action)=>{
      const productIndex = state.findIndex((product)=> product._id === action.payload._id);
      if(productIndex !== -1){
        state[productIndex] = {...state[productIndex] , ...action.payload};
      }
    })
    .addCase(deleteProduct.fulfilled , (state,action)=>{
      return state.filter(product=> product._id !== action.payload._id)
    })
  }
})

export const selectById = (state , id) => {
  const allProducts = selectAllProducts(state);
  console.log(allProducts.find((product)=> product._id === id));
  return allProducts.find((product)=> product._id === id)
}

export const selectAllProducts = (state) => state.product;

export default productSlice.reducer;