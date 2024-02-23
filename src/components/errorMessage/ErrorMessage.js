import React from 'react';

import img from '../../assets/images/notFound404.png';
import styled from '@emotion/styled';

const Container = styled.div`
    margin: 0 auto;
    margin-top: 10px;
    width: 40%;
    & img {
        width: 100%;
    }
`;

export const ErrorMessage = () => {
    return (
        <Container>
            <img src={img} alt="Error" />
        </Container>
    );
};
