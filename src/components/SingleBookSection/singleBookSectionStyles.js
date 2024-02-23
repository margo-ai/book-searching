import styled from '@emotion/styled';

export const Container = styled.div`
    margin-top: 30px;
    padding: 50px;
    border: 1px solid grey;
    background-color: #f4f2ef;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) {
        padding: 35px;
        margin-top: 20px;
    }
    @media (max-width: 630px) {
        padding: 20px;
        margin-top: 15px;
    }
    @media (max-width: 490px) {
        padding: 15px;
        margin-top: 10px;
    }
`;

export const BookInfo = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 740px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ImageBlock = styled.div`
    width: 300px;
    & img {
        width: 100%;
    }

    @media (max-width: 1000px) {
        width: 260px;
    }
    @media (max-width: 870px) {
        width: 220px;
    }
`;

export const InfoBlock = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    @media (max-width: 740px) {
        width: auto;
    }
`;
export const Authors = styled.div`
    font-size: 22px;
    font-style: italic;
    margin-top: 15px;
    @media (max-width: 1180px) {
        font-size: 18px;
    }
    @media (max-width: 870px) {
        font-size: 14px;
        margin-top: 10px;
    }
`;

export const Title = styled.h2`
    font-size: 40px;
    margin-top: 10px;
    @media (max-width: 1180px) {
        font-size: 35px;
    }
    @media (max-width: 1000px) {
        font-size: 30px;
    }
    @media (max-width: 870px) {
        font-size: 24px;
        line-height: 25px;
    }
    @media (max-width: 630px) {
        font-size: 20px;
        line-height: 22px;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 26px;
    margin-top: 20px;
    margin-bottom: 20px;

    @media (max-width: 1000px) {
        font-size: 18px;
        line-height: 23px;
    }
    @media (max-width: 740px) {
        font-size: 16px;
        line-height: 20px;
    }
`;

export const Categories = styled.div`
    margin-top: auto;
    font-size: 20px;
    font-weight: 700;

    @media (max-width: 1180px) {
        font-size: 18px;
    }
    @media (max-width: 740px) {
        font-size: 14px;
    }
`;

export const BackButton = styled.button`
    display: block;
    width: 200px;
    padding: 5px;
    margin-bottom: 15px;
    background-color: #fff;
    border: 1px solid grey;
    border-radius: 4px;
    cursor: pointer;
    align-self: flex-end;
    transition: all 0.5s ease;
    &:hover {
        opacity: 0.5;
        box-shadow:
            rgba(0, 0, 0, 0.16) 0px 1px 4px,
            rgb(51, 51, 51) 0px 0px 0px 3px;
    }

    @media (max-width: 1000px) {
        width: 150px;
        padding: 3px;
        font-size: 18px;
    }
    @media (max-width: 630px) {
        font-size: 15px;
        width: 90px;
        margin-bottom: 20px;
    }
`;
