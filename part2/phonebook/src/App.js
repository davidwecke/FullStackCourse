import {useState, useEffect} from 'react'
import axios from 'axios'
import Person from './components/Person'

const PersonForm = ({newName, handleNewName, newNumber, handleNewNumber, handleNewPerson}) => {
  return (
    <form>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
          number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit" onClick={handleNewPerson}>add</button>
        </div>
      </form>
  )
}

const Filter = ({search, handleSearch}) => {
  return(
    <div>
      search: <input value={search} onChange={handleSearch} />
    </div>
  )
}

const Persons = ({persons, search}) => {
  if(persons.length === 0) return (<div>No names in phonebook yet.</div>)
  return (
    <div>
      {persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase())).map((person) => <Person key={person.name} person={person}/>)}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('new name')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNewPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    if(persons.some(person => person.name === newName)){
      window.alert(`${newName} already exists in the phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
    }  
  }
  
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
    
      <Filter search={search} handleSearch={handleSearch} />

      <h2>Phonebook</h2>
      
      <PersonForm newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} handleNewPerson={handleNewPerson} />

      <h2>Numbers</h2>

      <Persons persons={persons} search={search} />
    </div>
  )
}

export default App;
