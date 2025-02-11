import { css, styled } from "styled-components";
import { rem } from "../../helpers/rem-converter";

const blockStyles = css`
    width: fit-content;
    padding: ${rem(10)};
    background-color: lightgray;
    border-radius: ${rem(10)};
`;

export const ContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: ${rem(30)};
    gap: ${rem(10)};
`;

export const Phone = styled.a`
    ${blockStyles};
`;

export const Email = styled.a`
    ${blockStyles};
`;

export const Addres = styled.span`
    ${blockStyles};
`;
