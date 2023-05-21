import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '040-123456' },
    { name: 'Ada Lovelace', phoneNumber: '39-44-5323523' },
    { name: 'Dan Abramov', phoneNumber: '12-43-234345' },
    { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setNewName(value);
  }

  const handlePhoneChange = (event) => {
    const { value } = event.target;
    setNewPhoneNumber(value);
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const existingPerson = persons.find((person) => person.name === newName);
  
    if (existingPerson) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = { name: newName, phoneNumber: newPhoneNumber };
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewPhoneNumber('')
    }
  };

  const filteredPersons = persons.filter((person) =>
  person.name.toLowerCase().includes(searchTerm.toLowerCase())
);



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newPhoneNumber={newPhoneNumber}
        handleChange={handleChange}
        handlePhoneChange={handlePhoneChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  )

}



export default App