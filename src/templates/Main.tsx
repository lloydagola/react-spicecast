import {ReactNode} from 'react';
import { AudioPlayer } from '../components/audioPlayer/AudioPlayer';

export default function Main({children}:{children: ReactNode }){

    return <div>
        <p>
        Main Template
        </p>

        <AudioPlayer/>
        {children}
    </div>;
}