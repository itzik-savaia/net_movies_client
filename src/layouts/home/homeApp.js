import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
// import Footer from './footer';
import View from './view';
import './scss/header.scss'
// import AlertDialog from './components/dialog/dialog';

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
                {/* {this.state.movies.status !== 404 ? */}
                <div>
                    <header>
                        <Header />
                    </header>
                    <View />
                    <footer>
                        {/* <Footer /> */}
                    </footer>
                </div>
                {/* : <AlertDialog />} */}
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