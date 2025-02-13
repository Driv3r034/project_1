import { useState } from "react";
import { useMachine } from "@xstate/react";
import { PageWrapper } from "../../styles/content-container";
import { ModalPlayer } from "../../components/sections/player/modal-player/modal-player";
import { playerMachine } from "../../components/sections/player/state/player-machine";
import { PlayCircleTwoTone } from "@ant-design/icons";
import * as Styled from './player.styles';

export const Player = () => {
    const [state, send] = useMachine(playerMachine);
    const [modalVisible, setModalVisible] = useState(false);

    const playVideo = () => send({ type: 'PLAY' });
    const pauseVideo = () => send({ type: 'PAUSE' });
    
    return (
        <PageWrapper>
            <Styled.ClosedModal>
                <PlayCircleTwoTone
                    style={{ fontSize: '50px' }}
                    onClick={() => setModalVisible(true)}
                />
            </Styled.ClosedModal>
            <ModalPlayer
                visible={modalVisible}
                play={state.matches('playing')}
                onPlay={playVideo}
                onPause={pauseVideo}
                onClose={() => setModalVisible(false)}                
            />
        </PageWrapper>
    );
};
