import { nanoid } from '@reduxjs/toolkit';
import { GoogleBookType, TransformedBookType } from '../types/types';

export const _transformBooks = (book: GoogleBookType): TransformedBookType => {
    return {
        id: nanoid(),
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        categories: book.volumeInfo.categories,
        image: book.volumeInfo.imageLinks.thumbnail,
    };
};
