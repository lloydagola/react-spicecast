import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Hero() {

  const heroStyles = {
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
      position: 'fixed'
    },
    '& img:nth-child(2)':{
      width:'100%'
    },
  };

  return (
    <Box component='section' sx={heroStyles}>
      <img src='./images/hero-14.png' alt='foreground' />
      <img src='./images/hero-12.png' alt='foreground' />
      <Box position='absolute' textAlign='center'>
        <Typography variant='h1' fontWeight={900} fontSize={140} sx={{ textShadow: '2px 2px 5px rgba(0,0,0,0.3), 5px 5px 70px rgba(255, 255, 255, 0.5)' }}>SpiceCast</Typography>
        <Typography variant='h2' fontWeight={400} fontSize={80} sx={{ textShadow: '2px 2px 5px rgba(0,0,0,0.3), 5px 5px 70px rgba(255, 255, 255, 0.5)' }}>The Spice To Life</Typography>
      </Box>
    </Box>
  );
}
