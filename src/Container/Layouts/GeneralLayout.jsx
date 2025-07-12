import React, { createContext, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Grid } from '@mui/material';

import whiteBgImage from '../../Components/Images/whiteBlueBg.jpg';
import blackBgImage from '../../Components/Images/blackBgImage.jpg';

import HeaderBar from './HeaderBar';
import Footer from './Footer';
import './style.css';

import { lightTheme, darkTheme } from '../Common/ThemeToggle';

// Create the ThemeContext
export const ThemeContext = createContext();

function GeneralLayout() {
  const [theme, setTheme] = useState(lightTheme);
  const location = useLocation();
  
  useEffect(() => {
    document.body.style.setProperty('--bg-color', theme.background);
    document.body.style.setProperty('--text-color', theme.textColor);
  }, [theme]);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('myTheme');
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
    } else {
      setTheme(lightTheme);
      localStorage.setItem('myTheme', JSON.stringify(lightTheme));
    }
    window.scrollTo(0, 0);
  }, [location]);

  const backgroundImage = theme.type === 'light' ? whiteBgImage : blackBgImage;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Box
        className="main-body"
        style={{
          backgroundColor: backgroundImage,
          backgroundImage: theme.type === "light" ? `url(${whiteBgImage})` : `url(${blackBgImage})`, 
          backgroundSize: 'cover', // Ensures image covers the entire background
          backgroundPosition: 'center', // Centers the background image
          backgroundRepeat: 'no-repeat', // Prevents background from repeating
          minHeight: '100vh', // Ensures the background covers the full height
        }}
      >
        {/* Header */}
        <HeaderBar theme={theme} setTheme={setTheme} />

        {/* Main Content */}
        <Grid container spacing={4}>
          <Grid item xs={12} mt={5}>
            <Box sx={{ px: { xs: 2, md: 7 }, mb: 12, pt: 5 }}>
              <Outlet />
            </Box>
          </Grid>

          {/* Footer */}
          <Grid item xs={12} sx={{ px: { xs: 2, md: 7 } }}>
            <Footer theme={theme} setTheme={setTheme} />
          </Grid>
        </Grid>
      </Box>
    </ThemeContext.Provider>
  );
}

export default GeneralLayout;
