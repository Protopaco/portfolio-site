import { makeStyles, Box, Typography, Chip } from '@material-ui/core';
import React from 'react';
import backgroundImage from './images/background.jpg';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import resume from './images/PaulStevensResume12-23-20.pdf';

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
        // border: '7px solid rgba(251, 249, 236, .7)',
        width: '65%',
        maxWidth: '500px',
        height: '35vh',
        maxHeight: '500px',
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

    const onResumeClick = () => {
        window.open('resume')
    }
    return (
        <div className={classes.root}>
            <Box className={classes.box}>
                <Typography variant="h5">
                    PAUL STEVENS
                </Typography>
                <Chip
                    size="medium"
                    label="RESUME"
                    icon={<PictureAsPdfIcon />}
                    color="primary"
                    clickable
                    onClick={onResumeClick}
                />


                <div className={classes.line}>
                    <HomeIcon fontSize="small" />
                    <Typography variant="subtitle1">
                        Portland, OR
                    </Typography>
                </div>
                <div className={classes.line}>
                    <PhoneIcon fontSize="small" />
                    <Typography variant="subtitle1">
                        (360) 317-6607
                    </Typography>
                </div>
                <div>
                    <a href={"mailto:paul.stevens.developer@gmail.com"} className={classes.line}>
                        <EmailIcon fontSize="small" />
                        <Typography variant="subtitle1">
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
                        <LinkedInIcon fontSize="small" />
                        <Typography variant="subtitle1">
                            paul-stevens-dev
                    </Typography>
                    </a>
                </div>
                <div>
                    <a
                        href={"https://github.com/Protopaco"}
                        className={classes.line}
                        target="_blank"
                        rel="noreferrer">
                        <GitHubIcon fontSize="small" />
                        <Typography variant="subtitle1">
                            Protopaco
                    </Typography>
                    </a>
                </div>
            </Box>
        </div>
    )
}

export default Contact;
