import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rem } from '../../../helpers/rem-converter';

export const Footer = styled.div`
    display: flex;
    padding: ${rem(10)};
    gap: ${rem(20)};
    color: white;
    background-color: gray;
`;

export const AppName = styled.p`
    font-size: ${rem(17)}
`;

export const CustomLink = styled(Link)`
    color: white;
    text-decoration: none;
    cursor: pointer;
`;

export const Copyright = styled.span`
    color: whitegray;
`;

export const Age = styled(Copyright)`
    justify-self: flex-end;
`;
