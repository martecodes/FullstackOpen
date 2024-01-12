import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
    const { good, neutral, bad } = props.stats;
    const total = good + neutral + bad;
    const average = (good - bad) / total;
    const positive = good / total;

    return (
        <div>
            <h1>Statistic</h1>
            {good == 0 && neutral == 0 && bad == 0 ? (
                <p>No feedback given</p>
            ) : (
                <>
                    <StatisticLine text="Good" value={good} />
                    <StatisticLine text="Neutral" value={neutral} />
                    <StatisticLine text="Bad" value={bad} />
                    <StatisticLine text="All" value={total} />
                    <StatisticLine text="Average" value={average} />
                    <StatisticLine text="Positive" value={positive} />
                </>
            )}
        </div>
    );
};

export default Statistics;
