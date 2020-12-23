import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import backgroundImage from './images/background.jpg';
import { Box } from '@material-ui/core';
import aboutMeData from './aboutme-data.js';



const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        minWidth: '800px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        border: '10px solid #1f3a4e',
        width: '1200px',
        height: '750px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: '#1f3a4e',
        fontSize: "3em",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '10px',
        padding: '20px'
    },

}))

export const AboutMe = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Box className={classes.box}>
                {aboutMeData.map((data, index) => {
                    return <Typography variant="body1" key={index}>
                        {data}
                    </Typography>
                })}
            </Box>

        </div>
    );
}

export default AboutMe;
