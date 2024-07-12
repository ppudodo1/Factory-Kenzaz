// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news/newsSlice";
import commentsReducer from "../features/storedComments/commentsSlice";
export const store = configureStore({
  reducer: {
    news: newsReducer,
    comments: commentsReducer,
  },
});
