import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunk for fetching transactions
export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // Replace with actual transactions API
    return await response.json();
  }
);

interface Transaction {
  id: string;
  name: string;
  reference: string;
  amount: string;
  date: string;
  type: string;
}

interface TransactionsState {
  transactions: Transaction[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TransactionsState = {
  transactions: [],
  status: "idle",
  error: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch transactions.";
      });
  },
});

export default transactionsSlice.reducer;
