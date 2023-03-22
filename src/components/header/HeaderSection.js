import styled from "styled-components";

import searchIcon from "../../assets/img/search-icon.svg";

import {useDispatch, useSelector} from "react-redux";
import {
	fetchBooks,
	setSearchName,
	setCategory,
	setSortBy,
} from "../../reducers/booksSlice";

const Header = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */

	border: 4px solid black;
	padding: 20px 0;
`;

const Title = styled.h1`
	font-size: 48px;
	color: #000;
	font-weight: 700;
	text-align: center;

	margin-bottom: 35px;
`;

const SearchFiltersBlock = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 60px;
`;

const SearchForm = styled.form`
	display: flex;
`;

const SearchInput = styled.input`
	height: 50px;
	width: 380px;
	padding: 10px;
	border: 1px solid grey;
	border-radius: 5px;
`;

const SearchButton = styled.button`
	width: 50px;
	height: 50px;
	float: right;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;

	border: 1px solid grey;
	border-left: none;
	cursor: pointer;
	border-radius: 5px;
	transition: all 1s ease;
	&:hover {
		background-color: grey;
	}

	& img {
		width: 70%;
	}
`;

const Filters = styled.div`
	display: flex;
	justify-content: space-between;
`;

const CategoriesForm = styled.form`
	margin-right: 30px;
	display: flex;
	align-items: center;
	& label {
		margin-right: 15px;
	}

	& select {
		cursor: pointer;

		width: 100%;
		padding: 10px;
		border-radius: 5px;
	}

	& label {
		margin-right: 15px;
		display: block;
	}
`;

const SortingForm = styled.form`
	margin-right: 30px;
	display: flex;
	align-items: center;
	& label {
		margin-right: 15px;
		width: 150px;
	}

	& select {
		cursor: pointer;

		width: 100%;
		padding: 10px;
		border-radius: 5px;
	}
`;

const HeaderSection = () => {
	const dispatch = useDispatch();
	const searchValue = useSelector((state) => state.books.searchName);
	const sortedBy = useSelector((state) => state.books.sortedBy);
	const category = useSelector((state) => state.books.category);

	function handleChange(e) {
		dispatch(setSearchName(e.target.value));
		console.log(searchValue);
	}

	const searchBooks = (e) => {
		e.preventDefault();
		let terms = searchValue.replace(/ /g, "");
		console.log(terms, sortedBy);
		dispatch(fetchBooks({terms, category, sortedBy}));
	};

	function handleCategory(e) {
		dispatch(setCategory(e.target.value));
		// console.log(e.target.value);
	}

	function handleSortBy(e) {
		dispatch(setSortBy(e.target.value));
		// console.log(e.target.value);
	}

	return (
		<>
			<Header>
				<Title>Book Searching</Title>
				<SearchFiltersBlock>
					<SearchForm id="search" onSubmit={searchBooks}>
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
								defaultValue={"all"}
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
								defaultValue={"relevance"}
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
