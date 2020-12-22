import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from './images/background.jpg';

const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        color: '#080f15',

    }
})


export const Header = () => {
    const classes = useStyles();


    return (
        <AppBar positiong="static" className={classes.root}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Paul Stevens
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;