import { Product } from "@/interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ISelectedItems {
  selectedItems: Record<string, Partial<Product>>;
}

const initialState: ISelectedItems = {
  selectedItems: {},
};

const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<Product>) => {
      state.selectedItems[action.payload.category] = action.payload;
    },
  },
});

export const { selectProduct } = builderSlice.actions;
export default builderSlice.reducer;
