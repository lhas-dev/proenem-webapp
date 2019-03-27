import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { Container, Footer, Logo, Forms, } from '../../components';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

const Dashboard = ({
    auth,
}) => {

    return (
        <div>
            <Typography variant="h1">{auth.email}</Typography>
        </div>
    );
};

const mapStateToProps = ({ auth }) => ({
    auth,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
