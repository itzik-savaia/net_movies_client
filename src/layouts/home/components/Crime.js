
import React, { Component } from 'react';
import Slider from "react-slick";
// import axios from 'axios';
import { connect } from 'react-redux';
import './scss/Crime.scss';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ReactPlayer from "react-player";


class Crime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            width: 600,
            movies: [],
            find: {},
            movie_id: String,
            card_over: false,
        };
    }

    render() {
        const movieClike = (e) => {
            this.setState({ movie_id: e.id })
            if (this.state.movies.length === 0)
                this.state.movies.push(Object.values(this.props.movies));

            this.state.movies.forEach(element => {
                this.setState({ find: element.find(movie => movie.id === e.id) })
            });
        }
        const MouseEnter = (e) => {
            setTimeout(() => {
                this.setState({ card_over: true })
            }, 3000);
        }
        const MouseLeave = (e) => {
            this.setState({ card_over: false })
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
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
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
                            <div className="top_small_Picture" key={i}>
                                <Grid item xs={3}>
                                    <div className="container">
                                        <Paper>
                                            {this.props.movies[movie].photos.map(photo => (
                                                <div key={i}>
                                                    <img src={photo.small_Picture} className="small_Picture" key={i} alt={photo.small_Picture} />
                                                    <div className="btnBackround">
                                                        <button className="btn" key={this.props.movies[movie].id}
                                                            onClick={() => {
                                                                movieClike.bind((e) => this.props.movies[movie])
                                                                this.setState({ find: this.props.movies[movie] })
                                                            }}> ^
                                                    </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </Paper>
                                    </div>
                                </Grid>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div>
                    <div>
                        {this.state.find.photos != null ?
                            <div>
                                <div onMouseEnter={() => (MouseEnter(this.state.find.id))} onMouseLeave={() => (MouseLeave(this.state.find.id))} className="movie_card">
                                    {this.state.card_over === false ? this.card_movie() : this.state.card_over === true ? this.card_video() : null}
                                </div>
                            </div>
                            : null}
                    </div>
                </div>
            </div >
        );
    }

    card_movie() {
        return (
            <div className={"backgroundIMG"} style={{ background: `url(${this.state.find.photos[0].background})` }}>
                <div className="info_section">
                    <div className="movie_header">
                        <img className="locandina" src={this.state.find.photos[0].small_Picture} alt={this.state.find.photos[0].small_Picture} />
                        <h1>{this.state.find.name}</h1>
                        <h4>{this.state.find.publishing_Year}</h4>
                        <div>
                            <span className="minutes">{this.state.find.minutes} min</span>
                            {this.state.find.types.map((type, i) => (
                                <p className="type" key={i}>{type}</p>
                            ))}
                        </div>
                    </div>
                    <div className="movie_desc">
                        <p className="text">{this.state.find.text}</p>
                    </div>
                    <div className="movie_social">
                        <ul>
                            <li><i><VisibilityIcon /></i></li>
                            <li><i><FavoriteIcon color="primary" /></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    card_video() {
        return (
            <div className="info_section video">
                <ReactPlayer url={this.state.find.trailers} playing={true} className="video" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(Crime);