/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from 'axios';
import './scss/try.scss';
// import $ from "jquery";

export default class Try extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }
    componentDidMount() {
        axios.get('https://localhost:44362/api/movie')
            .then(res => {
                console.log(res.data);
                this.setState({
                    movies: res.data
                })
            }).catch(res => { console.log(res.error); })
    }

    click_movie = (name) => console.log('click', name);

    render() {
        return (
            <div>
                <h1 style={{ color: 'red' }}>movies</h1>
                <div class="carousel" data-flickity='{ "draggable": false }'>

                    {this.state.movies.map((movie, i) => (
                        <div className="carousel-cell">
                            <div className="movie_card" key={movie.id} id={movie.name}>
                                <a onClick={this.click_movie(movie.name)}>
                                    <div className="info_section">
                                        <div className="movie_header">
                                            {movie.photos.map(photo => (
                                                <img className="locandina" src={photo.small_Picture} />
                                            ))}
                                            <h1>{movie.name}</h1>
                                            <h4>{movie.publishing_Year}, {movie.stage_Manager}</h4>
                                            <span className="minutes">{movie.minutes} min</span>
                                            <p className="type">{movie.types}</p>
                                        </div>
                                        <div className="movie_desc">
                                            <p className="text">{movie.text}</p>
                                        </div>
                                        <div className="movie_social">
                                            <ul>
                                                <li><i className="material-icons">like</i></li>
                                                <li><i className="material-icons">photos</i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {movie.photos.map(photo => (
                                        <div className="blur_back" style={{ backgroundImage: `url(${photo.background})` }}></div>
                                    ))}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

