import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import grey from '@material-ui/core/colors/grey';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    color: {
        backgroundColor: grey[900]
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
    },
}));


export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState('BottomNavigation');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.color}>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title} variant="h5" noWrap>
                        <BottomNavigation value={value} onChange={handleChange} className={classes.root, classes.color}>
                            <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
                            <BottomNavigationAction label="favorites" value="favorites" icon={<FavoriteIcon />} />
                            <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
                            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
                        </BottomNavigation>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

