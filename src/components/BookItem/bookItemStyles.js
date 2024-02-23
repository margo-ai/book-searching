import styled from '@emotion/styled';

export const BookWrapper = styled.li`
    background-color: #fff;
    display: inline-block;
    border-radius: 5px;
    box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.2),
        0 5px 10px rgba(0, 0, 0, 0.1);
    &:hover h3 {
        opacity: 0.5;
        transition: all 0.5s ease;
    }
    & a {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100%;
        padding: 15px;

        @media (max-width: 830px) {
            padding: 12px;
        }
        @media (max-width: 630px) {
            padding: 10px;
        }
    }

    &:hover a {
        box-shadow:
            0 1px 15px rgba(0, 0, 0, 0.2),
            0 5px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.5s ease;
    }
`;

export const Image = styled.div`
    height: 300px;
    margin-bottom: 18px;

    @media (max-width: 1300px) {
        height: 260px;
    }
    @media (max-width: 1180px) {
        height: 250px;
    }
    @media (max-width: 830px) {
        height: 200px;
        margin-bottom: 15px;
    }
    @media (max-width: 630px) {
        height: 150px;
        margin-bottom: 10px;
    }
    @media (max-width: 490px) {
        height: 130px;
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const Title = styled.h3`
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: auto;

    @media (max-width: 1180px) {
        font-size: 18px;
        line-height: 22px;
    }
    @media (max-width: 1000px) {
        font-size: 20px;
    }
    @media (max-width: 830px) {
        font-size: 18px;
    }
`;

export const Category = styled.div`
    font-size: 18px;
    margin-top: 15px;

    @media (max-width: 1180px) {
        font-size: 16px;
    }
`;

export const Authors = styled.div`
    font-size: 16px;
    line-height: 18px;
    font-style: italic;

    @media (max-width: 1180px) {
        font-size: 14px;
    }
`;
