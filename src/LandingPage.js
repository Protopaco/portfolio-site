import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from './images/background.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        minWidth: '800px',
    },

    box: {
        border: '10px solid #1f3a4e',
        width: '300px',
        height: '200px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginTop: '200px',
        color: '#1f3a4e',
        fontSize: "3em",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        justifyItems: 'center',
        alignContent: 'center'

    },

    textbox: {
        ...theme.typography.button,
        padding: theme.spacing(2),
        fontSize: '.4em',
    },

    linkbox: {
        ...theme.typography.button,
        padding: theme.spacing(2),
        fontSize: '.7em',
    },
}))

export const LandingPage = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <div>
                <Container className={classes.container}>
                    <Box className={classes.box}>
                        <Typography className={classes.textbox}>
                            I am a software developer with a history of problem solving, leadership, and project development.
                            </Typography>
                    </Box>
                    <Box className={classes.box}>
                        <Typography className={classes.linkbox}>
                            WORK
                        </Typography>

                    </Box>
                    <Box className={classes.box}>
                        <Typography className={classes.linkbox}>
                            PROJECTS
                        </Typography>
                    </Box>
                </Container>
            </div>
        </div >
    );
}

export default LandingPage;