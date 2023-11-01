import React from 'react';
import searchIcon from '../../assets/img/search-icon.svg';

import { useAppDispatch, useAppSelector } from '../../helpers/hooks';
import {
    fetchBooks,
    setSearchName,
    setCategory,
    setSortBy,
    setInputError,
    setStartIndex,
} from '../../reducers/booksSlice';

import {
    Header,
    Title,
    SearchFiltersBlock,
    SearchForm,
    SearchInput,
    SearchButton,
    Filters,
    CategoriesForm,
    SortingForm,
    ErrorText,
} from './headerSectionStyles';

const HeaderSection = (): React.ReactElement => {
    const dispatch = useAppDispatch();
    const searchValue = useAppSelector((state) => state.books.searchName);
    const sortedBy = useAppSelector((state) => state.books.sortedBy);
    const category = useAppSelector((state) => state.books.category);
    const searchError = useAppSelector((state) => state.books.inputError);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setSearchName(e.target.value));
    }

    const searchBooks = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchValue.length === 0) {
            dispatch(setInputError(true));
        } else {
            let terms = searchValue.replace(/ /g, '');
            dispatch(setStartIndex(0));
            dispatch(fetchBooks({ terms, category, sortedBy }));
            dispatch(setInputError(false));
        }
    };

    function handleCategory(e: React.ChangeEvent<HTMLSelectElement>) {
        dispatch(setCategory(e.target.value));
    }

    function handleSortBy(e: React.ChangeEvent<HTMLSelectElement>) {
        dispatch(setSortBy(e.target.value));
    }

    return (
        <>
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
                        <CategoriesForm id="category">
                            <label htmlFor="categories">Categories</label>
                            <select
                                name="categories"
                                id="categories"
                                form="category"
                                defaultValue={'all'}
                                onChange={handleCategory}
                            >
                                <option value="all">All</option>
                                <option value="art">Art</option>
                                <option value="biography">Biography</option>
                                <option value="computers">Computers</option>
                                <option value="history">History</option>
                                <option value="medical">Medical</option>
                                <option value="poetry">Poetry</option>
                            </select>
                        </CategoriesForm>
                        <SortingForm id="sorting">
                            <label htmlFor="sorting">Sorting by</label>
                            <select
                                name="sorting"
                                id="sorting"
                                form="sorting"
                                defaultValue={'relevance'}
                                onChange={handleSortBy}
                            >
                                <option value="relevance">Relevance</option>
                                <option value="newest">Newest</option>
                            </select>
                        </SortingForm>
                    </Filters>
                </SearchFiltersBlock>
            </Header>
        </>
    );
};

export default HeaderSection;
