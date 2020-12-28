import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from './images/background.jpg';
import { Link } from "react-router-dom";

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
    },

    box: {
        border: '7px solid rgba(251, 249, 236, .7)',
        width: '70%',
        maxWidth: '300px',
        height: '25%',
        backgroundColor: 'rgba(27, 50, 67, 0.4)',
        color: '#fbf9ec',
        fontSize: "3em",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        margin: "7% 12%",
    },
    grid: {
        paddingTop: '10vh',
    },
    linkbox: {
        ...theme.typography.button,
        padding: theme.spacing(2),
        fontSize: '.5em',
        textDecoration: 'none'
    },

}))

export const LandingPage = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <div>
                <Grid
                    className={classes.grid}
                    container direction="row"
                    justify="space-evenly"
                    alignItems="center">
                    <Box
                        className={classes.box}
                        component={Link}
                        to='/aboutme'>
                        <Typography className={classes.linkbox}>
                            About me
                        </Typography>

                    </Box>
                    <Box
                        className={classes.box}
                        component={Link}
                        to='/career'>
                        <Typography className={classes.linkbox}>
                            Career
                            </Typography>
                    </Box>
                    <Box
                        className={classes.box}
                        component={Link}
                        to='/projects'>
                        <Typography className={classes.linkbox}>
                            PROJECTS
                        </Typography>
                    </Box>
                    <Box
                        className={classes.box}
                        component={Link}
                        to='/contact'>
                        <Typography className={classes.linkbox}>
                            CONTACT
                        </Typography>
                    </Box>
                </Grid>
            </div>
        </div >
    );
}

export default LandingPage;