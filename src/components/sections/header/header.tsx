import * as Styled from './header.styles';

export const Header = () => {

    return (
        <Styled.HeaderContainer>
            <Styled.Header>
                <Styled.Navigation>
                    <Styled.Logo to={'/'}>
                        <Styled.LogoText>
                            PROJECT
                        </Styled.LogoText>
                    </Styled.Logo>
                    <Styled.NavItemsContainer>
                            <Styled.NavItemWrap>
                                <Styled.NavItem to={'/first'}>
                                    First
                                </Styled.NavItem>    
                            </Styled.NavItemWrap>
                            <Styled.NavItemWrap>
                                <Styled.NavItem to={'/contacts'}>
                                     Contacts
                                </Styled.NavItem>
                            </Styled.NavItemWrap>
                    </Styled.NavItemsContainer>
                </Styled.Navigation>
            </Styled.Header>
        </Styled.HeaderContainer>
    );
};