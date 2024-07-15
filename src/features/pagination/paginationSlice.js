import { createSlice } from "@reduxjs/toolkit";
const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    firstArticleIndex: 0,
    lastArticleIndex: 5,
  },
  reducers: {
    changeIndex: (state, action) => {
      state.firstArticleIndex = action.payload.firstIndex;
      state.lastArticleIndex = action.payload.lastIndex;
    },
  },
});
export const { changeIndex } = paginationSlice.actions;
export default paginationSlice.reducer;
