import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Row, Col, } from 'react-styled-flexboxgrid';
import { AppBar, Toolbar, IconButton, Avatar, Typography, Icon, Paper, List, ListItem, ListItemText, ListItemAvatar, } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { logout } from '../../store/actions/auth';
import { Container, } from '../../components';

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
                            <Paper elevation={1} style={{ padding: 20, marginTop: 20 }}>
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
                    <Row center="xs">
                        <Col xs={12} md={6}>
                            <Paper elevation={2} style={{ padding: 20, marginTop: 20 }}>
                                <Typography className={classes.grow} variant="h6">
                                    Cursos disponíveis
                                </Typography>
                                <List>
                                    {auth.lessonPlans.map(lessonPlan => (
                                        <ListItem key={lessonPlan.id}>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <Icon>folder</Icon>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={lessonPlan.value} />
                                        </ListItem>
                                    ))}
                                </List>
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
