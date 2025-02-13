import { FC } from "react";
import ReactPlayer from "react-player"

interface VideoPlayerProps {
    url: string;
    play: boolean;
    onPlay: () => void;
    onPause: () => void;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({ url, play, onPlay, onPause }) => {
    return (
        <>
            <ReactPlayer
                url={url}
                playing={play}
                onPlay={onPlay}
                onPause={onPause}
                controls
            />
        </>
    );
};
