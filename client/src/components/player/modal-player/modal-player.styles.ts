import { styled } from "styled-components";
import { rem } from "../../../helpers/rem-converter";

export const WrapperBtn = styled.div`
    display: flex;
    justify-content: space-between;
    gap: ${rem(5)};

    button, button:active, button:focus {
        border: none;
    }

    div {
        display: flex;
    }
`;
