import { type ReactElement } from 'react';
import luis from './assets/images/luis.JPG';
import './App.css';
import rubyOnRails from './assets/images/ruby_on_rails.png'
import react from './assets/images/react.png'
import { Box, Container, Grid, Typography, Divider, Link, List, ListItem, ListItemText } from '@mui/material';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NavBar from './NavBar';
import Footer from './Footer';

const Main = (): ReactElement => {
  return (
    <>
      <NavBar/>
      <Box sx={{ backgroundColor: 'var(--background)', paddingBottom: '5rem' }}>
        <Container sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Grid container spacing={0} sx={{ margin: '1rem 0' }}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', pr: { xs: 0, md: 2 } }}>
              <Typography variant="h1">
                This is Luis Azcuaga
              </Typography>
              <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Typography>
              <Box sx={{ my: 2 }}>
                <IconButton
                  href="https://github.com/luisAzcuaga"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="external link"
                  size="large"
                >
                  <GitHubIcon fontSize="large"/>
                </IconButton>
                <IconButton
                  href="https://www.linkedin.com/in/luis-azcuaga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="external link"
                  size="large"
                >
                  <LinkedInIcon fontSize="large"/>
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} p={0} sx={{ pl: { xs: 0, md: 2 } }}>
              <Box sx={{ borderRadius: '.5rem', overflow: 'hidden' }}>
                <img src={luis} alt="logo" width="100%" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: 'var(--light)' }}>
        <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Grid container spacing={0} sx={{ margin: '-4rem 0', backgroundColor: 'var(--grey)', padding: '2rem' }}>
            <Grid item xs={12} md={7}>
              <Typography variant="h2" sx={{ color: 'var(--light)' }}>
                My Stack
              </Typography>
              <Typography variant="body1" sx={{ color: 'var(--light)' }}>
                Proficient with Ruby, Ruby on Rails, RSpec, Minitest, Git, Javascript, Stimulus, PostgreSQL, React and Tailwind
              </Typography>
              <Typography variant="body1" sx={{ color: 'var(--light)' }}>
                Familiar with MaterialUI, GraphQL, MongoDB and Typescript
              </Typography>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', mt: { xs: 4, md: 0 } }}>
              <img src={rubyOnRails} alt="logo" height="50" style={{ objectFit: 'cover' }}/>
              <img src={react} alt="logo" height="50" style={{ objectFit: 'cover' }}/>
            </Grid>
          </Grid>

          <Grid container spacing={0} sx={{ padding: '8rem 0' }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: '2rem' }}>
                <Typography variant="h2">
                  Me As A Professional
                </Typography>
                <Typography variant="body1">
                  When I was a child, I always wanted to be a veterinarian—until the day I met a computer when I was about 8 years old. I would spend hours each day figuring things out, creating 'art' in Paint, and playing video games with my NES/SNES emulator. In middle school, I made a decision: I would become a Computer Systems Engineer.
                </Typography>
                <Typography variant="body1">
                  Now I consider myself a pasionated web developer who likes to actively participate with multidiciplinary projects and contribute to the IT community
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ backgroundColor: 'var(--secondary)' }}>
              <Box sx={{ padding: '2rem' }}>
                <Box>
                  <Typography variant="h4">
                    My Values
                  </Typography>
                  <List style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <ListItem sx={{ display: 'list-item', py: 0 }}>
                      <ListItemText primary="Self-motivated learner" />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', py: 0 }}>
                      <ListItemText primary="Passionate about technology" />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', py: 0 }}>
                      <ListItemText primary="Highly responsible and self-managed" />
                    </ListItem>
                  </List>
                  <Typography variant="h4">
                    Collaborator
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Always open to collaborate with my friend's side-projects, as long as my agenda allows me hehe
                  </Typography>
                  <Typography variant="body1">
                    Recent collaborations includes:
                  </Typography>
                  <List style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <ListItem sx={{ display: 'list-item', py: 0 }}>
                      <ListItemText primary="japcolControl; a WIP Rails application that will help JAPCOL to collect data and generate reports for nonprofit organizations in Colima" />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', py: 0 }}>
                      <ListItemText primary={
                        <Typography variant="body1">
                          <Link href="https://www.webdevtalks.mx" underline="hover" color="primary" target="_blank">webdevtalks</Link>; the official Web Dev Talks website. Initially built using a now deprecated version of React with custom CSS. I was responsible for migrating the SPA to the latest React version, incorporating TypeScript and Material-UI
                        </Typography>
                      }/>
                    </ListItem>
                  </List>
                </Box>
                <Divider/>
                <Box sx={{ padding: '1rem 0' }}>
                  <Typography variant="h4">
                    Community
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Actively involved in the IT community as a speaker, mentor, and event organizer. I am part of the <Link href="https://www.webdevtalks.mx/" underline="hover" color="primary" target="_blank">Web Dev Talks</Link>(WDT) committee, responsible for organizing events, managing social media, and collaborating with speakers. Recent participation includes the <Link href="https://www.facebook.com/story.php?story_fbid=pfbid01C8dLihbxDJ2pN3nQzQoWSchBx8hAvP6YN6UtKVXcNCGt4tro4t5Cidw35K3om4Wl&id=100067931119189&mibextid=qC1gEa" underline="hover" color="primary" target="_blank">10th anniversary of WDT</Link> and <Link href="https://www.facebook.com/story.php?story_fbid=pfbid02VkJUfiiZQZNQeqT8KZb7mYbp4BDnMmeoTs31NcJBfgGiFNstSDCvKzZdciDhojHPl&id=100067931119189&mibextid=qC1gEa" underline="hover" color="primary" target="_blank">GitHub Field Day Mexico</Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: 'var(--grey)', py: 8 }}>
        <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Typography variant="h2" sx={{ color: 'var(--secondary)' }}>
              Contributions
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--secondary)', padding: '0 5rem', textAlign: 'center' }}>
              Fortunately, I have had the opportunity to contribute to open source and the IT community. Here is a list of a few activities I have participated in
            </Typography>
          </Box>
          <Grid container spacing={0} sx={{ py: 4 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ color: 'var(--secondary)' }}>
                Speaking Engagements
              </Typography>
              <List style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--secondary)' }}>
                <ListItem sx={{ display: 'list-item', py: 0 }}>
                  <ListItemText primary="Love Culture + People (Michelada Internal)" sx={{ color: 'var(--secondary)' }}/>
                </ListItem>
                <ListItem sx={{ display: 'list-item', py: 0 }}>
                  <ListItemText
                    primary={
                      <Typography variant='body1'>
                        Why We Should Follow Conventions (Monterrey,{' '}
                        <Link href="https://www.facebook.com/micheladaio/photos/pb.100030329214983.-2207520000/3227817140795674/?type=3" target="_blank" rel="noopener noreferrer">
                          Traguitos
                        </Link>)
                      </Typography>
                    }
                    sx={{ color: 'var(--secondary)' }}
                  />
                </ListItem>
                <ListItem sx={{ display: 'list-item', py: 0 }}>
                  <ListItemText
                    primary={
                      <Typography variant='body1'>
                        From Spanglish to English in No Time (Mérida,{' '}
                        <Link href="https://www.facebook.com/micheladaio/photos/pb.100030329214983.-2207520000/3180457695531619/?type=3" target="_blank" rel="noopener noreferrer">
                          Chillaxing
                        </Link>)
                      </Typography>
                    }
                    sx={{ color: 'var(--secondary)' }}
                  />
                </ListItem>
                <ListItem sx={{ display: 'list-item', py: 0 }}>
                  <ListItemText
                    primary={
                      <Typography variant='body1'>
                        From RoR Developer to React Senior in a Week (Colima,{' '}
                        <Link href="https://www.facebook.com/noobsjs/photos/pb.100064438372492.-2207520000/1090043921332065/?type=3" target="_blank" rel="noopener noreferrer">
                          NoobJS
                        </Link>)
                      </Typography>
                    }
                    sx={{ color: 'var(--secondary)' }}
                  />
                </ListItem>
                <ListItem sx={{ display: 'list-item', py: 0 }}>
                  <ListItemText
                    primary={
                      <Typography variant='body1'>
                        Soft Skills Are More Important Than You Think ({' '}
                        <Link href="https://www.facebook.com/micheladaio/photos/pb.100030329214983.-2207520000/3031862187057838/?type=3" target="_blank" rel="noopener noreferrer">
                          Talks2Code
                        </Link>)
                      </Typography>
                    }
                    sx={{ color: 'var(--secondary)' }}
                  />
                </ListItem>
                <ListItem sx={{ display: 'list-item', py: 0 }}>
                  <ListItemText primary="Continuous Integration & Continuous Delivery (Michelada Internal)" sx={{ color: 'var(--secondary)' }}/>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ color: 'var(--secondary)' }}>
                Workshops
              </Typography>
              <List style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--secondary)' }}>
                <ListItem sx={{ display: 'list-item', py: 0 }}>
                  <ListItemText
                    primary={<Typography variant="body1"><strong>How to Make Your First Contribution</strong> – Organizer, Hacktoberfest 2024</Typography>}
                  />
                </ListItem>
                <ListItem sx={{ display: 'list-item', py: 0 }}>
                  <ListItemText
                    primary={<Typography variant="body1"><strong>Ruby on Rails Summer Training</strong> – Planner, Michelada.io</Typography>}
                  />
                </ListItem>
                <ListItem sx={{ display: 'list-item', py: 0 }}>
                  <ListItemText
                    primary={<Typography variant="body1"><strong>How to Make Your First Contribution</strong> – Instructor, Hacktoberfest 2023</Typography>}
                  />
                </ListItem>
                <ListItem sx={{ display: 'list-item', py: 0 }}>
                  <ListItemText
                    primary={<Typography variant="body1"><strong>Hackorama</strong> – Staff, Michelada.io</Typography>}
                  />
                </ListItem>
                <ListItem sx={{ display: 'list-item', py: 0 }}>
                  <ListItemText
                    primary={<Typography variant="body1"><strong>You Should Know Git</strong> – Instructor, Universidad de Colima</Typography>}
                  />
                </ListItem>
                <ListItem sx={{ display: 'list-item', py: 0 }}>
                  <ListItemText
                    primary={<Typography variant="body1"><strong>RailsBridge</strong> – Staff, Michelada.io</Typography>}
                  />
                </ListItem>
                <ListItem sx={{ display: 'list-item', py: 0 }}>
                  <ListItemText
                    primary={<Typography variant="body1"><strong>Android Studio Basics</strong> – Instructor, Tecnológico de Colima</Typography>}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer/>
    </>
  );
}

export default Main;
