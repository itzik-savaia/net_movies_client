
import React, { Component } from 'react';
import Slider from "react-slick";
// import axios from 'axios';
import { connect } from 'react-redux';
import './scss/Crime.scss';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class Crime extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    state = {
        display: true,
        width: 600,
        // padding: "0px 5px 0px 5px",
    };
    render() {
        const settings = {
            className: "center",
            centerMode: false,
            infinite: true,
            centerPadding: "10px",
            slidesToShow: 7,
            speed: 600,
            draggable: false,
            slidesToScroll: 3,
            dots: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                }
            ],
            appendDots: dots => (
                <div
                    style={{
                        borderRadius: "100px",
                        padding: "10px",
                        textAlign: "end",
                    }}
                >
                    <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
            ),
        };

        return (
            <div>
                <div className="row-header">
                    <div className="rowTitle">
                        <div className="row-header-title">Crime</div>
                    </div>
                </div>
                <div className='top'>
                    <Slider {...settings}>
                        {Object.keys(this.props.movies).map((movie, i) => (
                            <div key={this.props.movies[movie].id} className="top_small_Picture">
                                <Grid item xs={3}>
                                    <Paper>
                                        {this.props.movies[movie].photos.map(photo => (
                                            <img src={photo.small_Picture} className="small_Picture" key={this.props.movies[movie].id} />
                                        ))}
                                    </Paper>
                                </Grid>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(Crime);