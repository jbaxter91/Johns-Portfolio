import React from "react";
import { Box, Grid, Container } from "@material-ui/core";
import Navbar from "./Navbar";
import Projects from "./Projects";

//Project Images
import project1 from "../images/home-screen.jpg";
import project2 from "../images/little-fish-go.jpg";
import project3 from "../images/super-similar.jpg";
import project4 from "../images/weather-dashboard.jpg";
import project6 from "../images/supportx-2.jpg";
import project7 from "../images/magic-sms.jpg";
import project8 from "../images/a-zdarts.jpg";

const Tools = () => {
  return (
    <Box component="div">
      <Navbar />
      <Container fixed style={{ marginTop: "2rem" }}>
        <Grid spacing={4} container justify="center">
        
        </Grid>
      </Container>
    </Box>
  );
};

export default Tools;
