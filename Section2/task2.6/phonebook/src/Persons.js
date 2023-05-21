import React from 'react';
import axios from 'axios';

const Persons = ({ filteredPersons }) => {

  const handleDelete = async (id) => {
    console.log(filteredPersons)
    const deletedPerson = filteredPersons.find(person => person.id === id);
    const confirmDelete = window.confirm(`Delete ${deletedPerson.name}?`)
    if(confirmDelete) {
      try {
        
        await axios.delete(`http://localhost:3001/persons/${id}`);
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