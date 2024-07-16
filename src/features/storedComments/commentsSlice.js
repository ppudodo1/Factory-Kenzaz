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
        user: action.payload.userDisplayName,
        userEmail: action.payload.userEmail,
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
    replyToComment: (state, action) => {
      const { id, replyComment } = action.payload;
      const comment = state.arrOfComments.find((comment) => comment.id === id);
      if (comment) {
        comment.replyComment.push(replyComment);
      }
      localStorage.setItem("comments", JSON.stringify(state.arrOfComments));
      return state;
    },
  },
});
export const { addComment, replyToComment } = commentsSlice.actions;
export default commentsSlice.reducer;
