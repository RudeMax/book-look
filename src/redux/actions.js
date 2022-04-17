import Axios from "axios";
import {
	FETCH_BOOKS_FAILURE,
	FETCH_BOOKS_REQUEST,
	FETCH_BOOKS_SUCCESS,
	SORT_BOOKS_BY_AUTHOR,
	SORT_BOOKS_BY_DATE,
} from "./types";

export const sortBooksByDate = (books) => {
	return {
		type: SORT_BOOKS_BY_DATE,
		payload: books,
	};
};

export const sortBooksByAuthor = (books) => {
	return {
		type: SORT_BOOKS_BY_AUTHOR,
		payload: books,
	};
};

export const fetchBooks = (data) => async (dispatch) => {
	dispatch({ type: FETCH_BOOKS_REQUEST });
	try {
		const response = await Axios.get(
			`http://openlibrary.org/search.json?q=${data}`
		);
		dispatch({ type: FETCH_BOOKS_SUCCESS, payload: response.data });
	} catch (error) {
		dispatch({ type: FETCH_BOOKS_FAILURE, payload: error.message });
	}
};
