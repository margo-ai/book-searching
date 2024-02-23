import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import styled from '@emotion/styled';

import { HeaderSection } from './components/HeaderSection';
import { BooksSection } from './components/BooksSection';
import { SingleBookSection } from './components/SingleBookSection';

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
`;

export const App = () => {
    return (
        <AppContainer>
            <BrowserRouter>
                <HeaderSection />
                <Routes>
                    <Route path="/book-searching" element={<BooksSection />} />
                    <Route path="/book-searching/:bookId" element={<SingleBookSection />} />
                    <Route path="*" element={<BooksSection />} />
                </Routes>
            </BrowserRouter>
        </AppContainer>
    );
};
