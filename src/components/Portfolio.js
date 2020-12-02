import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import {
    Box,
    Grid,
    Container, 
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import Navbar from './Navbar';

//Project Images
import project1 from '../images/home-screen.png';
import project2 from '../images/little-fish-go.jpg';
import project3 from '../images/super-similar.png';
import project4 from '../images/weather-dashboard.png';
import project5 from '../images/weedmates.png';


const useStyles = makeStyles(theme => ({
    cardContainer: {
        margin: "auto",
        marginBottom: "1rem",
        boxShadow: "0 19px 38px rgba(0,0,0,0.40), 0 15px 12px rgba(0,0,0,0.30)",
    },
    summary: {
        color: "black",
        margin: "2px"
    },
    heading: {
        color: "#ef6817", 
        fontWeight: "bold",
        textAlign: "center", 
        backgroundColor: "black",
        marginBottom: "1rem"
    },
    button: {
        background:"#ef6817", 
        color: "white"
    },
    buttonContainer: {
        placeContent: "center"
    }
}))

const Portfolio = () => {

    const classes = useStyles();

    return(
        <Box component="div">
            <Navbar />
            <Container fixed style={{ marginTop: "2rem" }}  >
                <Grid spacing={4} container justify="center">
            <Grid item xs={12} sm={8} md={4}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                            component="img" 
                            alt="Weedmates"
                            image={project5}
                        />
                        <CardContent style={{ color: "#919191" }} className={classes.cardContent}>
                            <Typography   variant="h5" className={classes.heading}>
                            Weedmates
                            </Typography>
                            <Typography variant="body2"  component="p" className={classes.summary}>
                            A friend and I were sitting around talking about weed and realized that there was nothing that openly tried to connect people so they can smoke together. So we worked together and built one! Think of it like the tinder of weedsmoking. Both users need to like each other in order to be a match and talk to eachother
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.buttonContainer}>
                        <Button size="small" className={classes.button} href="https://github.com/jbaxter91/weedmates" target="_blank">
                            Github Repository
                        </Button>
                        <Button size="small" className={classes.button} href="https://weedmates.herokuapp.com/" target="_blank">
                            Deployed Version
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                            component="img" 
                            alt="Lil Fish Go" 
                            image={project2}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" className={classes.heading}>
                            Lil Fish Go
                            </Typography>
                            <Typography variant="body2" color="black" component="p" className={classes.summary}>
                            A fun flappy birds clone where you control a fish just trying to survive in the ocean. This game was deployed to the google play store. It eventually had to be removed however because i ended up losing the source code. The important lesson here was always backup / use VCS
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        
                </Card>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                            component="img" 
                            alt="Super Similar"
                            image={project3}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" className={classes.heading}>
                        Super Similar
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.summary}>
                        Super Similar is a passion project Sebastian Brear, Cynthia Mojika, and myself. The idea was to build a website that could help anyone find something to watche based on things they know they already enjoy.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.buttonContainer}>
                        <Button size="small" className={classes.button} href="https://github.com/ssbrear/group-project" target="_blank">
                            Github Repository
                        </Button>
                        <Button size="small" className={classes.button} href="https://ssbrear.github.io/group-project/" target="_blank">
                            Deployed Version
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                            component="img" 
                            alt="Weather Widget"
                            image={project4}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" className={classes.heading}>
                        Weather Widget
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.summary}>
                        This was a quick attempt at using an open api to get information and display it. Not only does the data get fetched from openweathermap, it also stores searches to local storage.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.buttonContainer}>
                        <Button size="small" className={classes.button} href="https://github.com/jbaxter91/weather-forcast" target="_blank">
                            Github Repository
                        </Button>
                        <Button size="small" className={classes.button} href="https://jbaxter91.github.io/weather-forcast/" target="_blank">
                            Deployed Version
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                            component="img" 
                            alt="JS Code Quiz" 
                            image={project1}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" className={classes.heading}>
                        JS Code Quiz
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.summary}>
                        I wanted to test my skills in js by creating a timed quiz. This project was a lot of fun and really solidified my knowlege of using timers in javascript
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.buttonContainer}>
                        <Button size="small" className={classes.button} href="https://github.com/ssbrear/group-project" target="_blank">
                            Github Repository
                        </Button>
                        <Button size="small" className={classes.button} href="https://ssbrear.github.io/group-project/" target="_blank">
                            Deployed Version
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            </Grid>
        </Container>
    </Box>
    );
}

export default Portfolio;