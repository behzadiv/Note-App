import React, { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import "./App.css";
import NoteHeader from "./components/NoteHeader";
import { useCallback } from "react";
import { useReducer } from "react";

function noteReducer(state, { type, payload }) {
  switch (type) {
    case "addNote":
      return (state = [...state, payload]);
    case "deleteNote": {
      const filteredNotes = state.filter((note) => note.id !== payload);
      return (state = filteredNotes);
    }
    case "checkNote": {
      return (state = state.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      ));
    }

    default:
      return state;
  }
}
function App() {
  const [sortBy, setSortBy] = useState("newest");
  const [notes, dispatch] = useReducer(noteReducer, []);

  const handleNotes = useCallback((newNote) => {
    dispatch({ type: "addNote", payload: newNote });
  }, []);
  const deleteNote = (id) => {
    dispatch({ type: "deleteNote", payload: id });
  };
  const checkNote = (id) => {
    dispatch({ type: "checkNote", payload: id });
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
