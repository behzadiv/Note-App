import React, { useState } from "react";
import { memo } from "react";
import { useNoteDispatch } from "../context/NoteContext";
const AddNewNote = () => {
  const [newNote, setNewNote] = useState({ title: "", description: "" });
  const dispatch = useNoteDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newNote.title || !newNote.description) return;
    const note = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      completed: false,
      title: newNote.title,
      description: newNote.description,
    };
    dispatch({ type: "addNote", payload: note });
    setNewNote({ title: "", description: "" });
  };
  const changeHandler = (e) => {
    const input = e.target.name;
    if (input === "title") {
      setNewNote({ title: e.target.value, description: newNote.description });
    } else {
      setNewNote({ title: newNote.title, description: e.target.value });
    }
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          className="text-field"
          placeholder="note title..."
          onChange={changeHandler}
          value={newNote.title}
          required
        />
        <input
          type="text"
          name="description"
          id="description"
          className="text-field"
          placeholder="note description..."
          onChange={changeHandler}
          value={newNote.description}
          required
        />
        <button type="submit" className="btn btn--primary">
          Add new note
        </button>
      </form>
    </div>
  );
};

export default memo(AddNewNote);
