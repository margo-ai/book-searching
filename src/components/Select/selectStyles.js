import styled from '@emotion/styled';

export const SelectWrapper = styled.form`
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
