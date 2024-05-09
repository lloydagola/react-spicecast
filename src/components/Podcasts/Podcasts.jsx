import React, { useContext, useEffect } from 'react';
import Podcast from '../Podcast/Podcast';
import './styles.css';

import albumdata from 'src/_mocks_/data/albums.json'

function renderPodcasts (){
    return albumdata.map((podcast, index) => <Podcast key={index} podcast={podcast}/>)
} 




const Podcasts = (props) => {

    return <section className ="podcast-grid">
                    <h2>{props.title}</h2>
                    <div className="podcast-grid-container">
                        {renderPodcasts()}        
                    </div>
                </section>
}
        

export default Podcasts;