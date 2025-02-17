import { createMachine } from "xstate";

const actions = {
    MUTE: 'muted',
    UNMUTE: 'playing',
    INCREASE_VOLUME: 'playing',
    DECREASE_VOLUME: 'playing',
    MINIMIZE: 'minimized',
    MAXIMIZE: 'paused',
};

export const playerMachine = createMachine({
    id: 'player',
    initial: 'paused',
    states: {
        playing: {
            on: {
                PAUSE: 'paused',
                ...actions,
            },
        },
        paused: {
            on: {
                PLAY: 'playing',
                ...actions,
            },
        },
        minimized: {
            on: {
                ...actions,
                MAXIMIZE: 'paused',
                PLAY: 'playing',
            },
        },
        muted: {
            on: {
                UNMUTE: 'playing',
                INCREASE_VOLUME: 'playing',
                DECREASE_VOLUME: 'playing',
            },
        },
    },
});
