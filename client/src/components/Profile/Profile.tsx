import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const StyledProfilePicture = styled.img(() => ({
    height: '100px',
    borderRadius: '4px'
}));
export function Profile(): JSX.Element {

    return <Box justifyContent='center' alignItems='center' margin='16px auto'>
        <StyledProfilePicture src='https://avatars.githubusercontent.com/u/31162324?v=4' alt='thumb' />
        <Typography>Lloyd Agola</Typography>
        <Typography>View Profile</Typography>
    </Box>;
}
