import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from './images/background.jpg';
import { Container, Box, Button, Typography } from '@material-ui/core';
// import LanguageIcon from '@material-ui/icons/Language';
import projectJson from './project-json.js';

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
        width: '1000px',
        height: '650px',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        color: '#1f3a4e',
        fontSize: "3em",
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
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
        width: "1000px",
        display: "flex",
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    button: {
        backgroundColor: '#1f3a4e',
        color: '#fbf9ec',
    },
    logo: {
        width: '30px',
        padding: '5px'
    },
    description: {
        width: '300px'
    },
    sidebar: {
        marginLeft: '5px'
    }
}))

export const Projects = () => {
    const classes = useStyles();
    const [displayedProject, setDisplayedProject] = useState(projectJson[0]);

    const handleClick = (project) => {
        console.log(project.title)
        setDisplayedProject(project);
    }

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <div className={classes.button_row}>
                    {projectJson.map(project => {
                        return <Button
                            variant="contained"
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
                <Box className={classes.box}>
                    <div className={classes.sidebar}>
                        <div>
                            {displayedProject.description.map(text => {
                                return <p>
                                    <Typography
                                        className={classes.description}
                                        variant="body1"
                                    >
                                        {text}
                                    </Typography>

                                </p>
                            })}
                        </div>
                        <div>
                            {displayedProject.logos.map(logo => {
                                return <img
                                    src={logo}
                                    alt={logo}
                                    className={classes.logo}
                                />
                            })}
                        </div>
                    </div>
                </Box>
            </Container>

        </div >

    )
}

export default Projects;