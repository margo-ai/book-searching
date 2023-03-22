import styled from "styled-components";

import HeaderSection from "./components/header/HeaderSection";
import BooksSection from "./components/booksList/BooksSection";

const AppContainer = styled.div`
	padding: 0 100px;
`;

function App() {
	return (
		<AppContainer>
			<HeaderSection />
			<BooksSection />
		</AppContainer>
	);
}

export default App;
