import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    overflow: hidden;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    position: relative;
    margin-bottom: 25px;
    @media only screen and (min-width: 768px) {
        width: 95%;
    }
`;

const Select = styled.select`
    width: 110%;
    height: 43px;
    padding-left: 15px;
    background: transparent;
    border: none;
    outline: none;
    color: #3d3d3d;
    font-family: Poppins;
    font-size: 15px;
    font-weight: 400;
`;

const Arrow = styled.div`
    position: absolute;
    z-index: 2;
    right: 15px;
    top: 50%;
    margin-top: -10px;
`;

const SelectField = ({ children, ...rest }) => (
    <Wrapper>
        <Select {...rest}>
            {children}
        </Select>
        <Arrow>
            <img src="/assets/arrow-down.png" alt="Seta" />
        </Arrow>
    </Wrapper>
);

export default SelectField;
