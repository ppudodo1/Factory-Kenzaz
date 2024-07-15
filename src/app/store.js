// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news/newsSlice";
import commentsReducer from "../features/storedComments/commentsSlice";
import paginationReducer from "../features/pagination/paginationSlice";
export const store = configureStore({
  reducer: {
    news: newsReducer,
    comments: commentsReducer,
    pagination: paginationReducer,
  },
});
