import {nanoid} from "@reduxjs/toolkit";

export const _transformBooks = (book) => {
	return {
		id: nanoid(),
		title: book.volumeInfo.title,
		authors: book.volumeInfo.authors,
		description: book.volumeInfo.desciption,
		categories: book.volumeInfo.categories,
		image: book.volumeInfo.imageLinks.thumbnail,
	};
};
