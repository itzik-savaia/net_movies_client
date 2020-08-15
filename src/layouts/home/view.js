import React, { useEffect, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Fetch_All_Movies } from '../../app/dispatch';
import './scss/view.scss';

// Components
import Crime from './components/crime';


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

    return (
        <div>

            <Grid container>
                <Grid item xs>
                    <Crime />
                </Grid>
                <Grid item>
                </Grid>
            </Grid>
        </div >
    );
}

export default View;
