import React, { Component } from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';
import '../scss/Crime.scss';
import ReactPlayer from "react-player";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import $ from 'jquery';



class Crime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            width: 600,
            find: {},
            find_category: {},
            card_start: false,
            movies: this.props.Movies,
            categorys: this.props.Categorys,
        };
    }


    render() {
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
                <div style={{ padding: "10px", textAlign: "end", color: "#e5e5e5", border: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" }}>
                    <ul style={{ margin: "0px" }}>{dots}</ul>
                </div>
            ),
            customPaging: i => (
                <div style={{
                    marginTop: "270px",
                    width: "30px",
                    color: "#e5e5e5",
                    border: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    borderRadius: "3px",
                    textAlign: "center",
                    backgroundColor: "rgba(20, 20, 20, 0.5)",
                    lineHeight: "1.25vw",
                    fontSize: "1.4vw",
                    verticalAlign: "bottom",
                    display: "table-cell",
                }}>{i + 1}
                </div>
            ),
        };
        return (
            <div>
                {Object.values(this.state.categorys.Movies_Categorys_Reducer).map(categorys => (
                    categorys.crime.lenght !== 0 ?
                        <>
                            <div className="row-header">
                                <div className="rowTitle">
                                    <div className="row-header-title">{Object.keys(categorys).find(c => c === "crime")}</div>
                                </div>
                            </div>
                            <div className='top'>
                                <Slider {...settings}>
                                    {categorys.crime.map(movie => (movie.photos.map(photo => (
                                        <div className="top_small_Picture" key={categorys.crime.lenght}>
                                            <Grid item xs={3}>
                                                <div className="container">
                                                    <Paper onClick={() => ($(`#card_movie`).slideDown())}>
                                                        <div key={photo}>
                                                            <img src={photo.small_Picture} className="small_Picture" alt={photo.small_Picture} />
                                                            <div className="btnBackround">
                                                                <button className="btn"
                                                                    onClick={() => {
                                                                        this.setState({
                                                                            find: movie,
                                                                            find_category: categorys.crime
                                                                        })
                                                                    }}> ^
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Paper>
                                                </div>
                                            </Grid>
                                        </div>
                                    ))))}
                                </Slider>
                                {this.call_cart_movie(categorys.crime)}
                            </div>

                            {/* Action */}
                            <div className="row-header">
                                <div className="rowTitle">
                                    <div className="row-header-title">{Object.keys(categorys).find(c => c === "action")}</div>
                                </div>
                            </div>
                            <div className='top'>
                                <Slider {...settings}>
                                    {categorys.action.map(movie => (movie.photos.map(photo => (
                                        <div className="top_small_Picture" key={categorys.action.lenght}>
                                            <Grid item xs={3}>
                                                <div className="container">
                                                    <Paper onClick={() => ($(`#card_movie`).slideDown())}>
                                                        <div key={photo}>
                                                            <img src={photo.small_Picture} className="small_Picture" alt={photo.small_Picture} />
                                                            <div className="btnBackround">
                                                                <button className="btn"
                                                                    onClick={() => {
                                                                        this.setState({
                                                                            find: movie,
                                                                            find_category: categorys.action
                                                                        })
                                                                    }}> ^
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Paper>
                                                </div>
                                            </Grid>
                                        </div>
                                    ))))}
                                </Slider>
                                {this.call_cart_movie(categorys.action)}
                            </div>


                            <div className="row-header">
                                <div className="rowTitle">
                                    <div className="row-header-title">{Object.keys(categorys).find(c => c === "adventure")}</div>
                                </div>
                            </div>
                            <div className='top'>
                                <Slider {...settings}>
                                    {categorys.adventure.map(movie => (movie.photos.map(photo => (
                                        <div className="top_small_Picture" key={categorys.adventure.lenght}>
                                            <Grid item xs={3}>
                                                <div className="container">
                                                    <Paper onClick={() => ($(`#card_movie`).slideDown())}>
                                                        <div key={photo}>
                                                            <img src={photo.small_Picture} className="small_Picture" alt={photo.small_Picture} />
                                                            <div className="btnBackround">
                                                                <button className="btn"
                                                                    onClick={() => {
                                                                        this.setState({
                                                                            find: movie,
                                                                            find_category: categorys.adventure
                                                                        })
                                                                    }}> ^
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Paper>
                                                </div>
                                            </Grid>
                                        </div>
                                    ))))}
                                </Slider>
                                {this.call_cart_movie(categorys.adventure)}
                            </div>
                        </>
                        : null
                ))}
            </div>
        );
    }
    call_cart_movie(category) {
        console.log(category.find(c => c.id === this.state.find.id));
        return (
            <div>
                {this.state.find.photos != null ?
                    <div className="movie_card" key={this.state.find.id}>
                        {this.state.card_start === false ? this.card_movie(category) : this.state.card_start === true ? this.card_video(category) : null}
                    </div>
                    : null}
            </div>
        )
    }

    card_movie(category) {
        return (
            <div>
                {category.find(c => c.id === this.state.find.id) ?
                    <div id="card_movie" className={"backgroundIMG"} style={{ background: `url(${this.state.find.photos[0].background})` }}>
                        <div className="info_section">
                            <a className="cancelBtn" onClick={() => (
                                setTimeout(() => {
                                    this.setState({ find: {}, card_start: false })
                                }, 500) + $('#card_movie').slideUp())} href="/#">
                                <CancelIcon fontSize="large" />
                            </a>
                            <div className="movie_header">
                                <img className="locandina" src={this.state.find.photos[0].small_Picture} alt={this.state.find.photos[0].small_Picture} />
                                <h1>{category.find(c => c.name === this.state.find.name) ? this.state.find.name : null}</h1>
                                <h4>{this.state.find.publishing_Year}</h4>
                                <div>
                                    <button onClick={() => (
                                        this.setState({ card_start: true })
                                    )} className="WhatchTrailerBtn">Trailer</button>
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
                    : null}
            </div>
        )
    }

    card_video() {
        return (
            <div id="card_video" className="info_section video">
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <a className="cancelBtn" onClick={() => (this.setState({ find: {}, card_start: false }))} href="/#"><CancelIcon fontSize="large" /></a>
                    <a className="returnBtn" onClick={() => (this.setState({ card_start: false }))} href="/#"><ArrowBackIcon fontSize="large" /></a>
                </div>
                <ReactPlayer url={this.state.find.trailers}
                    playing={true}
                    className="video"
                    onEnded={() => (this.setState({ card_start: false }))}
                />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        Movies: state.MoviesReducer,
        Categorys: state.CategorysReducer,
    }
}
export default connect(mapStateToProps)(Crime);