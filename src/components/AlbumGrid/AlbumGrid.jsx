import './styles.css';
import Album from 'src/components/Album/Album.tsx';

function renderAlbums(){
    const albums = [];
    for(let i=0; i < 16; i++ ){
        albums.push(<Album key={i} i={i}/>)
    }

    return albums;
}



export default function AlbumGrid() {

    return <section className ="album-grid">
                <h2>Albums</h2>
                <div className="album-grid-container">
                    {renderAlbums()}        
                </div>
            </section>
}