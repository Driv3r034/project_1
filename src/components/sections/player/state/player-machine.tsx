import { createMachine } from "xstate";

export const playerMachine = createMachine({
    id: 'player',
    initial: 'paused',
    states: {
        playing: {
            on: {
                PAUSE: 'paused',
                MINIMIZE: 'minimized',
                MUTE: 'muted',
                UNMUTE: 'playing',
                INCREASE_VOLUME: 'playing',
                DECREASE_VOLUME: 'playing',
            },
        },
        paused: {
            on: {
                PLAY: 'playing',
                MINIMIZE: 'minimized',
                MUTE: 'muted',
                UNMUTE: 'playing',
                INCREASE_VOLUME: 'playing',
                DECREASE_VOLUME: 'playing',
            },
        },
        minimized: {
            on: {
                MAXIMIZE: 'paused',
                PLAY: 'playing',
                MUTE: 'muted',
                UNMUTE: 'playing',
                INCREASE_VOLUME: 'playing',
                DECREASE_VOLUME: 'playing',
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
