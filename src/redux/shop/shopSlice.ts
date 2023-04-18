import { createSlice, current } from "@reduxjs/toolkit";
import { ADDTODO, SHOPES } from "../../constants/appData";
import { IShop } from "../../models/IShop";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {},
  reducers: {
    selectShop: (state, action) => {
      const shop = SHOPES.find((el) => el.id === action.payload.id);
      return shop;
    },
    addTodo: (state, action) => {
      const { id, todo } = action.payload;
      ADDTODO(id, todo);
      let temp = current(state) as unknown as IShop;
      return { ...temp, todos: [...temp.todos, todo] };
    },
  },
});

export const { selectShop, addTodo } = shopSlice.actions;

export default shopSlice.reducer;
