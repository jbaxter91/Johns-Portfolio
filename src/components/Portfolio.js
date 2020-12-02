import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import {
    Box,
    Grid, 
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


const useStyles = makeStyles(theme => ({
    cardContainer: {
        maxWidth: 330,
        margin: "3rem auto",
        boxShadow: "0 19px 38px rgba(0,0,0,0.40), 0 15px 12px rgba(0,0,0,0.30)",
    },
    summary: {
        height: "410px",
        color: "black",
        margin: "2px"
    },
    heading: {
        color: "#0288d1", 
        fontWeight: "bold"
    },
    button: {
        background:"#039be5", 
        color: "white"
    }
}))

const Portfolio = () => {

    const classes = useStyles();

    return(
        <Box component="div">
            <Navbar />
            <Grid container justify="center">
            {/* Project 1 */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                            component="img" 
                            alt="Project 1" 
                            height="225" 
                            // image={}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" className={classes.heading}>
                            Weedmates
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.summary}>
                            A friend and I were sitting around talking about weed and realized that there was nothing that openly tried to connect people so they can smoke together. So we worked together and built one! Think of it like the tinder of weedsmoking. Both users need to like each other in order to be a match and talk to eachother
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" className={classes.button} href="https://github.com/jbaxter91/weedmates" target="_blank">
                            Github Repository
                        </Button>
                        <Button size="small" className={classes.button} href="https://weedmates.herokuapp.com/" target="_blank">
                            Deployed Version
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            {/* Project 2 */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                            component="img" 
                            alt="Project 2" 
                            height="225" 
                            // image={project2}
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
            {/* Project 3 */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                            component="img" 
                            alt="Project 3" 
                            height="225" 
                            // image={project3}
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
                    <CardActions>
                        <Button size="small" className={classes.button} href="https://github.com/ssbrear/group-project" target="_blank">
                            Github Repository
                        </Button>
                        <Button size="small" className={classes.button} href="https://ssbrear.github.io/group-project/" target="_blank">
                            Deployed Version
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            {/* Project 4 */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                            component="img" 
                            alt="Project 4" 
                            height="225" 
                            // image={project4}
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
                    <CardActions>
                        <Button size="small" className={classes.button} href="https://github.com/jbaxter91/weather-forcast" target="_blank">
                            Github Repository
                        </Button>
                        <Button size="small" className={classes.button} href="https://jbaxter91.github.io/weather-forcast/" target="_blank">
                            Deployed Version
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            {/* Project 5 */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia 
                            component="img" 
                            alt="Project 3" 
                            height="225" 
                            // image={project3}
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
                    <CardActions>
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
    </Box>
    );
}

export default Portfolio;