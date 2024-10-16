import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, Container, Grid, Paper, Card, CardContent, CardHeader, styled } from '@mui/material';
import { ThemeContext } from '../Layouts/GeneralLayout';

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.paper,
}));

const CardStyled = styled(Card)(({ theme }) => ({
  // marginBottom: theme.spacing(2),
  borderRadius:"10px",
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)', // Slightly enlarge the card on hover
    boxShadow: `0px 8px 20px rgba(0, 0, 0, 0.3)`, // More pronounced shadow on hover
    // backgroundColor: theme.hoverColor, // Optional: change background color on hover
    cursor:"pointer"
  },
}));

function About() {
  const [animate, setAnimate] = useState(false);
  const { theme } = useContext(ThemeContext);
console.log("theme",theme);
  useEffect(() => {
    // Trigger animation when the component mounts
    setTimeout(() => setAnimate(true), 100); // Delay to ensure the animation plays
  }, []);
  return (
    <Container 
    style={{ textAlign: "center", opacity: animate ? 1 : 0, transition: 'opacity 1s ease-in-out' }} // Apply opacity transition
    
    className="primary-color" maxWidth="md" sx={{ py: 4 }}>
      <Typography color={theme.headingColor} variant="h4" component="h4" gutterBottom>
      About Me
      </Typography>
      <Section color={theme.textColor}>
        <Typography variant="h6" paragraph>
          Hello! I'm Tajinder Sohi, a passionate software developer with a strong background in computer science.
        </Typography>
        <Typography variant="body1" paragraph>
          I specialize in creating efficient and scalable web applications. With a keen interest in technology and a drive to stay updated with the latest trends, I strive to deliver high-quality solutions that meet client needs and exceed expectations.
        </Typography>
        <Typography variant="body1" paragraph>
          My journey in the world of technology began with a Bachelor’s degree in Computer Science from Kurukshetra University, followed by a Master’s degree in Computer Applications from the same institution. This solid educational foundation has equipped me with a broad understanding of both theoretical and practical aspects of software development.
        </Typography>
        <Typography variant="body1" paragraph>
          I enjoy working on diverse projects, from building responsive web applications using modern frameworks to solving complex problems with innovative solutions. My goal is to continuously enhance my skills and contribute to meaningful projects that make a difference.
        </Typography>
      </Section>

      <Typography color={theme.headingColor} variant="h4" component="h4" gutterBottom>
        Education
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardStyled theme={theme}>
            <CardHeader 
            sx={{ backgroundColor: theme.backgroundColor, color:theme.textColor }}
            title="Master of Computer Applications (MCA)" />
            <CardContent
              sx={{ backgroundColor: theme.backgroundColor, color:theme.textColor }}
            >
              <Typography variant="body1"
              sx={{ backgroundColor: theme.backgroundColor, color:theme.textColor }}
              >
                Kurukshetra University, Kurukshetra
              </Typography>
            </CardContent>
          </CardStyled>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardStyled theme={theme}>
            <CardHeader 
            sx={{ backgroundColor: theme.backgroundColor, color:theme.textColor }}
            title="Bachelor of Science in Computer Science (BSc)" />
            <CardContent
            sx={{ backgroundColor: theme.backgroundColor, color:theme.textColor }}
            >
              <Typography variant="body1"
              sx={{ backgroundColor: theme.backgroundColor, color:theme.textColor }}
              >
                Kurukshetra University, Kurukshetra
              </Typography>
            </CardContent>
          </CardStyled>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
