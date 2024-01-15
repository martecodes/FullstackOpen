import { useState } from "react";
import Searchbar from "./components/Searchbar";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import dummyData from "./constants";

const App = () => {
    const [persons, setPersons] = useState(dummyData);
    const [filteredPersons, setFilteredPersons] = useState([]);

    return (
        <div>
            <h1>Phonebook</h1>
            <Searchbar setFilteredPersons={setFilteredPersons} persons={persons}/>

            <h2>Add a new</h2>
            <PersonForm persons={persons} setPersons={setPersons} />

            <h2>phones</h2>
            <Persons filteredPersons={filteredPersons} persons={persons} />
        </div>
    );
};

export default App;
