import React, { Fragment, useState, useEffect, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Fetch_All_Movies } from '../../app/dispatch';
import './scss/view.scss';

// Components
// import Try from './components/try';


// Material-UI
// import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";



// const useStyles = makeStyles({

// });

const View = props => {
    // const classes = useStyles();
    const dispatch = useDispatch();
    const movies_store = useSelector(state => state.movies);
    // const [data, setData] = useState({ movies: [] });

    const movieList = Object.keys(movies_store).map(key =>
        <option>{movies_store[key]}</option>
    )

    useEffect(() => {
        dispatch(Fetch_All_Movies());
    }, []);
    const click_movie = (name) => console.log('click', name);

    return (
        <div>
            <Fragment>

                <Grid>
                    <h1 style={{ color: 'red' }}>movies</h1>

                    <div className="carousel" data-flickity='{ "draggable": false }'>
                        {/* {movieList.map((movie, i) => ( */}

                        <div class="carousel-cell"></div>
                        <div class="carousel-cell"></div>
                        <div class="carousel-cell"></div>
                        <div class="carousel-cell"></div>
                        <div class="carousel-cell"></div>


                        {/* <div key={movie.props.children.id} className="carousel-cell">
                                 <div className="movie_card" key={movie.props.children.id} id={movie.props.children.name}>
                                     <a onClick={click_movie(movie.props.children.name)}>
                                         <div className="info_section">
                                             <div className="movie_header">
                                                 {movie.props.children.photos.map(photo => (
                                                     <img key={movie.props.children.id} className="locandina" src={photo.small_Picture} />
                                                 ))}
                                                 <h1>{movie.props.children.name}</h1>
                                                 <h4>{movie.props.children.publishing_Year}, {movie.props.children.stage_Manager}</h4>
                                                 <span className="minutes">{movie.props.children.minutes} min</span>
                                                 <p className="type">{movie.props.children.types}</p>
                                             </div>
                                             <div className="movie_desc">
                                                 <p className="text">{movie.props.children.text}</p>
                                             </div>
                                             <div className="movie_social">
                                                 <ul>
                                                     <li><i className="material-icons">like</i></li>
                                                     <li><i className="material-icons">photos</i></li>
                                                 </ul>
                                             </div>
                                         </div>
                                         {movie.props.children.photos.map(photo => (
                                             <div key={movie.props.children.id} className="blur_back" style={{ backgroundImage: `url(${photo.background})` }}></div>
                                         ))}
                                     </a>
                                 </div>
                             </div>
                         ))} */}
                    </div>
                </Grid>
            </Fragment>
        </div >
    );
}

export default View;
