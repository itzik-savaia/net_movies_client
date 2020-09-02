import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
// import Footer from './footer';
import View from './View';
import './scss/header.scss'
import AlertDialog from './components/dialog/Dialog'

class HomeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }
    render() {
        return (
            <div>
                {this.state.movies.status !== 404 ?
                    <div>
                        <header>
                            <Header />
                        </header>
                        <View />
                        <footer>
                            {/* <Footer /> */}
                        </footer>
                    </div>
                    : <AlertDialog />}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(HomeApp);