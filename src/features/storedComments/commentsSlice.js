import { createSlice } from "@reduxjs/toolkit";
const initialComments = JSON.parse(localStorage.getItem("comments")) || [];
const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    arrOfComments: initialComments,
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
        articleId: action.payload.articleId,
      });

      localStorage.setItem("comments", JSON.stringify(state.arrOfComments));
      return state;
    },
    fetchedData: (state, action = {}) => {
      state.initialState = action.payload;
    },
  },
});
export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
