import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Container, } from '../../components';
import { connect } from 'react-redux';
import { Typography, Icon, Paper } from '@material-ui/core';
import { logout } from '../../store/actions/auth';
import { Grid, Row, Col, } from 'react-styled-flexboxgrid';
import Avatar from '@material-ui/core/Avatar';

const styles = {
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const Dashboard = ({
    auth,
    classes,
    onLogout,
}) => {
    if (auth.token === '') return (<Redirect to="/" />);

    return (
        <>
            <Container>
                <AppBar color="secondary" position="static">
                    <Toolbar>
                        <Typography className={classes.grow} variant="h6" color="inherit">
                            Dashboard
                        </Typography>
                        <IconButton onClick={onLogout} className={classes.menuButton} color="inherit" aria-label="Menu">
                            <Icon>logout</Icon>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Grid>
                    <Row center="xs">
                        <Col xs={12} md={6}>
                            <Paper style={{ padding: 20, marginTop: 20 }}>
                                <Row middle="xs">
                                    <Col>
                                        <Avatar src={auth.imageProfile} />
                                    </Col>
                                    <Col>
                                        <Typography className={classes.grow} variant="h6">
                                            Olá, {auth.name}!
                                        </Typography>
                                        <Typography className={classes.grow} variant="body1">
                                            Seu e-mail é: {auth.email}
                                        </Typography>
                                    </Col>
                                </Row>
                            </Paper>
                        </Col>
                    </Row>
                </Grid>
            </Container>
        </>
    );
};

const mapStateToProps = ({ auth }) => ({
    auth,
});

const mapDispatchToProps = {
    onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard));
