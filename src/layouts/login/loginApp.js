import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './loginApp.scss';
import HomeApp from '../home/homeApp';
import SingupApp from '../singup/singupApp';
import { Switch, Route, Link, useLocation } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
}));

export default function SignIn() {
    const classes = useStyles();
    let location = useLocation();
    let background = location.state && location.state.background;

    return (
        <div>
            <h3 color='secondary'>NetMovies</h3>
            <Container component="main" maxWidth="xs" style={{ backgroundColor: 'black' }}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar} classes={{
                        root: classes.root,
                        label: classes.label,
                    }}>
                    </Avatar>
                    <Typography component="h1" variant="h5" style={{ color: 'white' }}>
                        SING IN
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            classes={{
                                root: classes.root,
                                label: classes.label,
                            }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            classes={{
                                root: classes.root,
                                label: classes.label,
                            }}
                        />
                        <Link to="/">
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color='secondary'
                                className={classes.submit}
                            >
                                Sing In
                        </Button>
                        </Link>
                        <Grid container>
                            <Grid item xs>
                                <Link to="/singup">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/singup">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                            <Switch location={background || location}>
                                <Route exact path="/" children={<HomeApp />} />
                                <Route path="/singup" children={<SingupApp />} />
                            </Switch>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );
}