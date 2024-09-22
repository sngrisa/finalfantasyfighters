import ReactPlayer from 'react-player';
import Music from './../../../../assets/bgmusic.mp3';

const MusicPlayer = () => {

    return (
        <div>
            <ReactPlayer
                url={Music}
                playing={true}
                loop={true}
                volume={0.5}
                controls={true}
                width="0"
                height="0"
            />
        </div>
    );
};

export default MusicPlayer;