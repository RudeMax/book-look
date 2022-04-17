import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../redux/actions";
import "./searchBar.scss";

function SearchBar() {
	const dispatch = useDispatch();
	const [requestData, setRequestData] = useState("");

	const handleChange = (e) => {
		e.preventDefault();
		setRequestData(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(fetchBooks(requestData.split(" ").join("+")));
		setRequestData("");
	};

	return (
		<div className="Search-bar">
			<form className="Search-bar__form" onSubmit={(e) => handleSubmit(e)}>
				<input
					className="Search-bar__form__input"
					type="text"
					value={requestData}
					onChange={(e) => handleChange(e)}
				></input>
				<button className="Search-bar__form__btn">Search</button>
			</form>
		</div>
	);
}

export default SearchBar;
