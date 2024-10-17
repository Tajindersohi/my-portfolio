import React, { useEffect, useState } from 'react';
import { Box, Typography, LinearProgress, Grid } from '@mui/material';

const skills = [
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 70 },
  { name: 'Node.js', level: 60 },
  { name: 'CSS', level: 50 },
  { name: 'HTML', level: 40 },
];

const Skills = ({theme}) => {
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    const timers = skills.map((skill, index) => {
      let value = 0;

      const timer = setInterval(() => {
        if (value < skill.level) {
          value += 1; // Adjust the increment speed as needed
          setProgress((prev) => {
            const newProgress = [...prev];
            newProgress[index] = value;
            return newProgress;
          });
        } else {
          clearInterval(timer);
        }
      }, 20); // Adjust the interval timing for speed

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
                  <Typography variant="caption">{`${progress[index]}%`}</Typography>
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
