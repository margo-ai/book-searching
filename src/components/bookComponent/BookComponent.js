// import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setBook} from "../../reducers/booksSlice";
import styled from "styled-components";

const Container = styled.div`
	margin-top: 30px;
	padding: 30px 50px;
	border: 1px solid grey;
	background-color: #f4f2ef;
	border-radius: 5px;

	display: flex;
	justify-content: space-between;
`;

const ImageBlock = styled.div`
	width: 300px;
	& img {
		width: 100%;
	}
`;

const InfoBlock = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
`;
const Authors = styled.div`
	font-size: 22px;
	font-style: italic;

	margin-top: 10px;
`;

const Title = styled.h2`
	font-size: 40px;
	margin-top: 10px;
`;

const Dedcription = styled.p`
	font-size: 20px;
	margin-top: 20px;
	margin-bottom: 15px;
`;

const Categories = styled.div`
	font-size: 16px;
	font-weight: 700;
	margin-top: auto;
`;

const BookComponent = () => {
	// const bookId = useParams();
	// const dispatch = useDispatch();
	// const selectedBook = useSelector((state) => state.books.selectedBook);

	function getBook() {
		const selectedBookId = localStorage.getItem("bookId");
		const allBooks = JSON.parse(localStorage.getItem("bookList"));
		return allBooks.find((item) => item.id === selectedBookId);
	}

	const bookData = getBook();

	function renderBook(book) {
		const {authors, categories, image, title, description} = book;
		const authorsString = authors.join(", ");
		return (
			<Container>
				<ImageBlock>
					<img src={image} alt="" />
				</ImageBlock>
				<InfoBlock>
					<Authors>{authorsString}</Authors>
					<Title>{title}</Title>
					<Dedcription>{description}</Dedcription>
					<Categories>{categories}</Categories>
				</InfoBlock>
			</Container>
		);
	}

	const bookItem = renderBook(bookData);

	return <>{bookItem}</>;
};

export default BookComponent;
