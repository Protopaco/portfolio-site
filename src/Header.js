import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from './images/background.jpg';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        color: '#080f15',

    },
    type: {
        ...theme.typography.button,
        fontSize: '1em',
        flexGrow: 1,
    },
    homeButton: {
        color: '#fbf9ec'
    }
}))


export const Header = () => {
    const classes = useStyles();

    return (
        <AppBar positiong="static" className={classes.root}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.type}>
                    Paul Stevens - Developer
                </Typography>
                <IconButton edge="end" className={classes.homeButton} component={Link} to={'/'} aria-label="menu">
                    <HomeIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;