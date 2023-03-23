import styled from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HeaderSection from "./components/header/HeaderSection";
import BooksSection from "./components/booksList/BooksSection";
import BookComponent from "./components/bookComponent/BookComponent";

const AppContainer = styled.div`
	padding: 30px 100px;
`;

function App() {
	return (
		<AppContainer>
			<BrowserRouter>
				<HeaderSection />
				<Routes>
					<Route path="/" element={<BooksSection />} />
					<Route path="/:bookId" element={<BookComponent />} />
					<Route path="*" element={<BooksSection />} />
				</Routes>
			</BrowserRouter>
		</AppContainer>
	);
}

export default App;
