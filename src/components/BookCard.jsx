import React, { useEffect, useState } from "react";
import "./bookCard.scss";
import noCover from "../noCover.jpeg";
import axios from "axios";

function BookCard({ book }) {
	const [cover, setCover] = useState(noCover);

	const checkCover = async (index) => {
		const imageUrl = `https://covers.openlibrary.org/b/isbn/${book.isbn[index]}.jpg?default=false`;
		axios
			.get(imageUrl)
			.then(() => {
				setCover(imageUrl);
			})
			.catch(function (error) {
				if (error.response.status === 404) {
					if (book?.isbn?.length - 1 > index) {
						checkCover(index + 1);
					}
				}
			});
	};

	useEffect(() => {
		if (book?.isbn?.length) {
			checkCover(0);
		}
	}, [book]);

	return (
		<div className="Book-card">
			<img className="Book-card__cover" src={cover} alt="No cover" />
			<div className="Book-card__description">
				<h2 className="Book-card__description__title">{book.title}</h2>
				<div className="Book-card__description__info">
					<p>
						Author: <span>{book.author_name && book.author_name[0]}</span>
					</p>
					<p>
						Published: <span>{book.first_publish_year}</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default BookCard;
