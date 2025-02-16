import { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from 'antd';
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
                <h1>Join</h1>

                <Styled.Form>
                    <div>
                        <Input
                            type="text"
                            name="name"
                            value={values[NAME]}
                            onChange={handleChange}
                            autoComplete="off"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            name="room"
                            value={values[ROOM]}
                            onChange={handleChange}
                            autoComplete="off"
                            placeholder="Room"
                            required
                        />
                    </div>

                    <Link
                        onClick={() => handleClick}
                        to={`/chat?name=${values[NAME]}&room=${values[ROOM]}`}
                    >
                        <Button
                            disabled={values[NAME] === '' || values[ROOM] === ''}
                            type="primary"
                            style={{ width: '100%' }}
                        >
                            Sign in
                        </Button>
                    </Link>
                </Styled.Form>
            </Styled.Container>
        </Styled.Wrapper>
    );
};