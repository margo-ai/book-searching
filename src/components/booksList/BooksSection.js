import styled from "styled-components";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FallingLines} from 'react-loader-spinner';

const BooksCount = styled.div`
	margin-top: 20px;
	font-size: 30px;
	font-weight: 700;
`;

const BookListContainer = styled.div`
	padding: 20px 50px;
`;

const BooksList = styled.ul`
	margin-top: 30px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 60px 30px;
`;

const BookItem = styled.li`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 500px;
`;

const BookImage = styled.div`
	height: 330px;
	margin-bottom: 15px;

	& img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

const BookTitle = styled.div`
	font-size: 25px;
	font-weight: 700;

	margin-bottom: auto;
`;

const BookCategory = styled.div`
	font-size: 18px;
`;

const BookAuthors = styled.div`
	font-size: 16px;
	font-style: italic;
`;

const SpinnerWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 35px;
`;

const BooksSection = () => {
	const dispatch = useDispatch();
	const booksLoadingStatus = useSelector(
		(state) => state.books.booksLoadingStatus
	);
	const booksList = useSelector((state) => state.books.books);

	const totalItems = useSelector((state) => state.books.totalItems);
	console.log(booksList);

	function renderItems(array) {
		const items = array.map((item) => {
			const {id, title, authors, image, categories} = item;

			return (
				<BookItem key={id}>
					<BookImage>
						<img src={image} alt="book" />
					</BookImage>
					<BookTitle>{title}</BookTitle>
					<BookCategory>{categories}</BookCategory>
					<BookAuthors>{authors}</BookAuthors>
				</BookItem>
			);
		});

		return <BooksList>{items}</BooksList>;
	}

	const books = renderItems(booksList);
	
	const errorMessage = (booksLoadingStatus === 'error') ? 'Loading error! Try again' : null;
	const spinner = (booksLoadingStatus === 'loading')
	? <SpinnerWrapper>
		<FallingLines height={150} width={150} color="#000"/>
	</SpinnerWrapper> : null;

	return (
		<>
			<BooksCount>
				{totalItems === 0 ? 'Write the wanted book' : `Found ${totalItems} results`}
			</BooksCount>
			{/* <div>{booksLoadingStatus}</div> */}
			<BookListContainer>
			{errorMessage}
			{spinner}
			{books}</BookListContainer>
		</>
	);
};

export default BooksSection;
