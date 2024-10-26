import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, Container, Grid, Paper, Card, styled } from '@mui/material';
import { ThemeContext } from '../Layouts/GeneralLayout';
import Skills from '../Skills';
import signature from '../../Components/Images/signature.png'

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const VerticalText = styled(Typography)(({ theme }) => ({
  writingMode: 'vertical-lr', // Vertical by default
  textOrientation: 'mixed',
  fontWeight: 600,
  color: "#308d46",
  transform: 'rotate(180deg)', // Rotate the text upside down for vertical display

  // Change to horizontal on small screens
  [theme.breakpoints.down('sm')]: {
    writingMode: 'horizontal-tb', // Horizontal text on small screens
    transform: 'none', // No rotation for horizontal text
  },
}));

function About() {
  const [animate, setAnimate] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <Box 
      style={{ textAlign: "center", opacity: animate ? 1 : 0, transition: 'opacity 1s ease-in-out' }} 
      className="primary-color"  sx={{ py: 4 }}>
<Grid item sx={{ mx: { xs: 2, md: 12 } }} xs={12} className={`page-heading ${animate ? 'animate' : ''}`}>
    <Typography  mb={6} color={theme.headingColor} variant="h4">
        ⎯ About Me
    </Typography>
    <Section color={theme.textColor}>
        <Typography variant="body1" paragraph>
            Hello! I'm Tajinder Sohi, a passionate software developer with a strong background in computer science. I hold a Master's degree in Computer Applications (MCA) and a Bachelor's degree in B.Sc. Computer Science. 
        </Typography>
        <Typography variant="body1" paragraph>
            With a solid foundation in programming and software development, I thrive on turning complex challenges into elegant solutions. My experience includes working on various projects that enhance my skills in coding, problem-solving, and collaboration.
        </Typography>
        <Typography variant="body1" paragraph>
            I am currently working as a software developer, where I continue to learn and grow in this dynamic field. I am excited about the potential of technology to shape the future and am always looking for opportunities to contribute and innovate.
        </Typography>
    </Section>
    <Box sx={{ textAlignLast: "end" }}>
        <img style={{ height: "90px" }} src={signature} />
    </Box>
</Grid>
{/* <Grid item sx={{ mx: { xs: 2, md: 12 } }} xs={12}>
    <Typography sx={{ fontWeight: 800 }} mb={6} color={theme.headingColor} variant="h4" component="h4" gutterBottom>
        ⎯ About Me
    </Typography>
    <Section color={theme.textColor}>
        <Typography variant="body1" paragraph>
            Hi there! I'm Tajinder Sohi, a dedicated software developer with a passion for crafting innovative solutions. With a Master’s degree in Computer Applications (MCA) and a Bachelor’s in B.Sc. Computer Science, I’ve built a solid foundation that fuels my love for technology.
        </Typography>
        <Typography variant="body1" paragraph>
            I thrive on tackling complex problems and turning them into user-friendly applications. My journey in software development has equipped me with a diverse skill set, allowing me to excel in collaborative projects and deliver impactful results. 
        </Typography>
        <Typography variant="body1" paragraph>
            Currently, I am immersed in the world of software development, where I continuously push my boundaries and stay updated with the latest trends. I believe in the power of technology to transform lives and am eager to contribute to projects that make a difference.
        </Typography>
        <Typography variant="body1" paragraph>
            When I’m not coding, you might find me exploring new tech trends, contributing to open-source projects, or enjoying a good book. Let’s connect and create something amazing together!
        </Typography>
    </Section>
    <Box sx={{ textAlignLast: "start" }}>
        <img style={{ height: "90px" }} src={signature} />
    </Box>
</Grid> */}


      <Grid container>
        <Grid item xs={12} md={2} mx={3} display="flex" alignItems="center" px={7} justifyContent="flex-end">
          <VerticalText mr={4} variant="h4" gutterBottom color={theme.headingColor + '!important'}>
            ⎯ My Skills
          </VerticalText>
        </Grid>
        <Grid item xs={12} md={8} mx={3}>
          <Skills theme={theme}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
