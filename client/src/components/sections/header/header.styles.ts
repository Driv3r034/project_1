import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rem } from '../../../helpers/rem-converter';

export const HeaderContainer = styled.div`
    position: relative;
    z-index: 100;
    display: flex;
    justify-content: center;
    height: ${rem(52)};
    background-color: gray;
    box-shadow: lightgray;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: ${rem(1280)};
`;

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const NavigationMore = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: ${rem(16)};
    cursor: pointer;

    ::before {
        content: ' ';
        position: absolute;
        bottom: 0;
        width: 2%;
        border-bottom: 2px solid blue;
        transform: scale(0, 1);
        transition: transform 0.3s;
    }

    :hover::before {
        transform: scale(1, 1);
    }
`;

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
    text-decoration: none;
    cursor: pointer;
`;

export const LogoText = styled.span`
    padding-left: ${rem(50)};
    line-height: ${rem(17)};
    color: #fff;
`;

export const NavItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    padding-left: ${rem(32)};
`;

export const NavItemWrap = styled.div<{ active?: boolean }>`
    position: relative;
    height: 100%;

    &:not(:first-child) {
        margin-left: ${rem(16)};
    }

    ::before {
        content: ' ';
        position: absolute;
        bottom: 0;
        width: ${(p) => (p.active ? '0' : '100%')};
        border-bottom: 2px solid yellow;
        transform: scale(0, 1);
        transition: transform 0.3s;
    }

    :hover::before {
        transform: scale(1, 1);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: ${(p) => (p.active ? '100%' : '0')};
        height: 2px;
        border-radius: ${rem(10)}
        background-color: red;
        transition: width 200ms;
    }
`;

export const NavItem = styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
    text-decoration: none;
    color: inherit;
`;
