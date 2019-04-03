import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: block;
    text-align: center;
`;

const Image = styled.img`
    width: 100%;
    max-width: 200px;
    margin-top: 36px;
`;

const Logo = () => (
    <Wrapper>
        <Link to="/minha-conta">
            <Image src="/assets/logo-colored.png" alt="ProEnem" />
        </Link>
    </Wrapper>
);

export default Logo;
