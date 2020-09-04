import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './forgot_pass.scss';
import HomeApp from '../home/homeApp';
import LoginApp from '../login/loginApp';
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
        background: 'linear-gradient(45deg, #b71c1c 30%,  #212121 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        boxShadow: '0 3px 5px 2px rgb(125 0 0 / 30%)',
        textTransform: 'capitalize',
    },
    textfield: {
        background: 'linear-gradient(0deg, #b71c1c 20%, black 95% )',
        borderRadius: 3,
        border: 0,
        color: 'white',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        boxShadow: '0 3px 5px 5px rgb(125 0 0 / 30%)',
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
                    <Avatar className={classes.avatar}></Avatar>
                    <Typography component="h1" variant="h5" style={{ color: 'white' }}>
                        FORGOT PASSWORD
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
                            className={classes.textfield}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color='secondary'
                            className={classes.submit}
                        >
                            Send email
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to="/login">
                                    Back to Login
                                </Link>
                            </Grid>
                            <Switch location={background || location}>
                                <Route exact path="/" children={<HomeApp />} />
                                <Route path="/login" children={<LoginApp />} />
                            </Switch>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );
}