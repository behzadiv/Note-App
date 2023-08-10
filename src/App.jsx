import React, { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  const handleNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className="container">
      <div className="note-header"></div>
      <div className="note-app">
        <AddNewNote onHandleNotes={handleNotes} />
      </div>
    </div>
  );
}

export default App;
