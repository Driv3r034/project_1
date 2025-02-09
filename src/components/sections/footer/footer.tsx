import { ContentContainer } from '../../../styles/content-container';
import * as Styled from './footer.styles';

export const Footer = () => {
    const getCopyright = () => {
        const year = new Date().getFullYear();
        return `© ${year} Все права защищены.`;
    };

    return (
        <Styled.Footer>
            <ContentContainer>
                <Styled.CustomLink to={'/'}>
                    <Styled.AppName>PROJECT</Styled.AppName>
                </Styled.CustomLink>
                <Styled.Copyright>{getCopyright()}</Styled.Copyright>
                <Styled.Age>18+</Styled.Age>
            </ContentContainer>
        </Styled.Footer>
    );
};
