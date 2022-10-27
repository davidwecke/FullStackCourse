import {useState} from 'react'
import Number from './components/Number'

const App = () => {
  const [persons, setPersons] = useState([{name:'Arto Hellas'}])
  const [newName, setNewName] = useState('new name')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName
    }
    setPersons(persons.concat(newPerson))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          <button type="submit" onClick={handleNewPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <Number key={person.name} name={person.name}/>)}
      <div>debug: {newName}</div>
    </div>
  )
}

export default App;
