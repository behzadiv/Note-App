import React from "react";
import { useNote, useNoteDispatch } from "../context/NoteContext";

const NoteList = ({ sortBy }) => {
  const notes = useNote();
  let sortedNotes = [];
  const cloneNotes = [...notes];
  if (sortBy === "newest") {
    sortedNotes = cloneNotes.sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt) > 0 ? -1 : 1;
    });
  } else if (sortBy === "latest") {
    sortedNotes = cloneNotes.sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt) < 0 ? -1 : 1;
    });
  } else if (sortBy === "completed") {
    sortedNotes = cloneNotes.sort((a, b) => {
      return Number(a.completed) - Number(b.completed) < 0 ? -1 : 1;
    });
  }
  return (
    <div className="note-container">
      <NoteStatus notes={notes} />
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;

const NoteItem = ({ note }) => {
  const dispatch = useNoteDispatch();
  const options = {
    year: "numeric",
    day: "2-digit",
    month: "short",
  };
  return (
    <div className={note.completed ? "note-item completed" : "note-item"}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <span
            className="trash"
            onClick={() => dispatch({ type: "deleteNote", payload: note.id })}
          >
            Delete
          </span>
          <input
            type="checkbox"
            checked={note.completed}
            value={note.id}
            onChange={() => dispatch({ type: "checkNote", payload: note.id })}
          />
        </div>
      </div>
      <div className="note-item__footer">
        <span>{new Date(note.createdAt).toLocaleString("en-us", options)}</span>
      </div>
    </div>
  );
};

const NoteStatus = ({ notes }) => {
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed === true).length;
  const unCompletedNotes = allNotes - completedNotes;
  if (!allNotes) return <p>There is no note adeed ...!</p>;
  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        completed <span>{completedNotes}</span>
      </li>
      <li>
        open <span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
};
