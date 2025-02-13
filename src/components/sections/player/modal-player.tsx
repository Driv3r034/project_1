import { FC } from "react";
import { Button, Modal } from "antd";
import { VideoPlayer } from "./video-player";

interface ModalPlayerProps {
    visible: boolean;
    play: boolean;
    onPlay: () => void;
    onPause: () => void;
    onClose: () => void;
}

export const ModalPlayer: FC<ModalPlayerProps> = ({ visible, onPlay, onPause, onClose, play }) => (
    <Modal
        title="New Video Player"
        visible={visible}
        onCancel={onClose}
        footer={[
            <Button key="play" onClick={onPlay}>Play ▷</Button>,
            <Button key="pause" onClick={onPause}>Pause ||</Button>,
        ]}
        width={690}
    >
        <VideoPlayer
            url="https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-4691-a73f-a4e583391b3d/playlist.m3u8"
            play={play}
            onPlay={onPlay}
            onPause={onPause}
        />
    </Modal>
);
