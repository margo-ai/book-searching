import React from 'react';
import { Link } from 'react-router-dom';

import { BookWrapper, Title, Image, Category, Authors } from './bookItemStyles';

import { TransformedBookType } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks';
import { setBook } from '../../reducers/booksSlice';

export const BookItem = ({ id, title, image, authors, categories }: TransformedBookType) => {
    const booksList = useAppSelector((state) => state.books.books);
    const dispatch = useAppDispatch();

    const category = categories !== undefined ? categories[0] : undefined;
    const authorsString = typeof authors !== 'undefined' ? authors.join(', ') : undefined;

    const handleBook = (bookId: string) => {
        localStorage.setItem('bookId', bookId);
        localStorage.setItem('bookList', JSON.stringify(booksList));
        dispatch(setBook(bookId));
    };

    return (
        <BookWrapper key={id}>
            <Link to={`/book-searching/${id}`} onClick={() => handleBook(id)}>
                <Image>
                    <img src={image} alt="book" />
                </Image>
                <Title>{title}</Title>
                <Category>{category}</Category>
                <Authors>{authorsString}</Authors>
            </Link>
        </BookWrapper>
    );
};
