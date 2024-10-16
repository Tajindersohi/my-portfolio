import React, { useContext, useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './style.scss'; // Ensure the image is properly referenced in the SCSS file
import { ThemeContext } from '../Layouts/GeneralLayout';
import lightBgImage from '../../Components/Images/myPic.jpg'

function Home() {
    const { theme } = useContext(ThemeContext);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animation when the component mounts
        setTimeout(() => setAnimate(true), 100);
    }, []);

    return (
        <Box alignItems="center" className="home-container">
            <Box height={600} className="pl-4"
                style={{ textAlign: "center", color:theme.textColor ,opacity: animate ? 1 : 0, transition: 'opacity 1s ease-in-out' }} // Apply opacity transition
            >
                <Grid container pt={2}>
                    <Grid mt={12} item xs={12} md={12}>
                        <Box style={{color:theme.textColor}} className={`page-heading ${animate ? 'animate' : ''}`}>
                            <h1>HEY, I'M TAJINDER SOHI</h1>
                            <div className="my-5">
                                <p>A Frontend focused Web Developer building Frontend of Websites and Web</p>
                                <p>Applications that lead to the success of the overall project</p>
                            </div>
                            <Box mt={5}>
                                <Link to="/projects" className="project-button">
                                    Click Here for Projects
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    {/* <Grid mt={12} item xs={12} md={6}>
                    <Box
                            alt=""
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
