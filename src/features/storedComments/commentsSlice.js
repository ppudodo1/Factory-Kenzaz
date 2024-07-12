import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    arrOfComments: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addComment: (state, action) => {
      state.arrOfComments.push({
        id: Date.now(),
        user: action.payload.userName,
        userEmail: action.payload.email,
        userComment: action.payload.comment,
        replyComment: action.payload.replyComments || [],
        date: action.payload.formattedDateTime,
      });
      return state;
    },
  },
});
export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
