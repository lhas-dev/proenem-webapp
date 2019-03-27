import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { Provider } from 'react-redux';
import { theme } from '../config';
import { Home } from '../screens';
import store from '../store';

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
        <Provider store={store}>
          <Router>
            <div>
              <Route path="/" exact component={Home} />
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
      </>
    );
  }
}

export default App;
