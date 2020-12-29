import React, { useState } from 'react';
import { Button, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from './images/background.jpg';
import { Link } from "react-router-dom";
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        minWidth: '100vw',
        alignItems: 'center',
    },

    box: {
        width: '70%',
        maxWidth: '300px',
        height: '20',
        minHeight: '75px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: '#1f3a4e',
        fontSize: "3em",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        margin: "7% 12%",
    },

    linkbox: {
        ...theme.typography.button,
        padding: theme.spacing(2),
        fontSize: '.5em',
        textDecoration: 'none'
    },

    pic: {
        marginTop: '12vh',
        borderRadius: "150px",
        height: '20vh',
    },

    frame: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

}))

export const LandingPage = () => {
    const classes = useStyles();
    const [click, setClick] = useState(localStorage.getItem('click'));


    const handleClick = () => {
        localStorage.setItem('click', true)
        setClick(true)
    }

    return (
        <div className={classes.root}>
            <div className={classes.frame}>
                <Slide in={click} direction="down">
                    <img
                        src="/ProfilePic1Cropped.jpg"
                        alt="Paul Stevens"
                        className={classes.pic}
                    />
                </Slide>
                {
                    !click ?
                        <Box className={classes.box}
                            clickable
                            style={{ marginTop: '10%', cursor: 'pointer' }}
                            onClick={handleClick}>
                            <Typography className={classes.linkbox}>HELLO!</Typography>
                        </Box>
                        :
                        <></>
                }
            </div>
            <div>
                <Grid
                    container direction="row"
                    justify="center"
                    align="center">
                    <Grid item xs={12} sm={6}>
                        <Slide in={click} direction="left" style={{ transitionDelay: click ? '100ms' : '0ms' }}>
                            <Box
                                className={classes.box}
                                component={Link}
                                to='/aboutme'>
                                <Typography className={classes.linkbox}>
                                    About me
                                </Typography>
                            </Box>
                        </Slide>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Slide in={click} direction="right" style={{ transitionDelay: click ? '200ms' : '0ms' }}>
                            <Box
                                className={classes.box}
                                component={Link}
                                to='/career'>
                                <Typography className={classes.linkbox}>
                                    Career
                                </Typography>
                            </Box>
                        </Slide>
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <Slide in={click} direction="left" style={{ transitionDelay: click ? '300ms' : '0ms' }}>

                            <Box
                                className={classes.box}
                                component={Link}
                                to='/projects'>
                                <Typography className={classes.linkbox}>
                                    PROJECTS
                                </Typography>
                            </Box>
                        </Slide>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Slide in={click} direction="right" style={{ transitionDelay: click ? '400ms' : '0ms' }}>

                            <Box
                                className={classes.box}
                                component={Link}
                                to='/contact'>
                                <Typography className={classes.linkbox}>
                                    CONTACT
                                </Typography>
                            </Box>
                        </Slide>
                    </Grid>


                </Grid>
            </div>
        </div >
    );
}

export default LandingPage;