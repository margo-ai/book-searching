import styled from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HeaderSection from "./components/header/HeaderSection";
import BooksSection from "./components/booksList/BooksSection";
import BookComponent from "./components/bookComponent/BookComponent";

const AppContainer = styled.div`
	padding: 30px 100px;
	@media (max-width: 1180px) {
		padding: 30px 70px;
	}
	@media (max-width: 830px) {
		padding: 20px 50px;
	}
	@media (max-width: 630px) {
		padding: 15px 30px;
	}
	@media (max-width: 490px) {
		padding: 10px 20px;
	}
	@media (max-width: 420px) {
		padding: 10px 10px;
	}
`;

function App() {
	return (
		<AppContainer>
			<BrowserRouter>
				<HeaderSection />
				<Routes>
					<Route path="/book-searching" element={<BooksSection />} />
					<Route
						path="/book-searching/:bookId"
						element={<BookComponent />}
					/>
					<Route path="*" element={<BooksSection />} />
				</Routes>
			</BrowserRouter>
		</AppContainer>
	);
}

export default App;
