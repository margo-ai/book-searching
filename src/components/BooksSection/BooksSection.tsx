import React, { ReactElement } from 'react';
import { ErrorMessage } from '../ErrorMessage';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks';
import { TransformedBookType } from '../../types/types';
import { FallingLines } from 'react-loader-spinner';

import { fetchMoreBooks, setStartIndex } from '../../reducers/booksSlice';
import {
    BooksCount,
    BookListContainer,
    BooksList,
    SpinnerWrapper,
    LoadMoreButton,
    ListPlaceholder,
    MoreBooksSpinner,
} from './booksSectionStyles';

import { BookItem } from '../BookItem';

export const BooksSection = (): ReactElement => {
    const dispatch = useAppDispatch();
    const booksLoadingStatus = useAppSelector((state) => state.books.booksLoadingStatus);
    const moreBooksLoadingStatus = useAppSelector((state) => state.books.moreBooksLoadingStatus);
    const booksList = useAppSelector((state) => state.books.books);
    const totalItems = useAppSelector((state) => state.books.totalItems);

    const searchValue = useAppSelector((state) => state.books.searchName);
    const sortedBy = useAppSelector((state) => state.books.sortedBy);
    const category = useAppSelector((state) => state.books.category);
    const startIndex = useAppSelector((state) => state.books.startIndex);

    const loadBooks = () => {
        const newStartIndex = startIndex + 30;
        dispatch(setStartIndex(newStartIndex));
        dispatch(fetchMoreBooks({ searchValue, category, sortedBy, newStartIndex }));
    };

    const renderItems = (array: TransformedBookType[]) => {
        const items = array.map((item: TransformedBookType) => {
            return (
                <BookItem
                    id={item.id}
                    title={item.title}
                    key={item.id}
                    authors={item.authors}
                    categories={item.categories}
                    image={item.image}
                    description={item.description}
                />
            );
        });

        return <BooksList>{items}</BooksList>;
    };

    const books = renderItems(booksList);

    const renderBooks = () => {
        return booksList.length === 0 && booksLoadingStatus !== 'error' && booksLoadingStatus !== 'loading' ? (
            <ListPlaceholder>Here you will see the books list</ListPlaceholder>
        ) : booksLoadingStatus === 'error' ? (
            <ErrorMessage />
        ) : booksLoadingStatus === 'loading' ? (
            <SpinnerWrapper>
                <FallingLines height="80" width="80" color="#c19a6b" />
            </SpinnerWrapper>
        ) : (
            books
        );
    };

    const renderMoreBooks = () => {
        return moreBooksLoadingStatus === 'error' ? (
            'Error! Try Again'
        ) : moreBooksLoadingStatus === 'loading' ? (
            <MoreBooksSpinner />
        ) : (
            'Load more books'
        );
    };

    return (
        <>
            <BooksCount>
                {totalItems === 0 ? 'Type something in the search box' : `Found ${totalItems} results`}
            </BooksCount>
            <BookListContainer>{renderBooks()}</BookListContainer>
            {booksList.length !== 0 ? <LoadMoreButton onClick={loadBooks}>{renderMoreBooks()}</LoadMoreButton> : null}
        </>
    );
};
