import { useState } from "react";
import { useMachine } from "@xstate/react";
import { PageWrapper } from "../../styles/content-container";
import { ModalPlayer } from "../../components/sections/player/modal-player/modal-player";
import { playerMachine } from "../../components/sections/player/state/player-machine";
import { Button } from "antd";

export const Player = () => {
    const [state, send] = useMachine(playerMachine);
    const [modalVisible, setModalVisible] = useState(false);

    const playVideo = () => send({ type: 'PLAY' });
    const pauseVideo = () => send({ type: 'PAUSE' });
    
    return (
        <PageWrapper>
            <Button type="primary" onClick={() => setModalVisible(true)}>
                Video Player
            </Button>
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
