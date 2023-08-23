import React, { useContext, useReducer, createContext } from "react";

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

const NoteContext = createContext();
const NoteDispatchContext = createContext();

export function NoteProvider({ children }) {
  const [notes, dispatch] = useReducer(noteReducer, []);
  return (
    <NoteContext.Provider value={notes}>
      <NoteDispatchContext.Provider value={dispatch}>
        {children}
      </NoteDispatchContext.Provider>
    </NoteContext.Provider>
  );
}

export function useNote() {
  return useContext(NoteContext);
}
export function useNoteDispatch() {
  return useContext(NoteDispatchContext);
}
