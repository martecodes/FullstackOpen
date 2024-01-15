const Persons = ({ filteredPersons, persons }) => {
    const searched = filteredPersons.length > 0 ? true : false;
    return (
        <div>
            {searched
                ? filteredPersons.map((person) => (
                      <p key={person.name}>
                          {person.name}: {person.phone}
                      </p>
                  ))
                : persons.map((person) => (
                      <p key={person.name}>
                          {person.name}: {person.phone}
                      </p>
                  ))}
        </div>
    );
};

export default Persons;
