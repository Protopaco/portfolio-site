import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import backgroundImage from './images/background.jpg';
import { Box } from '@material-ui/core';
import aboutMeData from './aboutme-data.js';



const useStyles = makeStyles(() => ({
    root: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        width: '100%',
        height: '100%',
        minWidth: '100vw',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        border: '7px solid rgba(251, 249, 236, .7)',
        width: '75%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: '#1f3a4e',
        fontSize: "3em",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '10px',
        padding: '20px',
        marginTop: '80px',
    },
    type: {
        padding: '10px'
    }

}))

export const AboutMe = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Box className={classes.box}>
                {aboutMeData.map((data, index) => {
                    return <Typography
                        className={classes.type}
                        variant="body1"
                        key={index}>
                        {data}
                    </Typography>
                })}
            </Box>

        </div>
    );
}

export default AboutMe;
