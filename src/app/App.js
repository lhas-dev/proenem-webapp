import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { Container, Footer, Logo, } from '../components';
import { theme } from '../config';
import { Forms } from '../components';

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
              <Forms.Login />
          </Grid>
          <Footer />
        </Container>
      </MuiThemeProvider>
      </>
    );
  }
}

export default App;
