import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { booksReducer } from "./booksReducer";

const store = createStore(
	booksReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
