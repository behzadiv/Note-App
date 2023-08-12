import React, { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import "./App.css";
import NoteHeader from "./components/NoteHeader";
import { useCallback } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("newest");

  const handleNotes = useCallback(
    (newNote) => {
      setNotes((prevNotes) => [...prevNotes, newNote]);
    },
    [notes]
  );
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };
  const checkNote = (e) => {
    const noteId = Number(e.target.value);
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };
  const sortHandler = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="container">
      <NoteHeader onSortHandler={sortHandler} sortBy={sortBy} notes={notes} />
      <div className="note-app">
        <AddNewNote onHandleNotes={handleNotes} />
        <NoteList
          notes={notes}
          sortBy={sortBy}
          onDeleteNote={deleteNote}
          onCheckNote={checkNote}
        />
      </div>
    </div>
  );
}

export default App;
