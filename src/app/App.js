import React from 'react';
import { connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Snackbar from '@material-ui/core/Snackbar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { Provider } from 'react-redux';
import { theme } from '../config';
import { Home, Dashboard, MyAccount, } from '../screens';
import store from '../store';
import { hideSnackbar } from '../store/actions/snackbar';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: Poppins;
    src: url('/assets/poppins-medium-webfont.woff2') format('woff2'),
          url('/assets/poppins-medium-webfont.woff') format('woff');
    font-weight: 500;
    font-style: normal;

  }


  @font-face {
    font-family: Poppins;
    src: url('/assets/poppins-regular-webfont.woff2') format('woff2'),
          url('/assets/poppins-regular-webfont.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: Poppins;
    src: url('/assets/poppins-semibold-webfont.woff2') format('woff2'),
          url('/assets/poppins-semibold-webfont.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
`;

const App = ({ snackbar, onHideSnackbar, }) => (
  <>
    <GlobalStyle />
    <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Snackbar open={snackbar.visible} message={snackbar.message} autoHideDuration={6000} onClose={onHideSnackbar} />
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/minha-conta" component={MyAccount} />
          </div>
        </Router>
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
  <Provider store={store().store}>
    <PersistGate loading={null} persistor={store().persistor}>
      <AppContainer />
    </PersistGate>
  </Provider>
);
