import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './style.css'

function Footer({theme}) {
  return (
    <Box 
      component="footer"
      className='main-footer' 
      sx={{
        py: 3,
        mx:2
      }}
    >
      <Grid container spacing={1} justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={4} ml={1}>
          <Box display="flex" justifyContent={{ xs: 'center', sm: 'flex-start' }}>
            <IconButton href="https://www.facebook.com" target="_blank" aria-label="Facebook" sx={{ color: theme.type == "dark" ? '#fff' : '#000'}}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://www.twitter.com" target="_blank" aria-label="Twitter" sx={{ color: theme.type == "dark" ? '#fff' : '#000'}}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com" target="_blank" aria-label="Instagram" sx={{ color: theme.type == "dark" ? '#fff' : '#000'}}>
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" sx={{ color: theme.type == "dark" ? '#fff' : '#000'}}>
              <LinkedInIcon />
            </IconButton>
            <IconButton href="https://www.github.com" target="_blank" aria-label="GitHub" sx={{ color: theme.type == "dark" ? '#fff' : '#000'}}>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Box textAlign="center">
            <Typography variant="body2" sx={{pb:1}}>
              &copy; {new Date().getFullYear()}  All rights reserved.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} mr={1}>
          <Box textAlign={{ xs: 'center', sm: 'right' }}>
            <Typography variant="body2">
               Shahabad (M.), Haryana, India
            </Typography>
            <Typography variant="body2">
              Email: tajindersohi1@gmail.com | Phone: +91-9518055232
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
