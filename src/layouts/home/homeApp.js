import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from './header';
// import Footer from './footer';
import View from './view';
import './scss/header.scss'

export default class HomeApp extends Component {
    render() {
        return (
            <div>
                <header>
                    <Header />
                </header>
                <View />
                <footer>
                    {/* <Footer /> */}
                </footer>
            </div>
        )
    }
}
