import { createMachine } from "xstate";

export const playerMachine = createMachine({
    id: 'player',
    initial: 'paused',
    states: {
        playing: {
            on: {
                PAUSE: 'paused',
                MINIMIZE: 'minimized',
            },
        },
        paused: {
            on: {
                PLAY: 'playing',
                MINIMIZE: 'minimized',
            },
        },
        minimized: {
            on: {
                MAXIMIZE: 'paused',
                PLAY: 'playing',
            },
        },
    },
});
