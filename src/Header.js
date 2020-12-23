import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from './images/background.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        color: '#080f15',

    },
    type: {
        ...theme.typography.button,
        // padding: theme.spacing(2),
        fontSize: '1em',
    }
}))


export const Header = () => {
    const classes = useStyles();


    return (
        <AppBar positiong="static" className={classes.root}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.type}>
                    Paul Stevens - Developer
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;