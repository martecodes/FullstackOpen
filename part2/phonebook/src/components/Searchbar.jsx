import { useState } from "react";

const Searchbar = ({ setFilteredPersons, persons }) => {
    const [search, setSearch] = useState("");

    const handleSearchBar = (e) => {
        const newSearch = e.target.value.toLowerCase();
        setSearch(newSearch);

        if (newSearch === "") {
            setFilteredPersons([]);
        } else {
            const filteredPersons = persons.filter((person) =>
                person.name.toLowerCase().includes(newSearch)
            );
            setFilteredPersons(filteredPersons);
        }
    };
    return <input value={search} onChange={handleSearchBar} />;
};

export default Searchbar;
