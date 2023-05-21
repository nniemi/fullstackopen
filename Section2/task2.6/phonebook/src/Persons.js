import React from 'react';
import personData from './src/services/personData';

const Persons = ({ filteredPersons }) => {

  const handleDelete = async (id) => {
    const deletedPerson = filteredPersons.find(person => person.id === id);
    const confirmDelete = window.confirm(`Delete ${deletedPerson.name}?`)
    if(confirmDelete) {
      try {
        
        await personData.deletePerson(id)
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }


  };
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