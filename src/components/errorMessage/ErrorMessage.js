import React from 'react';
import img from '../../assets/img/notFound404.png';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0 auto;
    margin-top: 10px;
    width: 40%;
    & img {
        width: 100%;
    }
`;

const ErrorMessage = () => {
    return (
        <Container>
            <img src={img} alt="Error" />
        </Container>
    );
};

export default ErrorMessage;
