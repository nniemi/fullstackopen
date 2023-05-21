import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personData from './src/services/personData';


const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await personData.getAll()
        console.log(response.data);
        setPersons(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const existingPerson = persons.find((person) => person.name === newName);
  
    if (existingPerson) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = { name: newName, phoneNumber: newPhoneNumber };
      try {
        const response = await personData.create(newPerson)
        setPersons([...persons, response.data]);
        setNewName('');
        setNewPhoneNumber('');
      } catch (error) {
        console.log(error);
      }
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