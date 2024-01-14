const Total = ({ parts }) => {
    const total = parts.reduce((a, b) => a + b.exercises, 0);

    return (
        <div>
            <strong>Total of {total} exercises</strong>
        </div>
    );
};

export default Total;
