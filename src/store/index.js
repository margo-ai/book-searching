import {configureStore} from "@reduxjs/toolkit";
import books from "../reducers/booksSlice";

const store = configureStore({
	reducer: {books},
	devTools: process.env.NODE_ENV !== "production",
});

export default store;
