import { PageWrapper } from "../../styles/content-container";
import * as Styled from './contacts.styles';

export const ContactsPage = () => {


    return (
        <PageWrapper>
            <Styled.ContactsContainer>
                <Styled.Phone href='tel:8 (495) 001 01 01'>
                    8 (495) 001 01 01
                </Styled.Phone>
                <Styled.Email href='mailto:email@addres.ru'>
                    email@addres.ru
                </Styled.Email>
                <Styled.Addres>
                    Moscow, M. Bronnaya 13/1
                </Styled.Addres>
            </Styled.ContactsContainer>
        </PageWrapper>
    );
};