import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 10px;
  color: #FFF;
  font-family: Montserrat;
  margin-top: auto;
  margin-bottom: 2em;
  text-align: center;
`;

const Footer = () => (
    <Wrapper>Made with <span role="img">❤</span>️ by @lhas2</Wrapper>
);

export default Footer;
