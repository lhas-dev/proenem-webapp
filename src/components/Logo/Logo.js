import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    max-width: 180px;
`;

const Logo = () => (
    <Image src="/assets/logo.png" />
);

export default Logo;
