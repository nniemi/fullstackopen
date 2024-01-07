import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personData from './src/services/personData';
import Notification from './Notification';
import './App.css';


const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await personData.getAll()
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
  const [notification, setNotification] = useState(null);

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
          const updatedPerson = { ...existingPerson, phoneNumber: newPhoneNumber };
          await personData.update(existingPerson.id,updatedPerson).then(x => {
            setNewName('');
            setNewPhoneNumber('');
  
            setNotification({message: `Updated ${existingPerson.name}'s phone number.`, color: "green"});
            setTimeout(() => {
              window.location.reload();
              setNotification(null);
            }, 3000);
          }).catch(error => {
            setNotification({message: `${existingPerson.name} has been deleted from the server`, color: "red"});
            setTimeout(() => setNotification(null), 3000);
          });

      }
    } else {
      const newPerson = { name: newName, phoneNumber: newPhoneNumber };
        const response = await personData.create(newPerson).then(x => {
          setPersons([...persons, response.data]);
          setNewName('');
          setNewPhoneNumber('');
          setNotification({message: `Added ${newPerson.name}`, color: "green"});
          setTimeout(() => {
            setNotification(null);
          }, 3000);
        }).catch(error => {
          setNotification({message: "Error in adding a new person", color: "red"});
          setTimeout(() => setNotification(null), 3000);
        })
    }
  };
  const filteredPersons = persons.filter((person) =>
  person.name.toLowerCase().includes(searchTerm.toLowerCase())
);
  const handleDelete = async (id) => {
    const deletedPerson = filteredPersons.find(person => person.id === id);
    const confirmDelete = window.confirm(`Delete ${deletedPerson.name}?`)
    if(confirmDelete) {
        await personData.deletePerson(id).then(x => {
          setNotification({message: `${deletedPerson.name} deleted.`, color: "green"});
          setTimeout(() => {
            window.location.reload();
            setNotification(null);
          }, 3000);
        }).catch(error => {
          setNotification({message: error.response.data.error, color: "red"});
          setTimeout(() => setNotification(null), 3000);
        })
    }

  };


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification}/>
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