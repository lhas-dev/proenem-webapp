import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Container, Footer, Logo, } from '../components';
import { theme } from '../config';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

class App extends Component {
  render() {
    return (
      <>
      <GlobalStyle />
      <MuiThemeProvider theme={theme}>
        <Container>
          <Grid style={{ marginTop: 'auto' }}>
              <Row center="xs">
                <Col>
                  <Logo src="/assets/logo.png" />
                </Col>
              </Row>
              <Row center="xs">
                <Col xs={12} md={6}>
                  <TextField fullWidth type="email" required label="Seu e-mail" placeholder="exemplo@proenem.com.br" variant="filled" margin="normal" />
                </Col>
              </Row>
              <Row center="xs">
                <Col xs={12} md={6}>
                  <TextField fullWidth type="password" required minLength="5" label="Sua senha" variant="filled" margin="normal" />
                </Col>
              </Row>
              <Row center="xs">
                <Col xs={12} md={6}>
                  <Button fullWidth variant="contained" color="secondary" style={{ marginTop: 15 }}>Entrar</Button>
                </Col>
              </Row>
          </Grid>
          <Footer />
        </Container>
      </MuiThemeProvider>
      </>
    );
  }
}

export default App;
