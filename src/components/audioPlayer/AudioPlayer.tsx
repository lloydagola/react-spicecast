const audioPlayerStyle = {
    backgroundColor: '#333',
    border: '1px solid #333',
    display: 'flex',
    position: 'fixed',
    bottom: '0',
    zIndex: '10000000',
    cursor: 'pointer',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    color: '#fff',
    padding: '0 5%',
    caretColor: 'transparent',    
}

export function AudioPlayer() {

    return <section style={{
    backgroundColor: '#333',
    border: '1px solid #333',
    display: 'flex',
    position: 'fixed',
    bottom: '0',
    zIndex: '10000000',
    cursor: 'pointer',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    color: '#fff',
    padding: '0 5%',
    caretColor: 'transparent',    
}}> 
      <figure>
        <figcaption>Listen to the T-Rex:</figcaption>
        <audio controls src="./chill.mp3" ></audio>
        <a href="/media/cc0-audio/t-rex-roar.mp3"> Download audio </a>
      </figure> 
    </section>;
}
