import React, { Fragment } from 'react';
import ReactPlayer from "react-player";
import CancelIcon from '@material-ui/icons/Cancel';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './components/scss/categorys.scss';
import $ from 'jquery';

export const state = {
    find: Object,
    card_start: false,
}

export const settings = {
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

export const call_cart_movie = () => {
    console.log(state);
    if (Object.keys(state.find).length !== 0) {
        return (
            <div>
                {state.find.photos != null ?
                    <div className="movie_card" key={state.find.id}>
                        {state.card_start === false ? card_movie() : state.card_start === true ? card_video() : null}
                    </div>
                    : null}
            </div>
        )
    }
}

export const card_movie = () => {
    return (
        <div>
            <div id="card_movie" className={"backgroundIMG"} style={{ background: `url(${state.find.photos[0].background})` }}>
                <div className="info_section">
                    <a className="cancelBtn" onClick={() => (
                        setTimeout(() => {
                            state.card_start = false;
                            state.find = {};
                            console.log(state);
                        }, 500) + $('#card_movie').slideUp())} href="/#">
                        <CancelIcon fontSize="large" />
                    </a>
                    <div className="movie_header">
                        <img className="locandina" src={state.find.photos[0].small_Picture} alt={state.find.photos[0].small_Picture} />
                        <h1>{state.find.name}</h1>
                        <h4>{state.find.publishing_Year}</h4>
                        <div>
                            <button onClick={() => (
                                state.card_start = true, card_video()
                            )} className="WhatchTrailerBtn">Trailer</button>
                            <span className="minutes">{state.find.minutes} min</span>
                            {state.find.types.map((type, i) => (
                                <p className="type" key={i}>{type}</p>
                            ))}
                        </div>
                    </div>
                    <div className="movie_desc">
                        <p className="text">{state.find.text}</p>
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

export const card_video = () => {
    console.log(state);
    if (state.card_start !== false) {
        return (
            <div id="card_video" className="info_section video">
                <Fragment>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <a className="cancelBtn" onClick={() => (
                            state.find = {},
                            state.card_start = false
                        )} href="/#"><CancelIcon fontSize="large" /></a>
                        <a className="returnBtn" onClick={() => (state.card_start = false)} href="/#"><ArrowBackIcon fontSize="large" /></a>
                    </div>
                    <ReactPlayer url={state.find.trailers}
                        playing={true}
                        className="video"
                        onEnded={() => (state.card_start = false)}
                    />
                </Fragment>
            </div>
        )
    }
}