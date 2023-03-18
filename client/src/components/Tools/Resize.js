import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        margin: "auto",
        marginBottom: "1rem",
        boxShadow: "0 19px 38px rgba(0,0,0,0.40), 0 15px 12px rgba(0,0,0,0.30)",
      },
    summary: {
        color: "black",
        margin: "2px",
      },
      heading: {
        color: "#ef6817",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "black",
        marginBottom: "1rem",
      },
      button: {
        background: "#ef6817",
        color: "white",
      },
      buttonContainer: {
        placeContent: "center",
      },
}));

const Resize = (props) => {
    const classes = useStyles();
    return(
        <>
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia component="img" alt={props.alt} image={props.image} />
                <CardContent
                  style={{ color: "#919191" }}
                  className={classes.cardContent}
                >
                  <Typography variant="h5" className={classes.heading}>
                    {props.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.summary}
                  >
                    {props.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
              
              <CardActions className={classes.buttonContainer}>
              {props.github_href ? 
              <Button
                  size="small"
                  className={classes.button}
                  href={props.github_href}
                  target="_blank"
                >
                  Github Repository
                </Button> : null }
                
                {props.deployed_href ?
                <Button
                size="small"
                className={classes.button}
                href={props.deployed_href}
                target="_blank">
                  Deployed Version
                </Button> : null }
              </CardActions>
            </Card>
          </Grid>
        </>
    );
}

export default Resize;