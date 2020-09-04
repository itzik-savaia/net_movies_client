import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fetch_All_Movies_In_Categorys, Fetch_All_Movies } from '../../app/dispatch';
import './scss/view.scss';

// Components
import Terror from './components/terror';
import Family from './components/family';
import ScienceFintionAndFantasy from './components/science_fintion_and_fantasy';
import Crime from './components/crime';
import Comedie from './components/comedie';
import Romanticism from './components/romanticism';
import Sport from './components/sport';
import Action from './components/action';
import StandUpShow from './components/stand_up_show';
import Thriller from './components/thriller';
import Fantasy from './components/fantasy';
import SciFi from './components/sci_fi';
import Drama from './components/drama';
import Mystery from './components/mystery';
import Music from './components/music';
import Adventure from './components/adventure';
import Animation from './components/animation';


// Material-UI
import Grid from "@material-ui/core/Grid";


const View = props => {
    const dispatch = useDispatch();
    const Movies = useSelector((state) => state.MoviesReducer);
    const Categorys = useSelector((state) => state.CategorysReducer);

    const [data, setData] = useState({
        movies: Movies,
        categorys: Categorys,
        categorys_name: [],
    });
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
    const category_name_uppercase = () => {
        for (const categorys of data.categorys.Movies_Categorys_Reducer) {
            Object.keys(categorys).forEach(e => {
                const uppercase = e.toUpperCase().substr(0, 1).toUpperCase() + e.substr(1);
                data.categorys_name.push(uppercase);
            });
        }
    }
    useEffect(() => {
        dispatch(Fetch_All_Movies())
        dispatch(Fetch_All_Movies_In_Categorys())
    }, [dispatch]);

    useEffect(() => {
        category_name_uppercase()
    });

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
                    <ScienceFintionAndFantasy />
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
                    <Sport sttings={settings} />
                </Grid>
                <Grid item xs={12}>
                    <Action categorys_name={data.categorys_name} sttings={settings} />
                </Grid>
                <Grid item xs={12}>
                    <StandUpShow />
                </Grid>
                <Grid item xs={12}>
                    <Thriller />
                </Grid>
                <Grid item xs={12}>
                    <Fantasy />
                </Grid>
                <Grid item xs={12}>
                    <SciFi />
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
