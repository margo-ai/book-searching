import styled from "styled-components";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FallingLines} from "react-loader-spinner";

import {
	fetchMoreBooks,
	setStartIndex,
	setBoooksList,
} from "../../reducers/booksSlice";

const BooksCount = styled.div`
	margin-top: 30px;
	font-size: 30px;
	font-weight: 700;
	margin-bottom: 15px;
`;

const BookListContainer = styled.div`
	padding: 20px 50px;
	margin-bottom: 20px;

	border: 1px solid grey;
	background-color: #f4f2ef;
	border-radius: 5px;
`;

const BooksList = styled.ul`
	margin-top: 40px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 60px 30px;
`;

const BookItem = styled.li`
	background-color: #fff;
	display: inline-block;

	border-radius: 5px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.1);
	&:hover h3 {
		opacity: 0.5;
		transition: all 0.5s ease;
	}

	& a {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100%;

		padding: 15px;
		/* border: 1px solid grey; */
	}

	&:hover a {
		box-shadow: 0 1px 15px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1);
		transition: all 0.5s ease;
	}
`;

const BookImage = styled.div`
	height: 300px;
	margin-bottom: 18px;

	& img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

const BookTitle = styled.h3`
	font-size: 20px;
	font-weight: 700;
	line-height: 23px;

	margin-bottom: auto;
`;

const BookCategory = styled.div`
	font-size: 18px;
`;

const BookAuthors = styled.div`
	font-size: 16px;
	line-height: 17px;
	font-style: italic;
`;

const SpinnerWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 35px;
`;

const LoadMoreButton = styled.button`
	display: block;
	margin: 0 auto;
	width: 300px;
	padding: 10px;
	color: #fff;
	border-radius: 7px;
	background-color: grey;
	border: none;
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover {
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px,
			rgb(51, 51, 51) 0px 0px 0px 3px;
	}
`;

const BooksSection = () => {
	const dispatch = useDispatch();
	const booksLoadingStatus = useSelector(
		(state) => state.books.booksLoadingStatus
	);
	const booksList = useSelector((state) => state.books.books);
	const totalItems = useSelector((state) => state.books.totalItems);

	const searchValue = useSelector((state) => state.books.searchName);
	const sortedBy = useSelector((state) => state.books.sortedBy);
	const category = useSelector((state) => state.books.category);
	const startIndex = useSelector((state) => state.books.startIndex);

	console.log(booksList);

	function loadBooks() {
		const newStartIndex = startIndex + 30;
		dispatch(setStartIndex(newStartIndex + 30));
		dispatch(
			fetchMoreBooks({searchValue, category, sortedBy, newStartIndex})
		);
	}

	function handleBook(bookId) {
		localStorage.setItem("bookId", bookId);
		localStorage.setItem("bookList", JSON.stringify(booksList));
	}

	function renderItems(array) {
		const items = array.map((item) => {
			const {id, title, authors, image, categories} = item;
			const category =
				categories !== undefined ? categories[0] : undefined;
			const authorsString =
				typeof authors !== "undefined" ? authors.join(", ") : undefined;
			return (
				<BookItem key={id}>
					<Link to={`/${id}`} onClick={() => handleBook(id)}>
						<BookImage>
							<img src={image} alt="book" />
						</BookImage>
						<BookTitle>{title}</BookTitle>
						<BookCategory>{category}</BookCategory>
						<BookAuthors>{authorsString}</BookAuthors>
					</Link>
				</BookItem>
			);
		});

		return <BooksList>{items}</BooksList>;
	}

	const books = renderItems(booksList);

	const errorMessage =
		booksLoadingStatus === "error" ? "Loading error! Try again" : null;
	const spinner =
		booksLoadingStatus === "loading" ? (
			<SpinnerWrapper>
				<FallingLines height={150} width={150} color="#000" />
			</SpinnerWrapper>
		) : null;

	return (
		<>
			<BooksCount>
				{totalItems === 0
					? "Search book by typing a word or phrase in the search box"
					: `Found ${totalItems} results`}
			</BooksCount>
			{/* <div>{booksLoadingStatus}</div> */}
			<BookListContainer>
				{errorMessage}
				{spinner}
				{books}
			</BookListContainer>
			{booksList.length !== 0 ? (
				<LoadMoreButton onClick={loadBooks}>
					Load more books
				</LoadMoreButton>
			) : null}
		</>
	);
};

export default BooksSection;
