import React, { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  const handleNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };
  const checkNote = (id) => {
    const cloneNotes = [...notes];
    const findNote = cloneNotes.find((note) => note.id === id);
    findNote.completed = !findNote.completed;
    setNotes(cloneNotes);
  };

  return (
    <div className="container">
      <div className="note-header"></div>
      <div className="note-app">
        <AddNewNote onHandleNotes={handleNotes} />
        <NoteList
          notes={notes}
          onDeleteNote={deleteNote}
          onCheckNote={checkNote}
        />
      </div>
    </div>
  );
}

export default App;
