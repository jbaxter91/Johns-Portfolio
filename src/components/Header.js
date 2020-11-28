import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//import avatar from '';

//Styling
const useStyles = makeStyles((theme) => ({
  title: {
    color: "#0277bd",
  },
  subtitle: {
    color: "#039be5",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    //width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={3} alignItems="center">
          <Typography
            variant="h5"
            className={classes.typedContainer}
            style={{ color: "#ef6817" }}
          >
            John Baxter
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
