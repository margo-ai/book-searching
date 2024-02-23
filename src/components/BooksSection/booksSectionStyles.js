import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const BooksCount = styled.div`
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
    @media (max-width: 830px) {
        margin-top: 10px;
    }
    @media (max-width: 630px) {
        font-size: 18px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    @media (max-width: 450px) {
        font-size: 15px;
    }
`;

export const BookListContainer = styled.div`
    padding: 30px 40px;
    margin-bottom: 20px;
    border: 1px solid grey;
    background-color: #f4f2ef;
    border-radius: 5px;

    @media (max-width: 830px) {
        padding: 30px;
    }
    @media (max-width: 550px) {
        padding: 30px 40px;
    }
    @media (max-width: 400px) {
        padding: 20px;
    }
`;

export const BooksList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px 30px;

    @media (max-width: 1300px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 1180px) {
        gap: 40px 20px;
    }
    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;
    }
    @media (max-width: 830px) {
        gap: 35px;
    }
    @media (max-width: 550px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 25px;
    }
    @media (max-width: 390px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const LoadMoreButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-height: 50px;
    width: 200px;
    padding: 12px;
    color: #000;
    border-radius: 7px;
    background-color: #f4f2ef;
    border: 1px solid grey;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        opacity: 0.5;
        box-shadow:
            rgba(0, 0, 0, 0.16) 0px 1px 4px,
            rgb(51, 51, 51) 0px 0px 0px 3px;
    }

    @media (max-width: 1180px) {
        font-size: 19px;
        padding: 10px;
    }
    @media (max-width: 830px) {
        width: 150px;
        font-size: 16px;
    }
`;

export const ListPlaceholder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 23px;

    @media (max-width: 830px) {
        font-size: 20px;
    }
    @media (max-width: 630px) {
        font-size: 16px;
    }
`;

export const spinAnimation = keyframes`
	0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const MoreBooksSpinner = styled.div`
    border: 3px solid lightgray;
    border-top: 5px solid #c19a6b;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: 1s linear infinite ${spinAnimation};

    @media (max-width: 1180px) {
        width: 25px;
        height: 25px;
    }
    @media (max-width: 830px) {
        width: 20px;
        height: 20px;
    }
    @media (max-width: 680px) {
        width: 16px;
        height: 16px;
    }
`;
