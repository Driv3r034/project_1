import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useLocation } from "react-router-dom";
import { MainChat } from "./components/main-chat/main-chat";

const socket = io('http://localhost:4000');

export const Chat = () => {
    const { search } = useLocation();
    const [params, setParams] = useState<unknown | null>(null);

    useEffect(() => {
        const searchParams = Object.fromEntries(new URLSearchParams(search));
        setParams(searchParams);

        socket.emit('join', searchParams);
    }, [search]);

    useEffect(() => {
        socket.on('message', ({ data }) => {
            console.log('data:', data);     // получаем message с бэка при присоединении участника
        });
    }, []);

    return (
        <>
            <MainChat />
        </>
    );
};