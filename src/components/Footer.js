import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 300
        },
        "& .MuiSvgIcon-root": {
            fill: "#039be5",
            fontSize: "1.8rem",
        }
    }
})

const Footer = () => {

    const classes = useStyles();

    return(
        <BottomNavigation width="auto" style={{background: "#000000"}}>
            <BottomNavigationAction
                href="https://github.com/jbaxter91" target="_blank"
                className={classes.root}
                style={{padding: 0}} 
                icon={<GitHubIcon/>}
            />
            <BottomNavigationAction
                href="https://www.linkedin.com/in/john-baxter91/" target="_blank"
                className={classes.root}
                style={{padding: 0}}
                icon={<LinkedInIcon/>}
            />
            
        </BottomNavigation>
    );
}

export default Footer;