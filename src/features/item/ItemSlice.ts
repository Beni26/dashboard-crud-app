import http from "@/services/httpService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getAsyncItems = createAsyncThunk("items/getAsyncItems",async(_,{rejectWithValue})=>{
    try {
        const response = await http.get("items");
        return response.data
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
})

interface ItemState {
    loading: boolean;
    items: any[]; 
    error: string;
  }
  
  const initialState: ItemState = {
    loading: false,
    items: [],
    error: ""
  };
  
  const itemsSlice = createSlice({
    name: "item",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getAsyncItems.pending, (state) => {
          state.loading = true;
          state.items = [];
          state.error = "";
        })
        .addCase(getAsyncItems.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload;
          state.error = "";

        })
        .addCase(getAsyncItems.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
    }
  });
  
export default itemsSlice.reducer;
