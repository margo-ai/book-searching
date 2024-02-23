import styled from '@emotion/styled';

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid grey;
    background-color: #f4f2ef;
    border-radius: 5px;
    padding: 20px 0;

    @media (max-width: 830px) {
        padding: 15px 0;
    }
    @media (max-width: 630px) {
        padding: 10px 0;
    }
`;

export const Title = styled.h1`
    font-size: 44px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 35px;

    @media (max-width: 1180px) {
        font-size: 38px;
        margin-bottom: 30px;
    }
    @media (max-width: 1000px) {
        font-size: 32px;
        margin-bottom: 25px;
    }
    @media (max-width: 830px) {
        font-size: 26px;
        margin-bottom: 20px;
    }
`;

export const SearchFiltersBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px;

    @media (max-width: 1180px) {
        padding: 0 45px;
    }
    @media (max-width: 1000px) {
        padding: 0 28px;
    }
    @media (max-width: 830px) {
        flex-direction: column;
        padding: 0 25px;
    }
    @media (max-width: 830px) {
        padding: 0 15px;
    }
    @media (max-width: 490px) {
        padding: 0 10px;
    }
`;

export const SearchForm = styled.form`
    display: flex;
    position: relative;
    width: 35%;

    @media (max-width: 1300px) {
        margin-right: 20px;
    }
    @media (max-width: 1000px) {
        margin-right: 15px;
    }
    @media (max-width: 830px) {
        width: 50%;
        margin-right: 0;
        margin-bottom: 15px;
    }
    @media (max-width: 630px) {
        width: 65%;
    }
`;

export const SearchInput = styled.input`
    height: 50px;
    width: 100%;
    padding: 10px;
    border: 1px solid grey;
    border-radius: 5px;
    &:hover,
    &:focus {
        border-color: #c19a6b;
    }

    @media (max-width: 1300px) {
        height: 40px;
    }
    @media (max-width: 1180px) {
        font-size: 18px;
    }
    @media (max-width: 830px) {
        height: 35px;
        font-size: 16px;
    }
`;

export const SearchButton = styled.button`
    width: 50px;
    height: 50px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 1px solid grey;
    border-left: none;
    cursor: pointer;
    border-radius: 5px;
    opacity: 1;
    transition: all 0.5s ease;
    &:hover {
        opacity: 0.5;
        border: 1px solid black;
        border-left: none;
        border-color: #c19a6b;
    }

    @media (max-width: 1300px) {
        height: 40px;
        width: 40px;
    }
    @media (max-width: 830px) {
        height: 35px;
        width: 35px;
    }
    & img {
        width: 70%;

        @media (max-width: 1180px) {
            width: 60%;
        }
    }
`;

export const Filters = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 400px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const FilterSelect = styled.form`
    margin-right: 30px;
    display: flex;
    align-items: center;
    &:last-of-type {
        margin-right: 0;
    }
    &:first-of-type {
        @media (max-width: 400px) {
            margin-right: 0;
            margin-bottom: 10px;
        }
    }

    @media (max-width: 1180px) {
        margin-right: 20px;
    }

    & label {
        width: 100px;
        margin-right: 15px;

        @media (max-width: 1180px) {
            font-size: 18px;
        }
        @media (max-width: 1000px) {
            margin-right: 10px;
        }
        @media (max-width: 830px) {
            width: 80px;
            font-size: 16px;
            margin-right: 8px;
        }
    }

    & select {
        cursor: pointer;
        height: 50px;
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        &:hover,
        &:focus {
            border-color: #c19a6b;
        }

        @media (max-width: 1300px) {
            padding: 4px;
            height: 40px;
        }
        @media (max-width: 1180px) {
            font-size: 18px;
        }
        @media (max-width: 830px) {
            height: 30px;
            font-size: 15px;
        }
    }
`;

export const ErrorText = styled.div`
    color: red;
    font-size: 15px;
    font-weight: 700;
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 910px) {
        right: -20px;
    }
    @media (max-width: 840px) {
        left: 15px;
        right: 0;
        transform: none;
    }
`;
