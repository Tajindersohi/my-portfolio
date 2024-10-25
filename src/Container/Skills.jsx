import React, { useEffect, useState } from 'react';
import { Box, Typography, LinearProgress, Grid } from '@mui/material';

const skills = [
  { name: 'React', level: 95 },
  { name: 'JavaScript', level: 95 },
  { name: 'My SQL', level: 95 },
  { name: 'Express Js', level: 85 },
  { name: 'Mongo', level: 85 },
  { name: 'Laravel', level: 85 },
  { name: 'Git', level: 85 },
];

const Skills = ({theme}) => {
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    const timers = skills.map((skill, index) => {
      let value = 0;

      const timer = setInterval(() => {
        if (value < skill.level) {
          value += 1; 
          setProgress((prev) => {
            const newProgress = [...prev];
            newProgress[index] = value;
            return newProgress;
          });
        } else {
          clearInterval(timer);
        }
      }, 30); 

      return timer;
    });

    // Cleanup timers on component unmount
    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <Box sx={{ width: '100%', marginTop: 2 }}>
      <Grid container gap={2}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={5}>
              <Box key={skill.name} sx={{ marginBottom: 2, color:theme.textColor }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <Typography variant="body1">{skill.name}</Typography>
                  {/* <Typography variant="caption">{`${progress[index]}%`}</Typography> */}
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={progress[index]}
                  sx={{
                    height: "6px",
                    borderRadius: "5px",
                    backgroundColor: '#708ca7',
                    '& .MuiLinearProgress-bar': { backgroundColor: '#2a7e38' }
                  }}
                />
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Skills;
