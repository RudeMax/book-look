import React from "react";
import BookCard from "./BookCard";
import { useSelector } from "react-redux";
import ToolsBar from "./ToolsBar";
import Loader from "./Loader";

function BooksList() {
	const books = useSelector((state) => state?.books);
	const isLoading = useSelector((state) => state?.isSearching);

	if (isLoading) {
		return <Loader />;
	}
	console.log(books);
	return (
		<div>
			<ToolsBar />
			{books && books.length ? (
				books.map((book) => <BookCard key={book.key} book={book} />)
			) : (
				<div>No results yet :(</div>
			)}
		</div>
	);
}

export default BooksList;
