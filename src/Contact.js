import { makeStyles, Box, Typography } from '@material-ui/core';
import React from 'react';
import backgroundImage from './images/background.jpg';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(() => ({
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
        width: '600px',
        height: '400px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: '#1f3a4e',
        fontSize: "3em",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '10px',
        padding: '20px'
    },
    line: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#1f3a4e',
    }
}))


export const Contact = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.box}>
                <Typography variant="h3">
                    PAUL STEVENS
                </Typography>
                <div className={classes.line}>
                    <HomeIcon fontSize="large" />
                    <Typography variant="h5">
                        1122 SE 36th Ave, Portland, OR, 97214
                    </Typography>
                </div>
                <div className={classes.line}>
                    <PhoneIcon fontSize="large" />
                    <Typography variant="h5">
                        (360) 317-6607
                    </Typography>
                </div>
                <div>
                    <a href={"mailto:paul.stevens.developer@gmail.com"} className={classes.line}>
                        <EmailIcon fontSize="large" />
                        <Typography variant="h5">
                            paul.stevens.developer@gmail.com
                    </Typography>
                    </a>
                </div>
                <div>
                    <a
                        href={"https://www.linkedin.com/in/paul-stevens-dev/"}
                        className={classes.line}
                        target="_blank"
                        rel="noreferrer">
                        <LinkedInIcon fontSize="large" />
                        <Typography variant="h5">
                            @paul-stevens-dev
                    </Typography>
                    </a>
                </div>
                <div>
                    <a
                        href={"https://github.com/Protopaco"}
                        className={classes.line}
                        target="_blank"
                        rel="noreferrer">
                        <GitHubIcon fontSize="large" />
                        <Typography variant="h5">
                            @Protopaco
                    </Typography>
                    </a>
                </div>
            </Box>
        </div>
    )
}

export default Contact;
