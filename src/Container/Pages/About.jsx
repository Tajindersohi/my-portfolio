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
          <Grid item sx={{ mx: { xs: 2, md: 12 } }} xs={12}>
              <Typography sx={{ fontWeight: 800 }} mb={6} color={theme.headingColor} variant="h4" component="h4" gutterBottom>
                ⎯ About Me
              </Typography>
              <Section color={theme.textColor}>
                <Typography variant="body1" paragraph>
                  Hello! I'm Tajinder Sohi, a passionate software developer with a strong background in computer science.
                </Typography>
                <Typography variant="body1" paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa numquam fuga, sequi cumque quisquam cupiditate accusamus nam, dolorum magni, qui consectetur dolor! Et impedit, illum repudiandae fugiat cumque veniam adipisci!
                </Typography>
              </Section>
              <Box sx={{textAlignLast:"start"}}>
                  <img style={{height:"90px"}}  src={signature}/>
              </Box>
        </Grid>
      <Grid container>
        <Grid item xs={12} md={2} mx={3} display="flex" alignItems="center" px={7} justifyContent="flex-end">
          <VerticalText mr={4} variant="h4" gutterBottom>
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
