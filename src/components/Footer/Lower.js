import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

const Wrapper = styled.div`
    min-height: 88px;
    display: flex;
    align-items: center;
`;

const Block = styled.div`
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: center;

    @media only screen and (min-width: 768px) {
        padding: 0px;
    }
`;

const Logo = styled.img`
    opacity: 0.5;
    margin-right: 30px;
`;

const Menu = styled.ul`
    width: 100%;
    display: inline-flex;
    justify-content: space-around;
`;

const MenuItem = styled.li`
    list-style-type: none;
    a {
        color: #9b9b9b;
        font-family: Poppins;
        font-size: 12px;
        font-weight: 400;
        text-decoration: none;

        &:hover {
            color: #f01d4a;
        }
    }
    @media only screen and (min-width: 768px) {
        a {
            margin-right: 28px;
            font-size: 14px;
        }
    }
`;

const Text = styled.p`
    color: #9b9b9b;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    margin-right: 25px;
`;

const Button = styled.button`
    display: inline-block;
    cursor: pointer;
    margin-right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(180deg, #f93e81 0%, #f01d4a 100%);
    border: none;
`;

const Lower = () => (
    <Wrapper>
        <Grid>
            <Row between="xs">
                <Col xs={12} md={6}>
                    <Block>
                        <Logo src="/assets/footer-logo.png" alt="ProEnem" />
                        <Menu>
                            <MenuItem>
                                <Link to="/">Termos de uso</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Política de privacidade</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Trabalhe conosco</Link>
                            </MenuItem>
                        </Menu>
                    </Block>
                </Col>
                <Col xs={12} md={6}>
                    <Block>
                        <Text>© 2018 ProEnem - Todos os direitos reservados</Text>
                        <Button />
                        <Button />
                        <Button />
                    </Block>
                </Col>
            </Row>
        </Grid>
    </Wrapper>
);

export default Lower;
