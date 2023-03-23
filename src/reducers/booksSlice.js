import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {_transformBooks} from "../helpers/transformData";

const initialState = {
	searchName: "",
	inputError: false,
	books: [],
	category: "all",
	sortedBy: "",
	booksLoadingStatus: "idle",
	selectedBook: null,
	totalItems: 0,
	startIndex: 0,
};

const _apiBase = "https://www.googleapis.com/books/v1/volumes?";
const _apiKey = "key=AIzaSyCqewy5-hdUK4Jffnlsy2oR4jTueEm0Q_s";

export const fetchBooks = createAsyncThunk(
	"books/fetchBooks",
	async ({terms, category, sortedBy}) => {
		console.log(category);
		let url = `${_apiBase}q=${terms}${
			category !== "all" ? `+subject:${category}` : ""
		}&orderBy=${
			sortedBy ? sortedBy : "relevance"
		}&maxResults=30&${_apiKey}`;

		const response = await fetch(url);
		const data = await response.json();
		console.log(url);
		const transformedData = data.items.map(_transformBooks);
		return [transformedData, data.totalItems];
	}
);

export const fetchMoreBooks = createAsyncThunk(
	"books/fetchMoreBooks",
	async ({searchValue, category, sortedBy, newStartIndex}) => {
		let url = `${_apiBase}q=${searchValue}${
			category !== "all" ? `+subject:${category}` : ""
		}&orderBy=${
			sortedBy ? sortedBy : "relevance"
		}&startIndex=${newStartIndex}&maxResults=30&${_apiKey}`;

		const response = await fetch(url);
		const data = await response.json();
		console.log(url);
		const transformedData = data.items.map(_transformBooks);
		return transformedData;
	}
);

const booksSlice = createSlice({
	name: "books",
	initialState,
	reducers: {
		setSearchName: (state, action) => {
			state.searchName = action.payload;
			state.booksLoadingStatus = "idle";
		},
		setCategory: (state, action) => {
			state.category = action.payload;
		},
		setSortBy: (state, action) => {
			state.sortedBy = action.payload;
		},
		setBook: (state, action) => {
			state.selectedBook = action.payload;
		},
		setInputError: (state, action) => {
			state.inputError = action.payload;
		},
		setStartIndex: (state, action) => {
			state.startIndex = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchBooks.pending, (state) => {
				state.booksLoadingStatus = "loading";
				state.books = [];
				state.totalItems = 0;
			})
			.addCase(fetchBooks.fulfilled, (state, action) => {
				state.booksLoadingStatus = "idle";
				state.books = action.payload[0];
				state.totalItems = action.payload[1];
			})
			.addCase(fetchBooks.rejected, (state) => {
				state.booksLoadingStatus = "error";
			})
			.addCase(fetchMoreBooks.pending, (state) => {
				state.booksLoadingStatus = "loading";
			})
			.addCase(fetchMoreBooks.fulfilled, (state, action) => {
				state.booksLoadingStatus = "idle";
				state.books = state.books.concat(action.payload);
			})
			.addCase(fetchMoreBooks.rejected, (state) => {
				state.booksLoadingStatus = "error";
			})
			.addDefaultCase(() => {});
	},
});

const {actions, reducer} = booksSlice;
export const {
	setSearchName,
	setCategory,
	setSortBy,
	setBook,
	setInputError,
	setStartIndex,
} = actions;

export default reducer;
