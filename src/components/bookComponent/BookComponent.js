import {useNavigate} from "react-router-dom";

import {
	Container,
	BookInfo,
	ImageBlock,
	InfoBlock,
	Authors,
	Title,
	Description,
	Categories,
	BackButton,
} from "./bookComponentStyles";

const BookComponent = () => {
	const navigate = useNavigate();

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
				<BackButton onClick={() => navigate(-1)}>Back</BackButton>
				<BookInfo>
					<ImageBlock>
						<img src={image} alt="" />
					</ImageBlock>
					<InfoBlock>
						<Authors>{authorsString}</Authors>
						<Title>{title}</Title>
						<Description>{description}</Description>
						<Categories>{categories}</Categories>
					</InfoBlock>
				</BookInfo>
			</Container>
		);
	}

	const bookItem = renderBook(bookData);

	return <>{bookItem}</>;
};

export default BookComponent;
