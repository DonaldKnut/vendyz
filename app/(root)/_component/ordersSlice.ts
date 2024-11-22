import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunk for fetching orders
export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // Replace with actual orders API
  return await response.json();
});

interface Order {
  id: string;
  itemName: string;
  price: string;
  store: string;
  status: string;
}

interface OrdersState {
  orders: Order[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: OrdersState = {
  orders: [],
  status: "idle",
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch orders.";
      });
  },
});

export default ordersSlice.reducer;
