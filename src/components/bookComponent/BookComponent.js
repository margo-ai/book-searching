import {useNavigate} from "react-router-dom";
// import {useEffect} from "react";
// import {useParams} from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
// import {setBook} from "../../reducers/booksSlice";
import styled from "styled-components";

const Container = styled.div`
	margin-top: 30px;
	padding: 50px;
	border: 1px solid grey;
	background-color: #f4f2ef;
	border-radius: 5px;

	display: flex;
	justify-content: space-between;

	@media (max-width: 1000px) {
		padding: 35px;
	}
`;

const ImageBlock = styled.div`
	width: 300px;
	@media (max-width: 1000px) {
		width: 260px;
	}
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
	margin-top: 15px;
	@media (max-width: 1180px) {
		font-size: 18px;
	}
`;

const Title = styled.h2`
	font-size: 40px;
	margin-top: 10px;
	@media (max-width: 1180px) {
		font-size: 35px;
	}
	@media (max-width: 1000px) {
		font-size: 30px;
	}
`;

const Dedcription = styled.p`
	font-size: 20px;
	margin-top: 20px;

	@media (max-width: 1180px) {
		font-size: 18px;
	}
	@media (max-width: 1000px) {
		margin-top: 12px;
		font-size: 16px;
	}
`;

const Categories = styled.div`
	margin-top: 30px;
	font-size: 20px;
	font-weight: 700;
	@media (max-width: 1180px) {
		font-size: 18px;
	}
`;

const BackButton = styled.button`
	display: block;
	width: 200px;
	padding: 5px;
	background-color: #fff;
	border: 1px solid grey;
	border-radius: 4px;
	cursor: pointer;
	align-self: flex-end;
	transition: all 0.5s ease;
	&:hover {
		opacity: 0.5;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px,
			rgb(51, 51, 51) 0px 0px 0px 3px;
	}
	@media (max-width: 1180px) {
		width: 190px;
	}
	@media (max-width: 1000px) {
		width: 150px;
		padding: 3px;
		font-size: 18px;
	}
`;

const BookComponent = () => {
	const navigate = useNavigate();
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
		const authorsString =
			typeof authors !== "undefined" ? authors.join(", ") : undefined;
		return (
			<Container>
				<ImageBlock>
					<img src={image} alt="" />
				</ImageBlock>
				<InfoBlock>
					<BackButton onClick={() => navigate(-1)}>Back</BackButton>
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
