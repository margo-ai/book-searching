import styled from "styled-components";

import searchIcon from "../../assets/img/search-icon.svg";

import {useDispatch, useSelector} from "react-redux";
import {
	fetchBooks,
	setSearchName,
	setCategory,
	setSortBy,
	setInputError,
	setStartIndex,
} from "../../reducers/booksSlice";

const Header = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */

	border: 1px solid grey;
	background-color: #f4f2ef;
	border-radius: 5px;
	padding: 20px 0;
`;

const Title = styled.h1`
	font-size: 48px;
	color: #000;
	font-weight: 700;
	text-align: center;
	margin-bottom: 35px;

	@media (max-width: 1180px) {
		font-size: 42px;
		margin-bottom: 30px;
	}
	@media (max-width: 1000px) {
		font-size: 35px;
		margin-bottom: 25px;
	}
`;

const SearchFiltersBlock = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 60px;

	@media (max-width: 1180px) {
		padding: 0 45px;
	}
	@media (max-width: 1000px) {
		padding: 0 28px;
	}
`;

const SearchForm = styled.form`
	display: flex;
	position: relative;
	width: 35%;

	@media (max-width: 1300px) {
		margin-right: 20px;
	}
	@media (max-width: 1000px) {
		margin-right: 12px;
	}
`;

const SearchInput = styled.input`
	height: 50px;
	width: 100%;
	padding: 10px;
	border: 1px solid grey;
	border-radius: 5px;

	&:hover,
	&:focus {
		border-color: #c19a6b;
	}

	@media (max-width: 1300px) {
		height: 40px;
	}
	@media (max-width: 1180px) {
		font-size: 18px;
	}
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
	opacity: 1;
	transition: all 0.5s ease;

	@media (max-width: 1300px) {
		height: 40px;
		width: 40px;
	}

	&:hover {
		opacity: 0.5;
		border: 1px solid black;
		border-left: none;
		border-color: #c19a6b;
	}

	& img {
		width: 70%;
		@media (max-width: 1180px) {
			width: 60%;
		}
		@media (max-width: 1000px) {
			width: 50%;
		}
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

	@media (max-width: 1180px) {
		margin-right: 20px;
	}

	@media (max-width: 1000px) {
		margin-right: 10px;
	}

	& label {
		margin-right: 15px;
		@media (max-width: 1180px) {
			font-size: 18px;
		}
		@media (max-width: 1000px) {
			margin-right: 8px;
		}
	}

	& select {
		cursor: pointer;

		width: 100%;
		padding: 10px;
		border-radius: 5px;
		&:hover,
		&:focus {
			border-color: #c19a6b;
		}
		@media (max-width: 1300px) {
			padding: 4px;
		}
		@media (max-width: 1180px) {
			font-size: 18px;
		}
	}
`;

const SortingForm = styled.form`
	display: flex;
	align-items: center;
	& label {
		margin-right: 15px;
		width: 150px;
		@media (max-width: 1180px) {
			font-size: 18px;
		}
		@media (max-width: 1000px) {
			margin-right: 5px;
		}
	}

	& select {
		cursor: pointer;

		width: 100%;
		padding: 10px;
		border-radius: 5px;
		&:hover,
		&:focus {
			border-color: #c19a6b;
		}
		@media (max-width: 1300px) {
			padding: 4px;
		}
		@media (max-width: 1180px) {
			font-size: 18px;
		}
	}
`;

const ErrorText = styled.div`
	color: red;
	font-size: 15px;
	font-weight: 700;
	position: absolute;
	top: -25px;
	left: 50%;
	transform: translateX(-50%);
`;

const HeaderSection = () => {
	const dispatch = useDispatch();
	const searchValue = useSelector((state) => state.books.searchName);
	const sortedBy = useSelector((state) => state.books.sortedBy);
	const category = useSelector((state) => state.books.category);
	const searchError = useSelector((state) => state.books.inputError);
	const startIndex = useSelector((state) => state.books.startIndex);

	function handleChange(e) {
		dispatch(setSearchName(e.target.value));
		console.log(searchValue);
	}

	const searchBooks = (e) => {
		e.preventDefault();

		if (searchValue.length === 0) {
			dispatch(setInputError(true));
		} else {
			let terms = searchValue.replace(/ /g, "");
			console.log(terms, sortedBy);
			dispatch(setStartIndex(0));
			dispatch(fetchBooks({terms, category, sortedBy}));
			dispatch(setInputError(false));
		}
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
						{searchError === true ? (
							<ErrorText>Fill the search box!</ErrorText>
						) : null}
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
