import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//store
import { store } from './app/store';
import { Provider } from 'react-redux';
//material-ui
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: {
            main: '#b71c1c'
        }
    }
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>, document.getElementById('root')
);