import { createGlobalStyle } from 'styled-components';
import { rem } from './../src/helpers/rem-converter';
import { styledScrollbar } from '../src/styles/styled-scroll';

export const GlobalStyle = createGlobalStyle`
    ${styledScrollbar};

    button {
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    html, body {
        box-sizing: border-box;
        height: 100%;
        font-size: ${rem(17)};
        
        > iframe {
            display: none;
        }
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    * {
        overflow-wrap: break-word;
        -webkit-tap-highlight-color:  rgba(0, 0, 0, 0);
    }

    img,
    video,
    code,
    pre {
        max-width: 100%;
    }

    html,
    button,
    input,
    select,
    textarea {
        font: inherit;
    }

    figure.table {
        overflow-x: auto;
    }

    table, th, td {
        border-collapse: collapse;
        border-spacing: 0;
        border: 1px solid #bbc1c7;
    }

    .hidden {
        display: none !important;
    }

    .arrow-icon {
        padding-right: ${rem(8)};
        padding-left: ${rem(8)};
        align-self: center;
    }

    main {
        display: flex;
        flex-wrap: wrap;
    }

    :root {
        --size-8: 8px/12px;
        --size-12: 12px/16px;
        --size-14: 14px/20px;
        --size-16: 16px/24px;
        --size-17: 17px/24px;
        --size-20: 20px/24px;
        --size-24: 24px/28px;
        --size-26: 26px/30px;
        --size-28: 28px/30px;
        --size-32: 32px/36px;
        --size-44: 44px/48px;
        --size-48: 48px/52px;
        --size-64: 64px/68px;
        --size-84: 84px/88px;
        --size-180: 180px/184px;
    }
`;
