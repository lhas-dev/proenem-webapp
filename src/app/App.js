import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { theme } from '../config';
import { Home } from '../screens';

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
        <Router>
          <div>
            <Route path="/" exact component={Home} />
          </div>
        </Router>
      </MuiThemeProvider>
      </>
    );
  }
}

export default App;
