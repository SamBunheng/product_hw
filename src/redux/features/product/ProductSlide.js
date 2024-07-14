import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api";

const initialState = {
  products: [],
  singleProduct: {},
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetch(`${BASE_URL}services/my_services/`);
    const data = await response.json();
    return data.results;
  }
);
//fetch by id
export const fetchProductsById = createAsyncThunk(
  "product/fetchProductsById",
  async (id) => {
    const response = await fetch(`${BASE_URL}/services`);
    console.log(`Fetching from: ${BASE_URL}/services`);

    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchProductsById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.singleProduct = action.payload;
      })
      .addCase(fetchProductsById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export the reducer
export default productSlice.reducer;
export const selectAllProduct = (state) => state.product.products;
export const selectById = (state) => state.product.singleProduct;
