import React, { useState } from 'react';
import { Container, Box, Typography, Button, Backdrop, Card, CardContent, CardHeader, CardMedia, List, ListItem, Divider, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from './images/background.jpg';
import careerJson from './career-json.js';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        width: '100%',
        height: '100%',
        minWidth: '80w',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        border: '10px solid #1f3a4e',
        width: '80vw',
        minWidth: '50vw',
        maxWidth: '500px',
        height: '100px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: '#1f3a4e',
        fontSize: "3em",
        display: 'flex',
        flexDirection: 'column',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5%',
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center',
        paddingTop: '15%',
    },

    textbox: {
        ...theme.typography.button,
        padding: theme.spacing(2),
        fontSize: '.4em',
        fontWeight: 'bold',
    },

    linkbox: {
        textTransform: 'uppercase',
        padding: '2px',
        fontSize: '.33em',
        // fontSize: '3vw',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    media: {
        width: '100%',
        maxWidth: '500px',
        height: '30vh',
        maxHeight: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 'auto',
        maxWidth: '90%',
        height: '25vh',
        maxHeight: '200px',
    },
    card: {
        width: '90vw',
        maxWidth: '500px'
    }
}))


export const Career = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [popUpCard, setPopUpCard] = useState(careerJson[0])

    const handleClick = (job) => {
        setOpen(true);
        setPopUpCard(job);
        console.log(popUpCard.logo)
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <div>
                <Container className={classes.container}>
                    {careerJson.map((job, index) => {
                        return <Box
                            className={classes.box}
                            // component={Button}
                            onClick={() => handleClick(job)}
                            key={index}>
                            <Typography
                                className={classes.linkbox}>
                                {job.title}
                            </Typography>
                            <Typography
                                className={classes.linkbox}>
                                {job.business}
                            </Typography>
                            <Typography
                                className={classes.linkbox}>
                                {job.time}
                            </Typography>
                        </Box>
                    })}
                </Container>
                <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                    <Card className={classes.card}>
                        <CardHeader
                            title={`${popUpCard.title} - ${popUpCard.business}`}
                            subheader={popUpCard.time}
                            style={{ backgroundColor: popUpCard.color, color: '#FFFFFF' }}
                            subheaderTypographyProps={{ color: '#FFFFFF' }}
                        />
                        <CardMedia
                            className={classes.media}
                            title={popUpCard.business} >
                            <img src={popUpCard.logo} className={classes.logo} alt={popUpCard.business} />
                        </CardMedia>
                        <CardContent>
                            <List>
                                {popUpCard.details.map(detail => {
                                    return <div>
                                        <Divider />
                                        <ListItem>
                                            <ListItemText
                                                primary={detail}
                                                key={popUpCard.details.indexOf(detail)}
                                            />
                                        </ListItem>
                                    </div>
                                })}
                            </List>
                        </CardContent>
                    </Card>
                </Backdrop>
            </div>
        </div >
    );

}

export default Career;
