import React from "react";
import { Box, Grid, Container } from "@material-ui/core";
import Navbar from "./Navbar";
import Toolbox from "./Tools/ToolBox";

const Tools = () => {
  return (
    <Box component="div">
      <Navbar />
      <Container fixed style={{ marginTop: "2rem" }}>
        <Grid spacing={4} container justify="center">
        <Toolbox>Hello</Toolbox>
        </Grid>
      </Container>
    </Box>
  );
};

export default Tools;
