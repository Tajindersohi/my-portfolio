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
    <Box sx={{ padding: 4, backgroundColor: theme.background, minHeight: '100vh' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} textAlign="center">
          <Typography sx={{ fontWeight: 800, color: theme.headingColor }} variant="h4" gutterBottom>
            ⎯ Projects
          </Typography>
        </Grid>

        {projects.map((project, index) => (
          <Grid key={index} item xs={12} className={`page-heading ${animate ? 'animate' : ''}`}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column', // The default column layout for the text content
                padding: 2,
                borderRadius: '10px',
                backgroundColor: theme.projectBackgroundColor,
                cursor: 'pointer',
                boxShadow: `0px 0px 0px 8px rgba(27, 94, 32, 0.16)`,
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                  boxShadow: `0px 0px 0px 10px rgba(27, 94, 32, 0.16)`,
                }
              }}
            >
              <Typography variant="h6" component="h2" color={theme.subHeadingColor} sx={{ marginBottom: 1 }}>
                {`${index + 1}. ${project.title}`}
              </Typography>
              <Typography variant="body2" color={theme.paragraphColor} paragraph>
                {project.description}
              </Typography>

              {/* Row Layout for Key Contributions and Link */}
              <Box sx={{ display: {xs:'block' ,md:'flex'}, alignItems: 'center', marginTop: 2 , fontSize:'10px'}}>
                {/* Key Contributions Heading */}
                <Typography variant="h6" component="h3" color={theme.subHeadingColor} sx={{ marginRight: 2 }}>
                  Key Contributions:
                </Typography>
                {project.projectLink &&
                  <Typography variant="h6" component="h3" color={theme.subHeadingColor}>
                    <Link href={project.projectLink} target="_blank" sx={{ color: theme.linkColor, textDecoration: 'none' }}>
                      Visit Project
                    </Link>
                  </Typography>
                }
              </Box>

              {/* Key Contributions List */}
              <List sx={{ marginTop: 2 }}>
                {project.keyContributions.map((contribution, idx) => (
                  <ListItem sx={{ color: theme.textColor }} key={idx}>
                    <ListItemText
                      primary={<strong>{contribution.title}</strong>}
                      secondary={<span style={{ color: theme.textColor }}>{contribution.description}</span>}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
