import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personData from './src/services/personData';
import './App.css';


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
  const [successMessage, setSuccessMessage] = useState('');

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
      const confirmUpdate = window.confirm(
        `${newName} is already added to the phonebook, replace the old number with a new one?`
      );
  
      if (confirmUpdate) {
        try {
          const updatedPerson = { ...existingPerson, phoneNumber: newPhoneNumber };
          await personData.update(existingPerson.id,updatedPerson);
          setNewName('');
          setNewPhoneNumber('');

          setSuccessMessage(`Updated ${existingPerson.name}'s phone number.`);
          setTimeout(() => {
            window.location.reload();
            setSuccessMessage('');
          }, 3000);
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      const newPerson = { name: newName, phoneNumber: newPhoneNumber };
      try {
        const response = await personData.create(newPerson)
        setPersons([...persons, response.data]);
        setNewName('');
        setNewPhoneNumber('');
        setSuccessMessage(`Added ${newPerson.name}`);
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(persons)
  const filteredPersons = persons.filter((person) =>
  person.name.toLowerCase().includes(searchTerm.toLowerCase())
);
  const handleDelete = async (id) => {
    const deletedPerson = filteredPersons.find(person => person.id === id);
    const confirmDelete = window.confirm(`Delete ${deletedPerson.name}?`)
    if(confirmDelete) {
      try {
        
        await personData.deletePerson(id)
        setSuccessMessage(`${deletedPerson.name} deleted.`);
        setTimeout(() => {
          window.location.reload();
          setSuccessMessage('');
        }, 3000);
      } catch (error) {
        console.log(error);
      }

    }

  };


  return (
    <div>
      <h2>Phonebook</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
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
      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete} />
    </div>
  )

}



export default App