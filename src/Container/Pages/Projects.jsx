import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
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
    images: [lightBgImage, secondImage] // Use an array for multiple images
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
    // Trigger animation when the component mounts
    setTimeout(() => setAnimate(true), 100); // Delay to ensure the animation plays
  }, []);

  return (
    <Box>
      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} textAlign="center">
          <Box 
            style={{ opacity: animate ? 1 : 0, transition: 'opacity 1s ease-in-out' }} 
          >
          <Typography sx={{ fontWeight: 800 }} mb={6} color={theme.headingColor} variant="h4" component="h4" gutterBottom>
            ⎯ Projects
          </Typography>
          </Box>
        </Grid>

        {projectData.map((project, index) => (
          <Grid item xs={12} key={project.id}>
            <Grid container spacing={2} alignItems="center">
              {index % 2 === 0 ? (
                <>
                  <Grid item xs={12} sm={6} textAlign="center">
                    <div className="image-container">
                      <img className="project-image" src={project.images[0]} alt={project.title} />
                      {/* <img className="project-image stacked" src={project.images[1]} alt={project.title} /> */}
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Card className="project-card">
                      <CardContent>
                        <Typography variant="h5">{project.title}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {/* {project.description} */}
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit fugiat quidem incidunt et dolor iusto temporibus fugit, exercitationem commodi, saepe, laborum rerum. Culpa minus, dolor quas aspernatur odit esse repellendus. Deleniti pariatur expedita architecto recusandae, minus aspernatur perspiciatis iure numquam soluta esse distinctio corporis voluptatum sed dignissimos ad at molestiae quis culpa iusto ea! Molestias perspiciatis quibusdam illo ipsa odit, dolor fugiat debitis distinctio soluta autem possimus deserunt mollitia voluptatem ratione dolores at alias atque quam laborum iusto blanditiis? Quod dolores culpa earum, at nisi, explicabo numquam asperiores quasi, veniam rem commodi praesentium. Consequuntur ab quas nam quia quo deleniti.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={12} sm={6}>
                    <Card className="project-card">
                      <CardContent>
                        <Typography variant="h5">{project.title}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {/* {project.description} */}
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit fugiat quidem incidunt et dolor iusto temporibus fugit, exercitationem commodi, saepe, laborum rerum. Culpa minus, dolor quas aspernatur odit esse repellendus. Deleniti pariatur expedita architecto recusandae, minus aspernatur perspiciatis iure numquam soluta esse distinctio corporis voluptatum sed dignissimos ad at molestiae quis culpa iusto ea! Molestias perspiciatis quibusdam illo ipsa odit, dolor fugiat debitis distinctio soluta autem possimus deserunt mollitia voluptatem ratione dolores at alias atque quam laborum iusto blanditiis? Quod dolores culpa earum, at nisi, explicabo numquam asperiores quasi, veniam rem commodi praesentium. Consequuntur ab quas nam quia quo deleniti.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} textAlign="center">
                    <div className="image-container">
                      <img className="project-image" src={project.images[0]} alt={project.title} />
                      {/* <img className="project-image stacked" src={project.images[1]} alt={project.title} /> */}
                    </div>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
