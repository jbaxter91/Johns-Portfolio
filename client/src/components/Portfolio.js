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

const Portfolio = () => {
  return (
    <Box component="div">
      <Navbar />
      <Container fixed style={{ marginTop: "2rem" }}>
        <Grid spacing={4} container justify="center">
        <Projects
            title="Magic SMS"
            image={project7}
            desc="SAAS app designed and developed by Sebastian and myself.  This project uses Twilio to send sms messages to target numbers.  
            We built a full REST API so the end user can integrate it into their projects.  There is also a dashboard where the user can message select numbers or a list.
            Each user is generated an API key, and account key.  Both of these must be passed to the server for any sms messages to be sent.  Each account has a per text rate and must add funds before any messages are sent.
            This product was used in an ecommerce website to send customers their order tracking info"
            deployed_href="https://www.a-zsms.com/"
          ></Projects>
          <Projects
            title="A-ZDarts.com"
            image={project8}
            desc="I worked as one of the developers at A-ZDarts.com.  My primary focus was on maintaining website stability and implimenting new features.  In this role I also picked up a lot about SEO and overall best practices"
            deployed_href="https://www.a-zdarts.com/"
          ></Projects>
          <Projects
            title="SupportX"
            image={project6}
            desc="SupportX is something we need in our ecom business so i built it.  We wanted an advanced ticketing system so the customers on our website would be able to get live support"
            github_href="https://github.com/ssbrear/supportx"
            deployed_href="https://jbaxter-supportx.herokuapp.com/"
          ></Projects>
          <Projects
            title="Lil Fish Go"
            image={project2}
            desc="A fun flappy birds clone where you control a fish just
          trying to survive in the ocean. This game was deployed to
          the google play store. It eventually had to be removed
          however because i ended up losing the source code. The
          important lesson here was always backup / use VCS"
          ></Projects>
          <Projects
            title="Super Similar"
            image={project3}
            desc="Super Similar is a passion project Sebastian Brear, Cynthia
          Mojika, and myself. The idea was to build a website that
          could help anyone find something to watche based on things
          they know they already enjoy."
            github_href="https://github.com/ssbrear/group-project"
            deployed_href="https://ssbrear.github.io/group-project/"
          ></Projects>
          <Projects
            title="Weather Widget"
            image={project4}
            desc="This was a quick attempt at using an open api to get
          information and display it. Not only does the data get
          fetched from openweathermap, it also stores searches to
          local storage."
            github_href="https://github.com/jbaxter91/weather-forcast"
            deployed_href="https://jbaxter91.github.io/weather-forcast/"
          ></Projects>
          <Projects
            title="JS Code Quiz"
            image={project1}
            desc="I wanted to test my skills in js by creating a timed quiz.
          This project was a lot of fun and really solidified my
          knowlege of using timers in javascript"
            github_href="https://github.com/ssbrear/group-project"
            deployed_href="https://ssbrear.github.io/group-project/"
          ></Projects>
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
