
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../types/product";
import { productData } from "../mockapi/productData";

interface productState {
  data: [];
  loading: boolean;
  error: string | null;
}
const initialState: productState = {
  data: [],
  loading: false,
  error: null,
};
//api thunk
export const fetchAllData = createAsyncThunk<Products[]>(
  "product/productall",
  async (_, { rejectWithValue }) => {
  try {
    return productData;
  } catch (error) {
    return rejectWithValue('data not found')
  }
  },
);
//creating slice
const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllData.pending, (state: any) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAllData.fulfilled,
        (state: any, action: PayloadAction<Products[]>) => {
          state.Loading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchAllData.rejected, (state: any) => {
        state.loading = false;
        state.error = state.error.message || "Something went wrong";
      });
  },
});

export default ProductSlice.reducer;
