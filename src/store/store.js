import { configureStore } from "@reduxjs/toolkit";
import clicksReducer from "./configureStore";

export default configureStore({
  reducer: {
    clicks: clicksReducer,
  },
});
