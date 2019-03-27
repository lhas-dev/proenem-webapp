import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { Redirect } from 'react-router-dom';
import { Container, Footer, Logo, Forms, } from '../../components';
import { connect } from 'react-redux';
import { requestAuthentication } from '../../store/actions/auth';

const Home = ({
    loading,
    token,
    onRequestAuthentication,
}) => {
    const onSubmit = ({ email, password }) => {
        onRequestAuthentication({ email, password });
    };

    if (token !== '') return (<Redirect to="/dashboard" />);

    return (
        <Container>
            <Grid style={{ marginTop: 'auto' }}>
                <Row center="xs">
                    <Col>
                        <Logo src="/assets/logo.png" />
                    </Col>
                </Row>
                <Forms.Login loading={loading} onSubmit={onSubmit} />
            </Grid>
            <Footer />
        </Container>
    );
};

const mapStateToProps = ({ auth: { loading, error, token, } }) => ({
    loading,
    error,
    token,
});

const mapDispatchToProps = {
    onRequestAuthentication: requestAuthentication,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
