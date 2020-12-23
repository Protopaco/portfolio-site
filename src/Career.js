import React, { useState } from 'react';
import { Container, Box, Typography, Button, Backdrop, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from './images/background.jpg';
import careerJson from './career-json.js';

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
        width: '800px',
        height: '100px',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        color: '#1f3a4e',
        fontSize: "3em",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center',
        paddingTop: '100px',
    },

    textbox: {
        ...theme.typography.button,
        padding: theme.spacing(2),
        fontSize: '.4em',
    },

    linkbox: {
        ...theme.typography.button,
        padding: theme.spacing(2),
        fontSize: '.37em',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}))


export const Career = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [popUpCard, setPopUpCard] = useState('')

    const handleClick = (job) => {
        setOpen(true);
        setPopUpCard(job);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <div>
                <Container className={classes.container}>
                    {careerJson.map(job => {
                        return <Box className={classes.box} component={Button} onClick={() => handleClick(job)} key={job.business}>
                            <Typography className={classes.linkbox}>
                                {`${job.time} - ${job.title} - ${job.business}`}
                            </Typography>
                        </Box>
                    })}

                </Container>
                <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                    <Card>
                        <CardContent>
                            <Typography >
                                {popUpCard.business}
                            </Typography>
                        </CardContent>
                    </Card>
                </Backdrop>
            </div>
        </div >
    );

}

export default Career;