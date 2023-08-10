import React, { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  const handleNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  console.log(notes);
  return (
    <div className="container">
      <div className="note-header"></div>
      <div className="note-app">
        <AddNewNote onHandleNotes={handleNotes} />
        <NoteList notes={notes}/>
      </div>
    </div>
  );
}

export default App;
