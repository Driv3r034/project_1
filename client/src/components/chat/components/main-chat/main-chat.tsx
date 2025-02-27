import { useState } from "react";
import { Join } from "../join/join";
import type { ValueProps } from "./main-chat.types";
import * as Styled from './main-chat.styles';

const FIELDS = {
    NAME: 'name',
    ROOM: 'room',
}

export const MainChat = () => {
    const { NAME, ROOM } = FIELDS;
    const [values, setValues] = useState({ [NAME]: '', [ROOM]: '' });

    const handleChange = ({ target: { value, name } }: ValueProps) => {
        setValues({ ...values, [name]: value });
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const isDisabled = Object.values(values).some((value) => !value);

        if (isDisabled) {
            e.preventDefault()
        }
    };

    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Join
                    values={values}
                    name={NAME}
                    room={ROOM}
                    handleChange={handleChange}
                    handleClick={handleClick}
                />
            </Styled.Container>
        </Styled.Wrapper>
    );
};