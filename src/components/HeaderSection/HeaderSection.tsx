import React, { ReactElement } from 'react';
import searchIcon from '../../assets/images/search-icon.svg';

import { useAppDispatch, useAppSelector } from '../../helpers/hooks';
import {
    fetchBooks,
    setSearchName,
    setCategory,
    setSortBy,
    setInputError,
    setStartIndex,
} from '../../reducers/booksSlice';

import { Select } from '../Select/Select';

import {
    Header,
    Title,
    SearchFiltersBlock,
    SearchForm,
    SearchInput,
    SearchButton,
    Filters,
    ErrorText,
} from './headerSectionStyles';

export const HeaderSection = (): ReactElement => {
    const dispatch = useAppDispatch();
    const searchValue = useAppSelector((state) => state.books.searchName);
    const sortedBy = useAppSelector((state) => state.books.sortedBy);
    const category = useAppSelector((state) => state.books.category);
    const searchError = useAppSelector((state) => state.books.inputError);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchName(e.target.value));
    };

    const searchBooks = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchValue.length === 0) {
            dispatch(setInputError(true));
        } else {
            const terms = searchValue.replace(/ /g, '');
            dispatch(setStartIndex(0));
            dispatch(fetchBooks({ terms, category, sortedBy }));
            dispatch(setInputError(false));
        }
    };

    const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setCategory(e.target.value));
    };

    const handleSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSortBy(e.target.value));
    };

    const categories = [
        { label: 'All', value: 'all' },
        { label: 'Art', value: 'art' },
        { label: 'Biography', value: 'biography' },
        { label: 'Computers', value: 'computers' },
        { label: 'History', value: 'history' },
        { label: 'Medical', value: 'medical' },
        { label: 'Poetry', value: 'poetry' },
    ];

    const sorting = [
        { label: 'Relevance', value: 'relevance' },
        { label: 'Newest', value: 'newest' },
    ];
    return (
        <Header>
            <Title>Book Searching</Title>
            <SearchFiltersBlock>
                <SearchForm id="search" onSubmit={searchBooks}>
                    {searchError === true ? <ErrorText>Fill the search box!</ErrorText> : null}
                    <SearchInput
                        type="text"
                        placeholder="Search book"
                        autoFocus
                        value={searchValue}
                        onChange={handleChange}
                    />
                    <SearchButton type="submit" form="search">
                        <img src={searchIcon} alt="searchIcon" />
                    </SearchButton>
                </SearchForm>
                <Filters>
                    <Select label="Categories" options={categories} onChange={handleCategory} />
                    <Select label="Sort by" options={sorting} onChange={handleSortBy} />
                </Filters>
            </SearchFiltersBlock>
        </Header>
    );
};
