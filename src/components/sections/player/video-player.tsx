import { FC } from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
    url: string;
    play: boolean;
    onPlay: () => void;
    onPause: () => void;
    volume: number;
    muted: boolean;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({ url, play, onPlay, onPause, volume, muted }) => {
    return (
        <>
            <ReactPlayer
                url={url}
                playing={play}
                onPlay={onPlay}
                onPause={onPause}
                volume={volume}
                muted={muted}
                width={"100%"}
                height={"100%"}
            />
        </>
    );
};
