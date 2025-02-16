import { styled } from "styled-components";
import { rem } from "../../../../helpers/rem-converter";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${rem(15)};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${rem(15)};
`;
