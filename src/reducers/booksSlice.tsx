import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { _transformBooks } from '../helpers/transformData';
import { StateType } from '../types/types';

const initialState: StateType = {
    searchName: '',
    inputError: false,
    books: [],
    category: 'all',
    sortedBy: '',
    booksLoadingStatus: 'idle',
    moreBooksLoadingStatus: 'idle',
    selectedBook: null,
    totalItems: 0,
    startIndex: 0,
};

type FetchBooksPropsType = {
    terms: string;
    category: string;
    sortedBy: string;
};

type FetchMoreBooksPropsType = {
    searchValue: string;
    category: string;
    sortedBy: string;
    newStartIndex: number;
};

const _apiBase = 'https://www.googleapis.com/books/v1/volumes?';
const _apiKey = 'key=AIzaSyCqewy5-hdUK4Jffnlsy2oR4jTueEm0Q_s';

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async ({ terms, category, sortedBy }: FetchBooksPropsType) => {
        let url = `${_apiBase}q=${terms}${category !== 'all' ? `+subject:${category}` : ''}&orderBy=${
            sortedBy ? sortedBy : 'relevance'
        }&maxResults=30&${_apiKey}`;

        const response = await fetch(url);
        const data = await response.json();
        const transformedData = data.items.map(_transformBooks);
        return [transformedData, data.totalItems];
    }
);

export const fetchMoreBooks = createAsyncThunk(
    'books/fetchMoreBooks',
    async ({ searchValue, category, sortedBy, newStartIndex }: FetchMoreBooksPropsType) => {
        let url = `${_apiBase}q=${searchValue}${category !== 'all' ? `+subject:${category}` : ''}&orderBy=${
            sortedBy ? sortedBy : 'relevance'
        }&startIndex=${newStartIndex}&maxResults=30&${_apiKey}`;

        const response = await fetch(url);
        const data = await response.json();
        const transformedData = data.items.map(_transformBooks);
        return transformedData;
    }
);

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setSearchName: (state, action: PayloadAction<string>) => {
            state.searchName = action.payload;
            state.booksLoadingStatus = 'idle';
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        setSortBy: (state, action: PayloadAction<string>) => {
            state.sortedBy = action.payload;
        },
        setBook: (state, action: PayloadAction<string>) => {
            state.selectedBook = action.payload;
        },
        setInputError: (state, action: PayloadAction<boolean>) => {
            state.inputError = action.payload;
        },
        setStartIndex: (state, action: PayloadAction<number>) => {
            state.startIndex = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.booksLoadingStatus = 'loading';
                state.books = [];
                state.totalItems = 0;
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.booksLoadingStatus = 'idle';
                state.books = action.payload[0];
                state.totalItems = action.payload[1];
            })
            .addCase(fetchBooks.rejected, (state) => {
                state.booksLoadingStatus = 'error';
            })
            .addCase(fetchMoreBooks.pending, (state) => {
                state.moreBooksLoadingStatus = 'loading';
            })
            .addCase(fetchMoreBooks.fulfilled, (state, action) => {
                state.moreBooksLoadingStatus = 'idle';
                state.books = state.books.concat(action.payload);
            })
            .addCase(fetchMoreBooks.rejected, (state) => {
                state.moreBooksLoadingStatus = 'error';
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = booksSlice;
export const { setSearchName, setCategory, setSortBy, setBook, setInputError, setStartIndex } = actions;

export default reducer;
