import Box from '@mui/material/Box';
import Albums from 'src/components/Albums/Albums';
import Podcasts from 'src/components/Podcasts/Podcasts';


export type TBodyTypes = {drawerWidth:number}

export default function Body({ drawerWidth }: TBodyTypes): JSX.Element {
    return <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >               
                <Albums/>
                <Podcasts/>
            </Box>;
}
