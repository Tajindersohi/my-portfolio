import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import NavBar from '..'

function Projects() {
  return (
    <Box>
    <Grid container mt={4}>
        <Grid xs={6}>
            <Box>
                <h1>Projects</h1>
            </Box>
        </Grid>
    </Grid>
    </Box>
  )
}

export default Projects
