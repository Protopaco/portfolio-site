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
        fontWeight: 'bold',
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
    media: {
        width: '500px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
    },
    logo: {
        width: 'auto',
        height: '200px',
    },
    card: {
        width: '500px'
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
                    {careerJson.map(job => {
                        return <Box className={classes.box} component={Button} onClick={() => handleClick(job)} key={careerJson.indexOf(job)}>
                            <Typography className={classes.linkbox}>
                                {`${job.title} - ${job.business} - ${job.time}`}
                            </Typography>
                        </Box>
                    })}
                </Container>
                <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                    <Card className={classes.card}>
                        <CardHeader
                            title={`${popUpCard.title} - ${popUpCard.business}`}
                            subheader={popUpCard.time}
                            style={{ backgroundColor: popUpCard.color, color: '#FFFFFF', }}
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