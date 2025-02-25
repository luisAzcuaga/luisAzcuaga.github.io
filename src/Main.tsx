import { type ReactElement } from 'react';
import luis from './assets/images/luis.JPG';
import './App.css';
import { Box, Container, Grid, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PetsIcon from '@mui/icons-material/Pets';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

const Main = (): ReactElement => {
  return (
    <Box sx={{ backgroundColor: 'var(--background)', minHeight: '100vh' }}>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={2} sx={{ margin: '1rem 0' }}>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h1">
              This is Luis Azcuaga
            </Typography>
            <Typography variant="body1">
            Hello! I'm a developer with experience in Ruby on Rails and other web technologies. I started my programming journey in 2018, and since then, I've worked on various personal and professional projects. I'm passionate about writing clean, scalable, and efficient code.
            </Typography>
            <Box>
              <IconButton
                href="https://github.com/luisAzcuaga"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="external link"
                size="large"
              >
                <GitHubIcon fontSize="large" sx={{ color: 'var(--primary)' }} />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/luis-azcuaga/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="external link"
                size="large"
              >
                <LinkedInIcon fontSize="large" sx={{ color: 'var(--primary)' }} />
              </IconButton>
              <IconButton
                href="https://sortfella.azkawa.dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="external link"
                size="large"
              >
                <PetsIcon fontSize="large" sx={{ color: 'var(--primary)' }} />
              </IconButton>
              <IconButton
                href="https://mind.azkawa.dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="external link"
                size="large"
              >
                <SelfImprovementIcon fontSize="large" sx={{ color: 'var(--primary)' }} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={luis} alt="logo" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Main;
