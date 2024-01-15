import { useState } from "react";

const PersonForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState("");
    const [newPhone, setNewPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const nameAlreadyUsed = persons.some(
            (person) => person.name === newName
        );

        if (nameAlreadyUsed) {
            setNewName("");
            alert(`${newName} is already added to phonebook`);
            return;
        }

        const newPerson = {
            name: newName,
            phone: newPhone,
        };

        setPersons(persons.concat(newPerson));
        setNewName("");
    };

    const handleName = (e) => {
        setNewName(e.target.value);
    };

    const handlePhone = (e) => {
        setNewPhone(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={newName} onChange={handleName} />
            </div>

            <div>
                number: <input value={newPhone} onChange={handlePhone} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

export default PersonForm;
