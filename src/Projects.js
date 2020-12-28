import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from './images/background.jpg';
import { Grid, Box, Button, Typography } from '@material-ui/core';
// import LanguageIcon from '@material-ui/icons/Language';
import projectJson from './project-json.js';


const useStyles = makeStyles((theme) => ({
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
        width: '90%',
        // height: '650px',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        color: '#1f3a4e',
        fontSize: "3em",
        // display: 'flex',
        // justifyContent: 'space-between',
        margin: '10px',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center',
        paddingTop: '100px',
    },
    button_row: {
        width: "90vw",
        maxWidth: "1000px",
        display: "flex",
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#1f3a4e',
        color: '#fbf9ec',
        maxWidth: '30%',
    },
    logo_row: {
        backgroundColor: 'rgba(27, 50, 67, 0.4)',
        padding: '10px 20px 0px 20px',
        borderRadius: '50px',
    },
    logo: {
        width: '40px',
        padding: '5px'
    },
    description: {
        width: '90%',
        maxWidth: '900px',
        padding: ''
    },
    // sidebar: {
    //     marginRight: '20px',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'space-evenly',
    //     alignItems: 'center',
    // },
    text_box: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        padding: '0px 10px 0px 10px',
        marginTop: '30px',
    },
    image: {
        width: '90%',
        maxWidth: '700px',
        margin: '25px',
        alignSelf: 'center',
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    github_link: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        padding: '10px',
        margin: '10px',
        borderRadius: '50px',
        width: '50px',
        height: '50px',
    },
    grid: {
        paddingTop: '10vh',
    },
}))

export const Projects = () => {
    const classes = useStyles();
    const [displayedProject, setDisplayedProject] = useState(projectJson[0]);

    const handleClick = (project) => {
        setDisplayedProject(project);
    }

    return (
        <div className={classes.root}>
            <Grid
                className={classes.grid}
                container direction="column"
                justify="space-evenly"
                alignItems="center">

                <div className={classes.button_row}>
                    {projectJson.map(project => {
                        return <Button
                            variant="contained"
                            size="small"
                            onClick={() => handleClick(project)}
                            className={classes.button}
                            disabled={displayedProject.title === project.title ?
                                true :
                                false
                            }
                        >
                            {project.title}
                        </Button>
                    })}
                </div>

                <Grid className={classes.box}
                    container direction="column"
                    justify="space-evenly"
                    alignItems="center">
                    <div className={classes.body}>
                        <a href={displayedProject.url}
                            target="_blank"
                            rel="noreferrer"
                            className={classes.body}>
                            <img
                                className={classes.image}
                                src={displayedProject.image}
                                alt={displayedProject.title}
                            />
                        </a>
                        <div className={classes.logo_row}>
                            {displayedProject.logos.map(logo => {
                                return <img
                                    src={logo}
                                    alt={logo}
                                    className={classes.logo}
                                />
                            })}
                        </div>
                    </div>
                    <div className={classes.text_box}>
                        {displayedProject.description.map(text => {
                            return <p>
                                <Typography
                                    className={classes.description}
                                    variant="body1">
                                    {text}
                                </Typography>

                            </p>
                        })}
                    </div>
                    <a href={displayedProject.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className={classes.github_link}>
                            <img
                                className={classes.logo}
                                src={'/github.png'}
                                alt={displayedProject.title}
                            />
                        </div>
                    </a>
                </Grid>
            </Grid>

        </div >

    )
}

export default Projects;