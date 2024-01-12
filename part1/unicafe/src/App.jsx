import { useState } from "react";
import Statistics from "./Statistic";
import Button from "./Button";

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const stats = { good, neutral, bad };

    return (
        <div>
            <h1>Give Feedback</h1>
            <div>
                <Button handleClick={() => setGood(good + 1)} text="Good" />
                <Button
                    handleClick={() => setNeutral(neutral + 1)}
                    text="Neutral"
                />
                <Button handleClick={() => setBad(bad + 1)} text="Bad" />
            </div>
            <Statistics stats={stats} />
        </div>
    );
};

export default App;
