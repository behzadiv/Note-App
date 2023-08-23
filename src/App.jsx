import React, { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteHeader from "./components/NoteHeader";
import { NoteProvider } from "./context/NoteContext";
import "./App.css";

function App() {
  const [sortBy, setSortBy] = useState("newest");

  const sortHandler = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <NoteProvider className="container">
      <NoteHeader onSortHandler={sortHandler} sortBy={sortBy} />
      <AddNewNote />
      <NoteList sortBy={sortBy} />
    </NoteProvider>
  );
}

export default App;
