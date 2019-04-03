import React from 'react';
import { Grid, Row, Col, } from 'react-styled-flexboxgrid';
import {
    Header,
    Logo,
    Menu,
    PageHeader,
    PageContent,
    Sidebar,
    Forms,
    Footer,
} from '../../components';

const onSearch = () => console.log('Search triggered.');

const MyAccount = () => (
    <>
        <Header>
            <Grid>
                <Row center="xs">
                    <Col xs={12} md={3}>
                        <Logo />
                    </Col>
                    <Col xs={12} md={9}>
                        <Menu onSearch={onSearch} hasNotification />
                    </Col>
                </Row>
            </Grid>
        </Header>
        <PageHeader title="Minha Conta" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis vitae ligula et congue. Mauris in lacus vel justo." />
        <PageContent>
            <Grid>
                <Row>
                    <Col xs={12} md={3}>
                        <Sidebar
                            name="Luiz Henrique"
                            email="luizhrqas@gmail.com"
                            memberSince="04/2019"
                        />
                    </Col>
                    <Col xs={12} md={9}>
                        <Forms.MyAccountForm />
                    </Col>
                </Row>
            </Grid>
        </PageContent>
        <Footer.Upper />
        <Footer.Lower />
    </>
);

export default MyAccount;
