import React from 'react';
import Navbar from './Navbar.js';
import Header from './Header';
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/styles';

// ef6817 - Highlight
// 21201f - Nav Bar
// 919191 - Text
// 5f605d - Background 1
// 383838 - Background 2


const useStyles = makeStyles({
    mainContainer: {
        backgroundColor: "rgba(56, 56, 56, 1)",
        height: "99vh"
    },
    particlesCanvas: {
        position: "fixed",
        opacity: "0.5",
    }
});

const Home = () => {

    const classes = useStyles();

    return(
        <div>
            <Navbar />
            <Header />
            <Particles 
                canvasClassName={classes.particlesCanvas}
                params={{
                    particles: {
                        number: {
                            value: 15,
                            density: {
                                enable: true,
                                value_area: 500
                            }
                        },
                        
                        stroke: {
                            width: 10
                        },
                        "line_linked": {
                            width: 4,
                            "enable": true,
                            "distance": 300,
                            "opacity": 1
                        },
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: true
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
            />
        </div>
    );
}

export default Home;