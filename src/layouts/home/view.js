import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Fetch_All_Movies_In_Categorys, Fetch_All_Movies } from '../../app/dispatch';
import './scss/view.scss';

// Components
import Terror from './components/Terror';
import Family from './components/Family';
import Science_Fintion_And_Fantasy from './components/Science_Fintion_And_Fantasy';
import Crime from './components/Crime';
import Comedie from './components/Comedie';
import Romanticism from './components/Romanticism';
import Sport from './components/Sport';
import Action from './components/Action';
import Stand_Up_Show from './components/Stand_Up_Show';
import Thriller from './components/Thriller';
import Fantasy from './components/Fantasy';
import Sci_Fi from './components/Sci_Fi';
import Drama from './components/Drama';
import Mystery from './components/Mystery';
import Music from './components/Music';
import Adventure from './components/Adventure';
import Animation from './components/Animation';


// Material-UI
import Grid from "@material-ui/core/Grid";

const View = props => {
    const dispatch = useDispatch();
    // const Movies = useSelector((state) => state.MoviesReducer);
    // const Categorys = useSelector((state) => state.CategorysReducer);

    // const [data, setData] = useState({
    //     movies: Movies,
    //     categorys: Categorys,
    // });

    useEffect(() => {
        dispatch(Fetch_All_Movies())
        dispatch(Fetch_All_Movies_In_Categorys())
    }, [dispatch]);


    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Terror />
                </Grid>
                <Grid item xs={12}>
                    <Family />
                </Grid>
                <Grid item xs={12}>
                    <Science_Fintion_And_Fantasy />
                </Grid>
                <Grid item xs={12}>
                    <Crime />
                </Grid>
                <Grid item xs={12}>
                    <Comedie />
                </Grid>
                <Grid item xs={12}>
                    <Romanticism />
                </Grid>
                <Grid item xs={12}>
                    <Sport />
                </Grid>
                <Grid item xs={12}>
                    <Action />
                </Grid>
                <Grid item xs={12}>
                    <Stand_Up_Show />
                </Grid>
                <Grid item xs={12}>
                    <Thriller />
                </Grid>
                <Grid item xs={12}>
                    <Fantasy />
                </Grid>
                <Grid item xs={12}>
                    <Sci_Fi />
                </Grid>
                <Grid item xs={12}>
                    <Drama />
                </Grid>
                <Grid item xs={12}>
                    <Mystery />
                </Grid>
                <Grid item xs={12}>
                    <Music />
                </Grid>
                <Grid item xs={12}>
                    <Adventure />
                </Grid>
                <Grid item xs={12}>
                    <Animation />
                </Grid>
            </Grid>
        </div >
    );
}

export default View;
