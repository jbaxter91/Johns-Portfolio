import React from "react";
import { Typography, Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//import avatar from '';

//Styling
const useStyles = makeStyles((theme) => ({
  title: {
    color: "#0277bd",
    fontSize: "3rem",
    fontWeight: "bold"
  },
  subtitle: {
    color: "#039be5",
    marginBottom: "3rem",
  },
  centerContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    //width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid
          item
          xs={3}
          alignItems="center"
          style={{ textAlign: "-webkit-center" }}
          className={classes.centerContainer}
        >
          <Avatar
            className={classes.large}
            alt="John Baxter"
            src="/images/me.png"
          />
          <Typography
            variant="h5"
            style={{ color: "#ef6817" }}
            className={classes.title}
          >
            John Baxter
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
