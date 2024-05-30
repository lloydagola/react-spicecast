import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

import StreamIcon from '@mui/icons-material/Stream';
import styled from '@emotion/styled';

const StyledHeroSection = styled(Box)((theme)=>({
  width: '100vw',
  height: '28vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FDD832',

  '@media (min-width:480px)': {
    height: '100vh',
  },



    'img': {
      position: 'absolute',
      zIndex: '0'
    },
    '& img:nth-child(1)':{
      width:'70%',

      '@media (max-width: 480px)': {
        width:'80%',
        top:'7%',
      }
    },
    '& img:nth-child(2)':{
      width:'100%',
      position: 'fixed',
      top:0,

       '@media (max-width: 480px)': {
      }
    },
    'svg':{
      fontSize: '3rem',

      '@media (min-width: 480px)':{
        fontSize: '8rem',
      },
    },
    'h1':{
      fontWeight: '900',
      fontSize:'10rem',

      '@media (max-width: 480px)':{
        fontSize: '2.4rem',
      },
    },
    'h2':{
      fontWeight: '400',
      fontSize:'6rem',
      
      '@media (max-width: 480px)':{
        fontSize: '1.5rem',
      },
    }
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
          >
            SpiceCast
        </Typography>
        <Typography 
          variant='h2' 
          >
            The Spice To Life
        </Typography>
      </Box>
    </StyledHeroSection>
  );
}
