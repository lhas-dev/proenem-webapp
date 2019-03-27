import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { Container, Footer, Logo, Forms, } from '../../components';
import { connect } from 'react-redux';
import { requestAuthentication } from '../../store/actions/auth';

const Home = ({
    onRequestAuthentication,
}) => {
    const onSubmit = ({ email, password }) => {
        onRequestAuthentication({ email, password });
    };

    return (
        <Container>
            <Grid style={{ marginTop: 'auto' }}>
                <Row center="xs">
                <Col>
                    <Logo src="/assets/logo.png" />
                </Col>
                </Row>
                <Forms.Login onSubmit={onSubmit} />
            </Grid>
            <Footer />
        </Container>
    );
};

const mapDispatchToProps = {
    onRequestAuthentication: requestAuthentication,
};

export default connect(null, mapDispatchToProps)(Home);
