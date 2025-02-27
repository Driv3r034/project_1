import { FC } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from 'antd';
import type { ValueProps } from "../main-chat/main-chat.types";
import * as Styled from './join.styles';

interface JoinProps {
    values: { [x: string]: string };
    name: string;
    room: string;
    handleChange: ({ target: { value, name } }: ValueProps) => void;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Join: FC<JoinProps> = ({
    values,
    name,
    room,
    handleChange,
    handleClick,
}) => {

    return (
        <>
            <h1>Join</h1>

            <Styled.Form>
                <div>
                    <Input
                        type="text"
                        name="name"
                        value={values[name]}
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
                        value={values[room]}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder="Room"
                        required
                    />
                </div>

                <Link
                    onClick={() => handleClick}
                    to={`/chat?name=${values[name]}&room=${values[room]}`}
                >
                    <Button
                        disabled={values[name] === '' || values[room] === ''}
                        type="primary"
                        style={{ width: '100%' }}
                    >
                        Sign in
                    </Button>
                </Link>
            </Styled.Form>
        </>
    );
};
