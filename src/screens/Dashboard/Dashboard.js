import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Container, } from '../../components';
import { connect } from 'react-redux';
import { Typography, Icon } from '@material-ui/core';
import { logout } from '../../store/actions/auth';

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
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <Icon>menu</Icon>
                        </IconButton>
                        <Typography className={classes.grow} variant="h6" color="inherit">
                            {auth.email}
                        </Typography>
                        <IconButton onClick={onLogout} className={classes.menuButton} color="inherit" aria-label="Menu">
                            <Icon>logout</Icon>
                        </IconButton>
                    </Toolbar>
                </AppBar>
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
