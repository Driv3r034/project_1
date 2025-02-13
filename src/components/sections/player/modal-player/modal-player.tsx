import { FC, useState } from "react";
import { Button, Modal, Slider } from "antd";
import { VideoPlayer } from "../video-player";
import {
    PauseCircleTwoTone,
    ArrowsAltOutlined,
    PlayCircleTwoTone,
    ShrinkOutlined,
    MutedOutlined,
    SoundOutlined,
} from "@ant-design/icons";
import * as Styled from './modal-player.styles';

interface ModalPlayerProps {
    visible: boolean;
    play?: boolean;
    onPlay: () => void;
    onPause: () => void;
    onClose: () => void;
}

export const ModalPlayer: FC<ModalPlayerProps> = ({ visible, onPlay, onPause, onClose }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(7);
    const styled = { fontSize: '24px', color: '#08c' };

    const togglePlay = () => {
        setIsPlaying(prev => !prev);
    };

    const toggleExpand = () => {
        setIsExpanded(prev => !prev);
    };

    const toggleMute = () => {
        setIsMuted(prev => !prev);
    };

    const handleVolumeChange = (value: number) => {
        setVolume(value);
    };

    return (
        <Modal
            title="New Video Player"
            open={visible}
            onCancel={onClose}
            footer={[
                <Styled.WrapperBtn key='controls'>
                    <div>
                        
                        <Slider
                            min={0}
                            max={10}
                            step={1}
                            value={volume}
                            onChange={handleVolumeChange}
                            style={{ width: 100 }}
                        />
                        <Button key="mute" onClick={toggleMute}>
                            {isMuted
                                ? <MutedOutlined style={styled} />
                                : <SoundOutlined style={styled} />
                            }
                        </Button>
                    </div>
                    <div>
                        <Button key="expand">
                            {isPlaying
                                ? <PauseCircleTwoTone onClick={togglePlay} style={styled} />
                                : <PlayCircleTwoTone onClick={togglePlay} style={styled} />
                            }
                        </Button>
                    </div>
                    <div>
                        <Button key="play">
                            {isExpanded
                                ? <ShrinkOutlined onClick={toggleExpand} style={styled} />
                                : <ArrowsAltOutlined onClick={toggleExpand} style={styled} />
                            }
                        </Button>
                    </div>
                </Styled.WrapperBtn>
            ]}
            width={isExpanded ? 950 : 450}
            height={isExpanded ? 530 : 250 }
        >
            <VideoPlayer
                url="https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-4691-a73f-a4e583391b3d/playlist.m3u8"
                play={isPlaying}
                onPlay={onPlay}
                onPause={onPause}
            />
        </Modal>
    );
};
