import { useState } from "react";
import viteLogo from '/vite.svg';
import { PageWrapper } from "../../styles/content-container";

export const FirstPage = () => {
    const [count, setCount] = useState(0);

    return (
        <PageWrapper>
            <div>
                <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
            </div>
            <h1>HD 883</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 100)}>
                miles count: {count}
                </button>
                <p>
                Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </PageWrapper>
    );
};