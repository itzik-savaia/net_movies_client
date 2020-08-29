import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Fetch_All_Movies_In_Categorys, Fetch_All_Movies } from '../../app/dispatch';
import './scss/view.scss';

// Components
import Crime from './components/crime/crime';

// Material-UI
import Grid from "@material-ui/core/Grid";

const View = props => {
    const dispatch = useDispatch();
    const Movies = useSelector((state) => state.MoviesReducer);
    const Categorys = useSelector((state) => state.CategorysReducer);

    const [data, setData] = useState({
        movies: Movies,
        categorys: Categorys,
    });

    useEffect(() => {
        dispatch(Fetch_All_Movies())
        dispatch(Fetch_All_Movies_In_Categorys())
    }, [dispatch]);


    return (
        <div>
            <Grid container>
                <Grid item xs>
                    <Crime />
                </Grid>
            </Grid>
        </div >
    );
}

export default View;
