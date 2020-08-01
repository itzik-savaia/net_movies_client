
import React, { Component } from 'react';
import Slider from "react-slick";
// import axios from 'axios';
import { connect } from 'react-redux';
import './scss/Crime.scss';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button, Link } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import IconButton from '@material-ui/core/IconButton';
// import '~material-design-icons/iconfont/material-icons.css';


class Crime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            width: 600,
        };
    }

    render() {
        const movieClike = (e) => {
            console.log(e._targetInst.key, 'The link was clicked.');
        }
        const MouseEnter = () => {

        }
        const MouseLeave = () => {

        }

        const settings = {
            className: "center",
            centerMode: false,
            infinite: true,
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
                        color: "#e5e5e5",
                        height: "30px",
                    }}
                >
                    <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
            ),
            customPaging: i => (
                <div
                    style={{
                        marginTop: "270px",
                        width: "30px",
                        color: "#e5e5e5",
                        border: "0.5px #e5e5e5 solid",
                        borderRadius: "8px",
                        textAlign: "center",
                        backgroundColor: "rgba(20, 20, 20, 0.5)",
                        lineHeight: "1.25vw",
                        fontSize: "1.4vw",
                        verticalAlign: "bottom",
                        display: "table-cell",
                    }}
                >
                    {i + 1}
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
                            <div key={this.props.movies[movie].id} className="top_small_Picture" >
                                <Grid item xs={3}>
                                    <Paper onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
                                        {this.props.movies[movie].photos.map(photo => (
                                            <div className="container" key={this.props.movies[movie].id}>
                                                <img src={photo.small_Picture} className="small_Picture" key={this.props.movies[movie].id} />
                                                <button className="btn" key={this.props.movies[movie].id} onClickCapture={movieClike.bind(this.props.movies[movie])}> ^ </button>
                                            </div>
                                        ))}
                                    </Paper>
                                </Grid>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(Crime);