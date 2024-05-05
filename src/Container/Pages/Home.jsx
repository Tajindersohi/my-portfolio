import { Box, Button, ButtonGroup, Container, Grid, Paper, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import Image1 from '../../Components/Images/pc.jpg'
import CallMadeIcon from '@mui/icons-material/CallMade';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Home() {
  return (
    <Box alignItems="center">
        <Box
        height={600}
        className='pl-4'
        >
            <Grid container pt={2}>
                <Grid mt={12} xs={6}>
                    <Box>
                        <h1>Hii!</h1>
                        <h1>I am Tajinder Sohi</h1>
                        <h3>"Unlocking the Power of React: Elevating Digital Experiences with Precision and Passion"</h3>
                        <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button className='home-button-hire'>Hire Me!</Button>
                        <Button variant='outlined' endIcon={<CallMadeIcon/>}>Projects</Button>
                        </ButtonGroup>
                    </Box>
                </Grid>
                <Grid xs={6} mt={5}>
                    <Box >
                        <img src={Image1} alt='img' height='544px' width='600px' style={{float:'right'}}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Box
        sx={{backgroundColor:'#100f0d'}}>
            <Grid container>
                <Grid item xs={6}>
                    <Box
                    my={4}
                    display="flex"
                    alignItems="center"
                    gap={4}
                    p={2}
                    >
                    <h3>Project Statistics 2022</h3>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ width: '100%' }}>
                    <Stack spacing={2}>
                        <Typography>Website Design</Typography>
                        <Typography>MobileApp Design</Typography>
                        <Typography>Brand Identity</Typography>
                    </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
  )
}

export default Home
