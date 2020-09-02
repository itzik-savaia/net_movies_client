import React, { Component, Fragment } from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';
import './scss/categorys.scss';
import ReactPlayer from "react-player";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import $ from 'jquery';


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


class Science_Fintion_And_Fantasy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            width: 600,
            find: {},
            find_category: [],
            card_start: false,
            movies: this.props.Movies,
            categorys: this.props.Categorys,
        };
    }

    render() {

        return (
            <div>
                {Object.values(this.state.categorys.Movies_Categorys_Reducer).map((categorys, i) => (
                    <Fragment key={i}>
                        {categorys.science_fintion_and_fantasys === undefined ? null :
                            categorys.science_fintion_and_fantasys.length >= 4 ?
                                <Fragment key={i}>
                                    <div className="row-header">
                                        <div className="rowTitle">
                                            <div className="row-header-title" key={Object.keys(categorys).find(c => c === "science_fintion_and_fantasys")}>{Object.keys(categorys).find(c => c === "science_fintion_and_fantasys")}</div>
                                        </div>
                                    </div>
                                    <div className='top'>
                                        <Slider {...settings} key={Object.keys(categorys).find(c => c === "science_fintion_and_fantasys")} >
                                            {categorys.science_fintion_and_fantasys.map(movie => (movie.photos.map(photo => (
                                                <div className="top_small_Picture" key={movie.id}>
                                                    <Grid item xs={3} key={movie.id} >
                                                        <div className="container">
                                                            <Paper onClick={() => ($(`#card_movie`).slideDown())}>
                                                                <div key={photo}>
                                                                    <img src={photo.small_Picture} className="small_Picture" alt={photo.small_Picture} />
                                                                    <div className="btnBackround">
                                                                        <button className="btn"
                                                                            onClick={() => {
                                                                                this.setState({
                                                                                    find: movie,
                                                                                    find_category: categorys.science_fintion_and_fantasys
                                                                                })
                                                                            }}> ^
                                                                </button>
                                                                    </div>
                                                                </div>
                                                            </Paper>
                                                        </div>
                                                    </Grid>
                                                </div>
                                            ))))
                                            }
                                        </Slider>
                                        {this.call_cart_movie(categorys.science_fintion_and_fantasys)}
                                    </div>
                                </Fragment>
                                : null}

                    </Fragment>
                ))}
            </div>
        )
    }

    call_cart_movie() {
        return (
            <div>
                {this.state.find.photos != null ?
                    <div className="movie_card" key={this.state.find.id}>
                        {this.state.card_start === false ? this.card_movie() : this.state.card_start === true ? this.card_video() : null}
                    </div>
                    : null}
            </div>
        )
    }

    card_movie() {
        return (
            <div>
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
                            <h1>{this.state.find.name}</h1>
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
            </div>
        )
    }

    card_video() {
        return (
            <div id="card_video" className="info_section video">
                <>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <a className="cancelBtn" onClick={() => (this.setState({ find: {}, card_start: false }))} href="/#"><CancelIcon fontSize="large" /></a>
                        <a className="returnBtn" onClick={() => (this.setState({ card_start: false }))} href="/#"><ArrowBackIcon fontSize="large" /></a>
                    </div>
                    <ReactPlayer url={this.state.find.trailers}
                        playing={true}
                        className="video"
                        onEnded={() => (this.setState({ card_start: false }))}
                    />
                </>
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
export default connect(mapStateToProps)(Science_Fintion_And_Fantasy);