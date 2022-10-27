import {useState} from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }])
  const [newName, setNewName] = useState('new name')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
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
      <div>search: <input value={search} onChange={handleSearch}/></div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
          number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)}/>
        </div>
        <div>
          <button type="submit" onClick={handleNewPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase())).map((person) => <Person key={person.name} person={person}/>)}
      <div>debug: {newName}</div>
    </div>
  )
}

export default App;
