import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import NavBar from '..'

function About() {
  return (
        <Box>
        <Grid container mt={4}>
            <Grid xs={6}>
                <Box>
                    <h1>About</h1>
                </Box>
            </Grid>
      </Grid>
        </Box>
  )
}

export default About
