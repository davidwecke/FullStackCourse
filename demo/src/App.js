import {useState} from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('A new note..')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length+1,
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteInputChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter((note) => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>Toggle Important</button>
      </div>
      <ul>
        {notes.map((note) => <Note key={note.id} note={note} />  )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteInputChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App