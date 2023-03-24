import styled from "styled-components";
import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FallingLines, InfinitySpin} from "react-loader-spinner";

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
	padding-left: 15px;
	@media (max-width: 1180px) {
		font-size: 25px;
	}
	@media (max-width: 1000px) {
		font-size: 20px;
		margin-top: 18px;
		margin-bottom: 10px;
	}
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

	@media (max-width: 1300px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 1180px) {
		gap: 40px 20px;
	}
	@media (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 50px 50px;
	}
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

	@media (max-width: 1300px) {
		height: 260px;
	}
	@media (max-width: 1180px) {
		height: 250px;
	}

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
	margin-bottom: 15px;
	@media (max-width: 1180px) {
		font-size: 18px;
		line-height: 20px;
		margin-bottom: 10px;
	}
	@media (max-width: 1000px) {
		font-size: 20px;
	}
`;

const BookCategory = styled.div`
	font-size: 18px;
	@media (max-width: 1180px) {
		font-size: 16px;
	}
`;

const BookAuthors = styled.div`
	font-size: 16px;
	line-height: 17px;
	font-style: italic;
	@media (max-width: 1180px) {
		font-size: 15px;
	}
`;

const SpinnerWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 35px;
`;

const LoadMoreButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	max-height: 50px;
	width: 20%;
	padding: 10px;
	color: #000;
	border-radius: 7px;
	background-color: #f4f2ef;
	border: 1px solid grey;
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover {
		opacity: 0.5;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px,
			rgb(51, 51, 51) 0px 0px 0px 3px;
	}
	@media (max-width: 1180px) {
		width: 25%;
		font-size: 19px;
	}
`;

const ListPlaceholder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 23px;
	margin-top: 15px;
`;

const BooksSection = () => {
	const dispatch = useDispatch();
	const booksLoadingStatus = useSelector(
		(state) => state.books.booksLoadingStatus
	);
	const moreBooksLoadingStatus = useSelector(
		(state) => state.books.moreBooksLoadingStatus
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
		dispatch(setStartIndex(newStartIndex));
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
		booksLoadingStatus === "error" ? <ErrorMessage /> : null;
	const spinner =
		booksLoadingStatus === "loading" ? (
			<SpinnerWrapper>
				<FallingLines height={100} width={100} color="#c19a6b" />
			</SpinnerWrapper>
		) : null;

	const moreBooksErrorMessage =
		moreBooksLoadingStatus === "error" ? "Error! Try Again" : null;
	const moreBooksSpinner =
		moreBooksLoadingStatus === "loading" ? (
			<FallingLines width={50} height={40} color="#c19a6b" />
		) : null;
	const buttonText =
		moreBooksLoadingStatus !== "error" &&
		moreBooksLoadingStatus !== "loading"
			? "Load more books"
			: null;

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
				{booksList.length === 0 && booksLoadingStatus !== "error" ? (
					<ListPlaceholder>
						Here you will see the books list
					</ListPlaceholder>
				) : null}
				{books}
			</BookListContainer>
			{booksList.length !== 0 ? (
				<LoadMoreButton onClick={loadBooks}>
					{moreBooksErrorMessage}
					{moreBooksSpinner}
					{buttonText}
				</LoadMoreButton>
			) : null}
		</>
	);
};

export default BooksSection;
