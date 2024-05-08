import "./style.css";

type TAlbumTypes = {
    i:number
}

export default function Album({i}:TAlbumTypes)  {

    return <div className="single-album"> 
        <div className="album-art">
            <div className="album-filter"/>
            <img src={`./images/th-${i}.jpg`} alt='album thumbnail'/> 
        </div>  
        <div className="album-buttons"/>        
        <div className = "album-text">
            <h4>Still Waiting</h4>
            <p>Lloyd Agola</p>
            <div className="horizontal-line album-horizontal-line white-background"/>                                            
        </div>  
    </div>
}
