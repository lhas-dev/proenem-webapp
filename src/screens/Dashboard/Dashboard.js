import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { Container, Footer, Logo, Forms, } from '../../components';
import { connect } from 'react-redux';
import { Typography, Icon } from '@material-ui/core';

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
}) => {

    return (
        <>
            <Container>
                <AppBar color="secondary" position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <Icon>menu</Icon>
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            {auth.email}
                        </Typography>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard));
