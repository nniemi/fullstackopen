import React from 'react';
import App from './App';

const Persons = ({ filteredPersons, handleDelete }) => {
  console.log(filteredPersons)
  return (
    <div>
      {filteredPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.phoneNumber}
          <button onClick={() => handleDelete(person.id)}> Delete </button>
        </p>
      ))}
    </div>
  );
};

export default Persons;