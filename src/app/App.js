import React from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { Provider } from 'react-redux';
import { theme } from '../config';
import { Home, Dashboard } from '../screens';
import store from '../store';
import { hideSnackbar } from '../store/actions/snackbar';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const App = ({ snackbar, onHideSnackbar, }) => (
  <>
    <GlobalStyle />
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <div>
            <Snackbar open={snackbar.visible} message={snackbar.message} autoHideDuration={6000} onClose={onHideSnackbar} />
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </Router>
      </Provider>
    </MuiThemeProvider>
  </>
);

const mapStateToProps = ({ snackbar }) => ({
  snackbar,
});

const mapDispatchToProps = {
  onHideSnackbar: hideSnackbar,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
