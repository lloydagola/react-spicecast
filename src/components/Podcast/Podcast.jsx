import React from "react";
import "./style.css";
//import PlaylistView from "../PlaylistView/PlaylistView";




export default function Podcast ({podcast}){
       
    return <div className="single-podcast"> 
            <div className="image-view">
                <div className = "podcast-text">
                    <h4>{podcast.title}</h4>
                    <div className="horizontal-line podcast-horizontal-line white-background"/>
                    
                </div> 
                <div className="filter"/>
                <img src = {`./images/th-${podcast.index}.jpg`} alt="podcast thumbnail"/>                                            
            </div>    
            
        <div className="podcast-vertical-widget">
            <p className="podcast-vertical-text">
                <b>0{podcast.index}</b>                           
            </p>
            <div className="vertical-line white"/>
            <div className="social-links"> 
                <i className="fab fa-facebook-f"/>
                <i className="fab fa-instagram"/>
                <i className="fab fa-twitter"/>
            </div>             
            <div className="vertical-line white"/>
        </div>                       
    </div>
}
                   
        


