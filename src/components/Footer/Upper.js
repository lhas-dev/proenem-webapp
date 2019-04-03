import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #3d3d3d;
    min-height: 210px;
    display: flex;
    align-items: center;
`;

const Block = styled.div`
    padding: 30px 0px;

    @media only screen and (min-width: 768px) {
        padding: 0px;
        min-height: 100px;
        border-right: 1px dashed rgba(255, 255, 255, 0.1);  
    }
`;

const Button = styled.button`
    display: inline-block;
    margin-right: 15px;
    margin-bottom: 15px;
    cursor: pointer;
    background: transparent;
    border: none;
`;

const Title = styled.h2`
    color: #ffffff;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
    margin-bottom: 10px;
`;

const ListWrapper = styled.div`
    display: flex;
`;

const List = styled.ul`
    width: 100%;
`;

const ListItem = styled.li`
    list-style: none;

    &::before {
        content: ' ';
        display: inline-block;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        position: relative;
        left: -4px;
        top: -2px;
    }

    a {
        color: rgba(255, 255, 255, 0.5);
        font-family: Poppins;
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        text-decoration: none;
    }
`;

const Upper = () => (
    <Wrapper>
        <Grid>
            <Row between="xs">
                <Col xs={12} md={2}>
                    <Block>
                        <Title>Sobre</Title>
                        <List>
                            <ListItem><Link to="/">Quem somos</Link></ListItem>
                            <ListItem><Link to="/">Professores</Link></ListItem>
                        </List>
                    </Block>
                </Col>
                <Col xs={12} md={4}>
                    <Block>
                        <Title>Plataforma</Title>
                        <ListWrapper>
                            <List>
                                <ListItem><Link to="/">Plano de estudos</Link></ListItem>
                                <ListItem><Link to="/">Materiais de apoio</Link></ListItem>
                                <ListItem><Link to="/">Redação</Link></ListItem>
                            </List>
                            <List>
                                <ListItem><Link to="/">Simulado</Link></ListItem>
                                <ListItem><Link to="/">Monitorias</Link></ListItem>
                                <ListItem><Link to="/">Blog</Link></ListItem>
                            </List>
                        </ListWrapper>
                    </Block>
                </Col>
                <Col xs={12} md={2}>
                    <Block>
                        <Title>Suporte</Title>
                        <List>
                            <ListItem><Link to="/">Central de ajuda</Link></ListItem>
                            <ListItem><Link to="/">Fale conosco</Link></ListItem>
                        </List>
                    </Block>
                </Col>
                <Col xs={12} md={3}>
                    <Title>Baixe nosso app</Title>
                    <Button>
                        <Link to="/">
                            <img src="/assets/google-play.png" alt="Google Play" />
                        </Link>
                    </Button>
                    <Button>
                        <Link to="/">
                            <img src="/assets/app-store.png" alt="App Store" />
                        </Link>
                    </Button>
                </Col>
            </Row>
        </Grid>
    </Wrapper>
);

export default Upper;
