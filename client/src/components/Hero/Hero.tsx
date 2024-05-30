import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

import StreamIcon from '@mui/icons-material/Stream';
import styled from '@emotion/styled';

const StyledHeroSection = styled(Box)((theme)=>({
  width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDD832',
    'img': {
      position: 'absolute',
      zIndex: '0'
    },
    '& img:nth-child(1)':{
      width:'70%',

      '@media (max-width: 480px)': {
        width:'80%',
      }
    },
    '& img:nth-child(2)':{
      width:'100%',
      position: 'fixed',
      top:0,

       '@media (max-width: 480px)': {
        width:'60%',
      }
    },
}))

export default function Hero() {

  const heroStyles = {
    
  };

  return (
    <StyledHeroSection component='section'>
      <img src='./images/hero-14.png' alt='foreground' />
      <img src='./images/hero-12.png' alt='foreground' />
      <Box position='absolute' textAlign='center'>
        <ListItemIcon><StreamIcon sx={{color:'#fff',  fontSize:'8rem' }}/></ListItemIcon> 
        <Typography 
          variant='h1' 
          fontWeight={900} 
          //fontSize={140} 
          sx={{ textShadow: '2px 2px 5px rgba(0,0,0,0.3), 5px 5px 70px rgba(255, 255, 255, 0.5)', fontSize: '12rem' }}>
            SpiceCast
        </Typography>
        <Typography 
          variant='h2' 
          fontWeight={400} 
          fontSize={80} 
          sx={{ textShadow: '2px 2px 5px rgba(0,0,0,0.3), 5px 5px 70px rgba(255, 255, 255, 0.5)' }}>
            The Spice To Life
        </Typography>
      </Box>
    </StyledHeroSection>
  );
}
