import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { RevealAnswer } from "./components/RevealAnswer";
import { ChangeType } from "./components/ChangeType";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <hr></hr>
            <Counter></Counter>
            <hr />

            <hr></hr>
            <RevealAnswer></RevealAnswer>
            <hr />

            <hr></hr>
            <ChangeType></ChangeType>
            <hr />

            <hr></hr>
            <StartAttempt></StartAttempt>
            <hr />

            <hr></hr>
            <TwoDice></TwoDice>
            <hr />

            <hr></hr>
            <CycleHoliday></CycleHoliday>
            <hr />
        </div>
    );
}

export default App;
