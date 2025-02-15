import { styled } from "styled-components";
import { rem } from "../../helpers/rem-converter";

export const ClosedModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${rem(300)};
    height: ${rem(150)};
    margin: 25vh auto auto;
    border: 2px solid #8585ff;
    border-radius: ${rem(5)};
`;
