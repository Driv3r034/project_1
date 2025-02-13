import { FC, useState } from "react";
import { Button, Modal } from "antd";
import { VideoPlayer } from "../video-player";
import {
    PauseCircleTwoTone,
    ArrowsAltOutlined,
    PlayCircleTwoTone,
    ShrinkOutlined,
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

    const togglePlay = () => {
        setIsPlaying(prev => !prev);
    };
    const toggleExpand = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <Modal
            title="New Video Player"
            open={visible}
            onCancel={onClose}
            footer={[
                <Styled.WrapperBtn>
                    <Button key="play">
                        {isExpanded
                            ? <ShrinkOutlined onClick={toggleExpand} style={{ fontSize: '24px', color: '#08c' }} />
                            : <ArrowsAltOutlined onClick={toggleExpand} style={{ fontSize: '24px', color: '#08c' }} />
                        }
                    </Button>
                    <Button key="expand">
                        {isPlaying
                            ? <PauseCircleTwoTone onClick={togglePlay} style={{ fontSize: '24px', color: '#08c' }} />
                            : <PlayCircleTwoTone onClick={togglePlay} style={{ fontSize: '24px', color: '#08c' }} />
                        }
                    </Button>
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
