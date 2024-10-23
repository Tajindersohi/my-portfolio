import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './style.scss'; // Ensure the image is properly referenced in the SCSS file
import { ThemeContext } from '../Layouts/GeneralLayout';
// import lightBgImage from '../../Components/Images/myPic.jpg'
import lightBgImage from '../../Components/Images/971.jpg'

function Home() {
    const { theme } = useContext(ThemeContext);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animation when the component mounts
        setTimeout(() => setAnimate(true), 100);
    }, []);
    
    const downloadFile = () => {
        window.location.href = "https://yoursite.com/src/assets/files/exampleDoc.pdf"
      }
    

    return (
        <Box alignItems="center" className="home-container">
            <Box height={600} className="m-4"
                style={{marginLeft:6, color:theme.textColor ,opacity: animate ? 1 : 0, transition: 'opacity 1s ease-in-out' }} // Apply opacity transition
            >
                <Grid container pt={2}>
                    <Grid mt={10} item xs={12} md={6}>
                        <Box className={`page-heading ${animate ? 'animate' : ''}`}>
                            <h4 style={{color:theme.type == "light" ? "#748383" : "#fff", fontSize:"20px",fontWeight:"700"}}>⎯⎯  HELLO</h4>
                            <h1 style={{color:theme.type == "light" ? "#405151" : "#fff"}}>I❜M <span style={{color:theme.headingColor}}>TAJINDER</span> SOHI</h1>
                            <div className="my-5">
                                <p style={{color:theme.textColor}}>A Frontend focused Web Developer building Frontend of Websites and Web</p>
                                <p style={{color:theme.textColor}}>Applications that lead to the success of the overall project</p>
                            </div>
                            <Box my={5} textAlign={'center'}>
                                <Grid container spacing={1} justifyContent="center">
                                    <Grid item xs={12} sm={6}>
                                    
                                    <a style={{ width: '70%' }} href="/Pdf/TajinderResume.pdf"  className="project-button text-center" download>Download CV
                                    </a>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Link to="/projects" className="project-button text-center" style={{ width: '70%' }}>
                                            Click Here for Projects
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>

                        </Box>
                    </Grid>
                    {/* <Grid mt={12} item xs={12} md={5.5} className='image-container'>
                    <Box
                            alt=""
                            className="project-image"
                            sx={{
                                width: '100%',
                                height: { xs: '300px', md: '400px' }, // Responsive height
                                backgroundImage: theme.type === "light" ? `url(${lightBgImage})` : "",
                                backgroundSize: 'cover', // Cover for a more dynamic look
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                borderRadius: '8px',
                                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
                            }}
                        />
                    </Grid> */}
                </Grid>
            </Box>
        </Box>
    );
}

export default Home;
