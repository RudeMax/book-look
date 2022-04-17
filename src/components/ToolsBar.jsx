import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortBooksByAuthor, sortBooksByDate } from "../redux/actions";
import "./toolsBar.scss";

function ToolsBar() {
	const dispatch = useDispatch();
	const numberOfBooks = useSelector((state) => state?.results);
	const books = useSelector((state) => state?.books);

	const sortByAuthor = (a, b) => {
		if (a.author_name > b.author_name) {
			return 1;
		} else if (b.author_name > a.author_name) {
			return -1;
		} else {
			return 0;
		}
	};

	const sortByDate = (a, b) => {
		if (a.first_publish_year > b.first_publish_year) {
			return 1;
		} else if (b.first_publish_year > a.first_publish_year) {
			return -1;
		} else {
			return 0;
		}
	};

	const handleSortByAuthor = () => {
		dispatch(sortBooksByAuthor(books.sort(sortByAuthor)));
		console.log(books);
	};

	const handleSortByDate = () => {
		dispatch(sortBooksByDate(books.sort(sortByDate)));
	};

	const test = [
		{ ble: "sdfdsf", sdf: "fsdfsdf" },
		{ ble: "sdfdsf", sdf: "fsdfsdf" },
		{ ble: "sdfdsf", sdf: "fsdfsdf" },
		{ ble: "sdfdsf", sdf: "fsdfsdf" },
	];

	return (
		numberOfBooks && (
			<div className="Tool-bar">
				<div className="Tool-bar__results">
					Found{" "}
					<span className="Tool-bar__results__number">{numberOfBooks}</span>{" "}
					results
				</div>
				<div>
					<button className="Tool-bar__btn" onClick={handleSortByAuthor}>
						author
					</button>
					<button className="Tool-bar__btn" onClick={handleSortByDate}>
						year
					</button>
					<button
						className="Tool-bar__btn"
						onClick={() => dispatch(sortBooksByAuthor(test))}
					>
						test
					</button>
				</div>
			</div>
		)
	);
}

export default ToolsBar;
