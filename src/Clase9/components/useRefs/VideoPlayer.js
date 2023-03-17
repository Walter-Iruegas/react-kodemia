import { useRef, useState } from "react"
export const VideoPlayer = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef();

    const onPlayPauseClick = () => {
        const videoPlayer = videoRef.current;
        console.log("🚀 ~ file: VideoPlayer.js:9 ~ onPlayPauseClick ~ videoPlayer:", videoPlayer);
        isPlaying ? videoPlayer.pause() : videoPlayer.play();
        setIsPlaying(!isPlaying)
    }


    return (
        <>
            <video 
                ref={videoRef}
                style={{width:'300px', height:'auto'}}
                src="videos/Raindrops_Videvo.mp4"
                >
            </video>

          

            <button onClick={onPlayPauseClick}>
                {isPlaying?  'pause' : 'play'}
            </button>
        </>
    )
}