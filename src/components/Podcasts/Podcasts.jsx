import Podcast from '../Podcast/Podcast';
import './styles.css';

import albumdata from 'src/_mocks_/data/albums.json'

function renderPodcasts (){
    return albumdata.map((podcast, index) => <Podcast key={index} podcast={podcast}/>)
} 

export default function Podcasts (props){

    return <section className ="podcast-grid">
                    <h2>{props.title}</h2>
                    <div className="podcast-grid-container">
                        {renderPodcasts()}        
                    </div>
                </section>
};