import { Box, Grid, Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import './style.scss'; // Ensure to import your CSS file for styles
import { ThemeContext } from '../Layouts/GeneralLayout';

function Projects() {
  const [animate, setAnimate] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // Delay to ensure the animation plays
  }, []);

  // Project Data
  const projects = [
    {
      title: "Just Buy",
      description: "Just Buy is a modern e-commerce platform designed for instant grocery and product delivery, similar to Blinkit and Zepto. I contributed to building a seamless and responsive frontend along with robust backend support to ensure fast, reliable service and smooth cart and order management.",
      keyContributions: [
        { title: "Frontend Development", description: "Built dynamic React components with MUI to create a fast, responsive, and modern user interface." },
        { title: "Cart & Checkout System", description: "Implemented a fully functional cart and checkout flow with Redux Toolkit and custom APIs." },
        { title: "Location & Address Modal", description: "Designed an interactive address selection modal with live location detection and map preview for improved UX." }
      ],
      projectLink: "https://just-buy-client.vercel.app"
    },
    {
      title: "ProntoCaseCash",
      description: "I contributed to ProntoCaseCash, an innovative insurance platform that simplifies the application process for clients. My role involved enhancing the user experience and optimizing the application flow, making it easier for users to secure the coverage they need.",
      keyContributions: [
        { title: "User Experience Design", description: "Refined the application interface to ensure a seamless and engaging user experience." },
        { title: "Process Optimization", description: "Streamlined the workflow for insurance applications, reducing processing time and improving client satisfaction." },
        { title: "Feedback Integration", description: "Incorporated user feedback to enhance features and address client needs effectively." }
      ],
      projectLink: "https://www.prontocasecash.com"  // Adding a project link here
    },
    {
      title: "WeAreAppointments",
      description: "I contributed to the development of this advanced appointment management system using React.js and Laravel. I focused on enhancing functionalities that enable users to schedule and manage appointments with ease.",
      keyContributions: [
        { title: "Feature Development", description: "Worked on implementing key features that enhance user interaction and appointment scheduling." },
        { title: "Performance Improvements", description: "Optimized application performance to ensure fast and responsive user experiences." },
        { title: "Collaboration and Testing", description: "Collaborated with team members to test new functionalities and ensure high-quality standards." }
      ],
      projectLink: "https://www.weareappointments.com" // Adding a project link here
    },
    {
      title: "TypoMaster",
      description: "TypoMaster is the ultimate typing speed game designed to enhance your typing skills while having fun! Challenge yourself across multiple difficulty modes—Easy, Normal, and Hard—and track your progress as you race against the clock.",
      keyContributions: [
        { title: "Multiple Difficulty Levels", description: "Offers Easy, Normal, and Hard modes to test typing skills at various levels." },
        { title: "Real-Time Speed Tracking", description: "Watch your speed in words per minute (WPM) update in real-time." },
        { title: "Comprehensive Results", description: "Track progress with detailed results including speed, accuracy, and more." }
      ],
      projectLink: null // Adding a project link here
    },
    {
      title: "Playing Card Game",
      description: "A fun and interactive playing card game built with React.js. Players can engage in various card games, enjoy the gameplay, and improve their strategic thinking skills.",
      keyContributions: [
        { title: "Multiple Card Games", description: "Choose from various card games, including Poker and Solitaire." },
        { title: "Multiplayer Mode", description: "Play with friends or other players online, adding a social aspect to the gaming experience." },
        { title: "Statistics Tracking", description: "Track wins, losses, and overall performance to improve your game." }
      ],
      projectLink: null // Adding a project link here
    }
  ];

  return (
  <Box sx={{ py: 6, px: { xs: 2, sm: 4 },minHeight: '100vh' }}>
    <Grid container spacing={4}>
      <Grid item xs={12} textAlign="center">
          <Typography  mb={6} color={theme.headingColor} variant="h4">
              ⎯ Projects
          </Typography>
      </Grid>

      {projects.map((project, index) => (
          <Grid key={index} item xs={12} sm={6} lg={4} sx={{ display: 'flex' }}>
            <Box
            className={animate ? 'animate-card' : ''}
            sx={{
              borderRadius: 3,
              p: 0.5,
              background: `linear-gradient(135deg, ${theme.cardGradientStart}, ${theme.cardGradientEnd})`,
              transition: 'transform 0.4s ease',
              flexGrow: 1,
              display: 'flex',
              '&:hover': {
                transform: 'translateY(-8px)',
              },
            }}
          >

              <Box
                sx={{
                  borderRadius: 2.5,
                  backgroundColor: theme.projectBackgroundColor,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'background-color 0.3s ease',
                  p: 3,
                  flexGrow: 1,
                  minHeight: '480px', // <== consistent height
                }}
              >
              <Typography variant="h6" sx={{ color: theme.subHeadingColor, fontWeight: 700 }}>
                {`${index + 1}. ${project.title}`}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: theme.paragraphColor, mt: 1, minHeight: '70px' }}
              >
                {project.description}
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    color: theme.subHeadingColor,
                    mb: 1,
                    borderBottom: `2px solid #308d46`,
                    display: 'inline-block',
                  }}
                >
                  Key Contributions
                </Typography>

                <List dense>
                  {project.keyContributions.map((item, i) => (
                    <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start' }}>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, color: theme.textColor }}>
                            📌 {item.title}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2" sx={{ color: theme.textColor }}>
                            {item.description}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>

              {project.projectLink && (
                <Box sx={{ mt: 2 }}>
                  <Link
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{
                      display: 'inline-block',
                      mt: 2,
                      px: 3,
                      py: 1.2,
                      backgroundColor: '#d3f4df', // light pastel green
                      color: '#215732',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      borderRadius: '30px',
                      textAlign: 'center',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.25s ease-in-out',
                      '&:hover': {
                        backgroundColor: '#b2e8c7',
                        color: '#174a2a',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    Visit Project
                  </Link>

                </Box>
              )}
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>

  );
}

export default Projects;
