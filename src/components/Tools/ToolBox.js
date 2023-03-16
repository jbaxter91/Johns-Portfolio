import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActionArea,
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

const ToolBox = (props) => {
    const classes = useStyles();
    return(
        <>
            <Grid item xs={12} sm={8} md={4}>
            <Card className={classes.cardContainer}>
                {this.props.children}
            </Card>
          </Grid>
        </>
    );
}

export default ToolBox;