import { createSlice } from "@reduxjs/toolkit";
import { DataFromForm, Item } from "../types";
import { store } from ".";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        request: {query: '', filter: 'All', orderBy: 'relevance'} as DataFromForm,
        totalItems: 0,
        books: [] as Item[],
        isLoading: false,
    },
    reducers: {
        addBooks(state, action) {
            state.totalItems = action.payload.totalItems;
            state.books = [...state.books, ...action.payload.items];
        },
        searchBooks(state, action) {
            state.request = {...action.payload};
        },
        newSearch(state) {
            state.request = {query: '', filter: 'All', orderBy: 'relevance'};
            state.books.length = 0;
        },
        search(state, action) {
            state.isLoading = action.payload;
        }
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const books = (state: RootState) : Item[] => state.search.books;
export const totalItems = (state: RootState): number => state.search.totalItems;
export const request = (state: RootState): DataFromForm => state.search.request;
export const isLoading = (state: RootState): boolean => state.search.isLoading;

export const {addBooks, searchBooks, newSearch, search} = searchSlice.actions;
export default searchSlice.reducer;