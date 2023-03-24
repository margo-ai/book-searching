import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FallingLines} from "react-loader-spinner";

import {fetchMoreBooks, setStartIndex} from "../../reducers/booksSlice";
import {
	BooksCount,
	BookListContainer,
	BooksList,
	BookItem,
	BookImage,
	BookTitle,
	BookCategory,
	BookAuthors,
	SpinnerWrapper,
	LoadMoreButton,
	ListPlaceholder,
	MoreBooksSpinner,
} from "./booksSectionStyles";

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
					<Link
						to={`/book-searching/${id}`}
						onClick={() => handleBook(id)}
					>
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

	// рендер ошибки или "загрузки" в зависимости от статуса запроса
	const errorMessage =
		booksLoadingStatus === "error" ? <ErrorMessage /> : null;
	const spinner =
		booksLoadingStatus === "loading" ? (
			<SpinnerWrapper>
				<FallingLines height={80} width={80} color="#c19a6b" />
			</SpinnerWrapper>
		) : null;

	// рендер ошибки, "загрузки" или текста на кнопке в зависимости от статуса запроса доп.книг
	const moreBooksErrorMessage =
		moreBooksLoadingStatus === "error" ? "Error! Try Again" : null;
	const moreBooksSpinner =
		moreBooksLoadingStatus === "loading" ? <MoreBooksSpinner /> : null;
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
