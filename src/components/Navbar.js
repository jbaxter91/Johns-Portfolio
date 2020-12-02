import React, { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";

import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";

//image
// import avatar from "";

//Style
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 300,
    background: "#21201f",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "white",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => {
    return (
      <Box
        className={classes.menuSliderContainer}
        component="div"
        onClick={toggleSlider(slider, false)}
      >
        <Divider />
        <List>
          {menuItems.map((items, key) => (
            <ListItem button key={key} component={Link} to={items.listPath}>
              <ListItemIcon
                className={classes.listItem}
                style={{ color: "#919191" }}
              >
                {items.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                primary={items.listText}
                style={{ color: "#919191" }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#21201f" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <MenuIcon style={{ color: "#ef6817" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "#919191" }}>
              Welcome
            </Typography>
            <MobileRightMenuSlider
              anchor="left"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
