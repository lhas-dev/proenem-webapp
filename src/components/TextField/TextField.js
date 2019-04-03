import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 25px;

    @media only screen and (min-width: 768px) {
        width: 95%;
    }
`;

const Button = styled.button`
    position: absolute;
    height: 100%;
    right: 0px;
    top: 0px;
    padding: 0px 14px;
    background: transparent;
    border: none;
    color: #f01d4a;
    font-family: Poppins;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
`;

const Input = styled.input`
    width: 100%;
    height: 43px;
    padding: 15px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.15s ease-in;
    color: #3d3d3d;
    font-family: Poppins;
    font-size: 15px;
    font-weight: 400;

    ::placeholder {
        color: #9b9b9b;
        font-family: Poppins;
        font-size: 15px;
        font-weight: 400;
    }

    :focus {
        border-color: #f01d4a;
        box-shadow: 0px 0px 0px 4px rgba(240, 29, 74, 0.13);
    }
`;

const TextField = ({
    button,
    buttonOnClick,
    ...rest,
}) => (
    <Wrapper>
        <Input {...rest} />
        {!!button && <Button onClick={buttonOnClick}>{button}</Button>}
    </Wrapper>
);

export default TextField;
