import React, { createContext, useEffect, useState } from 'react';
import whiteBgImage from '../../Components/Images/dvn6.jpg'; // Ensure the correct path to your image
import { Outlet, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HeaderBar from './HeaderBar';
import Footer from './Footer';
import './style.css';

// Create the ThemeContext
export const ThemeContext = createContext();

function GeneralLayout() {
  const [theme, setTheme] = useState({
    type: "light",
    backgroundColor: "#fff",
    headingColor: "#1b5e20",
    subHeadingColor: "#1b5e20",
    textColor: "#333",
    // textColor: "#777676",
    activeColor:"#308d46",
    hoverColor:"#308d46"
  });

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Box
        className="main-body"
        style={{
          backgroundColor: theme.backgroundColor,
          backgroundImage: theme.type === "light" ? `url(${whiteBgImage})` : "", 
          backgroundSize: 'cover', // Ensures image covers the entire background
          backgroundPosition: 'center', // Centers the background image
          backgroundRepeat: 'no-repeat', // Prevents background from repeating
          minHeight: '100vh', // Ensures the background covers the full height
        }}
      >
        {/* Header with the same background */}
        <HeaderBar theme={theme} setTheme={setTheme} />

        <Grid container spacing={2}>
          <Grid item mt={5} xs={12}>
            <Box className="main-body" sx={{ pt: 5 }}>
              <Outlet /> {/* Child routes can access both theme and setTheme */}
            </Box>
          </Grid>

          {/* Footer with the same background */}
          <Grid item className="primary-color" color={theme.textColor} xs={12}>
            <Footer theme={theme} setTheme={setTheme}/>
          </Grid>
        </Grid>
      </Box>
    </ThemeContext.Provider>
  );
}

export default GeneralLayout;
