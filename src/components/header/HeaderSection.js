import React from 'react';
import searchIcon from '../../assets/img/search-icon.svg';

import { useDispatch, useSelector } from 'react-redux';
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

const HeaderSection = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.books.searchName);
    const sortedBy = useSelector((state) => state.books.sortedBy);
    const category = useSelector((state) => state.books.category);
    const searchError = useSelector((state) => state.books.inputError);

    function handleChange(e) {
        dispatch(setSearchName(e.target.value));
        console.log(searchValue);
    }

    const searchBooks = (e) => {
        e.preventDefault();

        if (searchValue.length === 0) {
            dispatch(setInputError(true));
        } else {
            let terms = searchValue.replace(/ /g, '');
            console.log(terms, sortedBy);
            dispatch(setStartIndex(0));
            dispatch(fetchBooks({ terms, category, sortedBy }));
            dispatch(setInputError(false));
        }
    };

    function handleCategory(e) {
        dispatch(setCategory(e.target.value));
    }

    function handleSortBy(e) {
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
