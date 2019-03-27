import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { Container, Footer, Logo, Forms, } from '../../components';

const Home = () => (
    <Container>
        <Grid style={{ marginTop: 'auto' }}>
            <Row center="xs">
            <Col>
                <Logo src="/assets/logo.png" />
            </Col>
            </Row>
            <Forms.Login />
        </Grid>
        <Footer />
    </Container>
);

export default Home;
