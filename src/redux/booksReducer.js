import {
	FETCH_BOOKS_FAILURE,
	FETCH_BOOKS_REQUEST,
	FETCH_BOOKS_SUCCESS,
	SORT_BOOKS_BY_AUTHOR,
	SORT_BOOKS_BY_DATE,
} from "./types";

const initState = {
	books: [],
	results: null,
	isSearching: false,
	error: "",
};

export const booksReducer = (state = initState, action) => {
	switch (action.type) {
		case FETCH_BOOKS_REQUEST:
			return {
				...state,
				isSearching: true,
			};
		case FETCH_BOOKS_SUCCESS:
			return {
				...state,
				isSearching: false,
				error: false,
				books: action.payload.docs,
				results: action.payload.numFound,
			};
		case FETCH_BOOKS_FAILURE:
			return {
				...state,
				isSearching: false,
				error: action.payload,
			};
		case SORT_BOOKS_BY_DATE:
			return {
				...state,
				books: action.payload,
			};
		case SORT_BOOKS_BY_AUTHOR:
			return {
				...state,
				books: action.payload,
			};
		default:
			return state;
	}
};
