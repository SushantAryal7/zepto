// redux/productsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { firestore } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const querySnapshot = await getDocs(collection(firestore, "products"));
    let productsList = [];
    querySnapshot.forEach((doc) => {
      productsList.push({ id: doc.id, ...doc.data() });
    });
    return productsList;
  }
);

// Async thunk to add a product
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (newProduct) => {
    const docRef = await addDoc(collection(firestore, "products"), newProduct);
    return { id: docRef.id, ...newProduct };
  }
);

// Async thunk to delete a product
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    await deleteDoc(doc(firestore, "products", productId));
    return productId;
  }
);

// Async thunk to update a product
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, updatedProduct }) => {
    const productRef = doc(firestore, "products", id);
    await updateDoc(productRef, updatedProduct);
    return { id, updatedProduct };
  }
);

// Slice for products
const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = {
            ...state.products[index],
            ...action.payload.updatedProduct,
          };
        }
      });
  },
});

export default productsSlice.reducer;
