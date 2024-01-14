import Part from "./Part";

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part, i) => (
                <Part key={i} part={part.name} exercise={part.exercises} />
            ))}
        </div>
    );
};

export default Content;
