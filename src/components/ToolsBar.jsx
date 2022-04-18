import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortBooksByAuthor, sortBooksByDate } from "../redux/actions";
import "./toolsBar.scss";

function ToolsBar() {
	const dispatch = useDispatch();
	const numberOfBooks = useSelector((state) => state?.results);
	const books = useSelector((state) => state?.books);

	const sortByAuthor = (a, b) => {
		return a.author_name?.[0]?.localeCompare?.(b.author_name?.[0]) || 0;
	};

	const sortByDate = (a, b) => {
		const date1 = a.first_publish_year || Infinity;
		const date2 = b.first_publish_year || Infinity;

		if (date1 < date2) {
			return -1;
		}
		if (date1 > date2) {
			return 1;
		}

		return 0;
	};

	const handleSortByAuthor = () => {
		dispatch(sortBooksByAuthor(books.sort(sortByAuthor)));
	};

	const handleSortByDate = () => {
		dispatch(sortBooksByDate(books.sort(sortByDate)));
	};

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
				</div>
			</div>
		)
	);
}

export default ToolsBar;
