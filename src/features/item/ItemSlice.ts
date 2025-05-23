import http from "@/services/httpService";
import { Item } from "@/types/items";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


export const getAsyncItems = createAsyncThunk(
  "items/getAsyncItems",
  async (
    {
      page,
      limit,
      sortBy = "date",
      orderBy = "desc",
      category,
    }: {
      page: number;
      limit: number;
      sortBy?: string;
      orderBy?: "asc" | "desc";
      category?: string;
    },
    { rejectWithValue }
  ) => {
    try {
      let query = `/items?_page=${page}&_limit=${limit}&_sort=${sortBy}&_order=${orderBy}`;
      if (category && category !== "All") {
        query += `&category=${category}`;
      }
      const response = await http.get(query);

      return {
        data: response.data,
        total: Number(response.headers["x-total-count"]),
      };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);


export const addAsyncItem = createAsyncThunk<Item,Item>("item/addAsyncItems",async(payload,{rejectWithValue})=>{
  try {
    const response = await http.post("items",payload);
    toast.success('Item added successfully!');

    return response.data
  }  catch (error: unknown) {
    if (error instanceof Error) {
      toast.error('Failed to add item. Please try again.');


      return rejectWithValue(error.message);
    } else {
      return rejectWithValue("An unknown error occurred");
    }
  }
})

export const updateAsyncItem = createAsyncThunk<Item, Item>(
  "item/updateAsyncItem",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await http.patch(`items/${payload.id}`, payload); 
      toast.success('Item updated successfully!');

      return response.data; 
    } catch (error: unknown) {
      toast.error('Failed to update item. Please try again.');
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);


export const deleteAsyncItem = createAsyncThunk(
  'item/deleteAsyncItem',
  async (id: number, { rejectWithValue }) => {
    try {
       await http.delete(`items/${id}`);
      toast.success('Item deleted successfully!');
      return id;  
    } catch (error: unknown) {
      toast.error('Failed to delete item. Please try again.');
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);


export const searchAsyncItems = createAsyncThunk(
  "items/searchAsyncItems",
  async (
    { search, limit }: { search: string; limit: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await http.get(`/items?_limit=${limit}&title_like=${search}`);
      return {
        data: response.data,
        total: Number(response.headers["x-total-count"]),
      };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);

interface ItemState {
    loading: boolean;
    items: any[]; 
    error: string;
    total: number; // تعداد کل آیتم‌ها برای محاسبه تعداد صفحات

  }
  
  const initialState: ItemState = {
    loading: false,
    items: [],
    error: "",
    total:0,
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
          state.items = action.payload.data;
          state.total = action.payload.total;
          state.error = "";

        })
        .addCase(getAsyncItems.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });



        builder
        .addCase(addAsyncItem.pending, (state) => {
          state.loading = true;
          state.error = "";
        })
        .addCase(addAsyncItem.fulfilled, (state, action) => {
          state.loading = false;
          state.items.push(action.payload)
          state.error = "";

        })
        .addCase(addAsyncItem.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
        


        builder
        .addCase(updateAsyncItem.pending, (state) => {
          state.loading = true;
          state.error = "";
        })
        .addCase(updateAsyncItem.fulfilled, (state, action) => {
          state.loading = false;
          const updatedItem = action.payload;
          const index = state.items.findIndex((item) => item.id === updatedItem.id);
          if (index !== -1) {
            state.items[index] = updatedItem; 
          }
          state.error = "";
        })
        .addCase(updateAsyncItem.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });




        builder
        .addCase(deleteAsyncItem.pending, (state) => {
          state.loading = true;
          state.error = "";
        })
        .addCase(deleteAsyncItem.fulfilled, (state, action) => {
          state.loading = false;
          state.items = state.items.filter(item => item.id !== action.payload);
          state.error = "";
        })
        .addCase(deleteAsyncItem.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });




        builder
        .addCase(searchAsyncItems.pending, (state) => {
          state.loading = true;
          state.items = [];
          state.error = "";
        })
        .addCase(searchAsyncItems.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload.data;
          state.total = action.payload.total;
          state.error = "";

        })
        .addCase(searchAsyncItems.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });

    }
  });
  
export default itemsSlice.reducer;
