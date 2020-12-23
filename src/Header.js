import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@material-ui/core';
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
    },
    menu: {
        backgroundColor: 'black'
    }
}))


export const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar positiong="static" className={classes.root}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="nav-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/aboutme">About Me</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/career">Career</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/projects">Projects</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/contact">Contact</MenuItem>
                </Menu>

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