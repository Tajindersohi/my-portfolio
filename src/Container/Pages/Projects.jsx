import { Box, Grid, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import './style.scss'; // Ensure to import your CSS file for styles
import lightBgImage from '../../Components/Images/971.jpg';
import secondImage from '../../Components/Images/myPic1.jpg'; // Replace with your second image
import { ThemeContext } from '../Layouts/GeneralLayout';

const projectData = [
  {
    id: 1,
    title: "Project One",
    description: "Description for Project One.",
    images: [lightBgImage, secondImage]
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description for Project Two.",
    images: [lightBgImage, secondImage]
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description for Project Three.",
    images: [lightBgImage, secondImage]
  }
];

function Projects() {
  const [animate, setAnimate] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // Delay to ensure the animation plays
  }, []);

  return (
    <Box sx={{ padding: 4, backgroundColor: theme.background, minHeight: '100vh' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} textAlign="center">
          <Typography sx={{ fontWeight: 800, color: theme.headingColor }} variant="h4" gutterBottom>
            ⎯ Projects
          </Typography>
        </Grid>

        <Grid item xs={12} className={`page-heading ${animate ? 'animate' : ''}`} color={theme.textColor}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
                <Typography variant="h5" component="h2">1. TypoMaster</Typography>

                <Typography variant="h6" component="h3" mt={2}>Description:</Typography>
                <Typography variant="body1" paragraph>
                  Welcome to TypoMaster, the ultimate typing speed game designed to enhance your typing skills while having fun! Challenge yourself across multiple difficulty modes—Easy, Normal, and Hard—and track your progress as you race against the clock.
                </Typography>

                <Typography variant="h6" component="h3" mt={2}>Features:</Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary={<strong>Multiple Difficulty Levels:</strong>} 
                      secondary={
                        <List>
                          <ListItem><ListItemText primary={<strong>Easy</strong>} secondary="Perfect for beginners, featuring simple words and short phrases to help you build confidence." /></ListItem>
                          <ListItem><ListItemText primary={<strong>Normal</strong>} secondary="A balanced challenge that introduces more complex vocabulary and longer sentences to test your skills." /></ListItem>
                          <ListItem><ListItemText primary={<strong>Hard</strong>} secondary="For seasoned typists, this mode features intricate sentences and advanced vocabulary that will push your limits!" /></ListItem>
                        </List>
                      } 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary={<strong>Real-Time Speed Tracking:</strong>} 
                      secondary="As you type, watch your speed in words per minute (WPM) update in real time. Get instant feedback on your performance!" 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary={<strong>Comprehensive Results:</strong>} 
                      secondary={
                        <List>
                          <ListItem><ListItemText primary="Typing speed (WPM)" /></ListItem>
                          <ListItem><ListItemText primary="Accuracy percentage" /></ListItem>
                          <ListItem><ListItemText primary="Number of errors made" /></ListItem>
                          <ListItem><ListItemText primary="Comparison with previous scores to track your improvement over time" /></ListItem>
                        </List>
                      } 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary={<strong>Engaging Challenges:</strong>} 
                      secondary="Participate in timed challenges and set personal records. Compete against friends or climb the global leaderboard!" 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary={<strong>User-Friendly Interface:</strong>} 
                      secondary="Enjoy a clean and intuitive design that makes typing easy and enjoyable. With minimal distractions, you can focus solely on improving your skills." 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary={<strong>Practice Mode:</strong>} 
                      secondary="Not ready for a challenge? Use the practice mode to hone your skills at your own pace, with no time limits." 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary={<strong>Fun Themes and Backgrounds:</strong>} 
                      secondary="Customize your gaming experience with various themes and backgrounds to make each session unique." 
                    />
                  </ListItem>
                </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Projects;
