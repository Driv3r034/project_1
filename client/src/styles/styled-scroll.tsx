import { css } from 'styled-components';
import { rem } from '../helpers/rem-converter';

export const styledScrollbar = css`
    ::-webkit-scrollbar {
        width: ${rem(4)};
    }

    ::-webkit-scrollbar-track {
        background-color: #fff;
        border-radius: ${rem(8)};
    }

    ::-webkit-scrollbar-thumb {
        background-color: #aeb5bd;
        border-radius: ${rem(8)};
    }
`;
