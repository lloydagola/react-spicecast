import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Hero() {

  const heroStyles = {
    width: '100vw',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: "url('./images/hero-14.png')",
    backgroundAttachment: 'fixed',

    'img': {
      width: "100%",
      marginTop: "241px",
      position: 'fixed',
      zIndex: '0'
    }
  };

  return (
    <Box component='section' sx={heroStyles}>
      <img src='./images/hero-12.png' alt='foreground' />
      <Box position='absolute' textAlign='center'>
        <Typography variant='h1' fontWeight={900} fontSize={140} sx={{ textShadow: '2px 2px 5px rgba(0,0,0,0.3), 5px 5px 70px rgba(255, 255, 255, 0.5)' }}>SpiceCast</Typography>
        <Typography variant='h2' fontWeight={400} fontSize={80} sx={{ textShadow: '2px 2px 5px rgba(0,0,0,0.3), 5px 5px 70px rgba(255, 255, 255, 0.5)' }}>The Spice To Life</Typography>
      </Box>
    </Box>
  );
}
