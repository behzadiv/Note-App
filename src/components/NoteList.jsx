import React from "react";

const NoteList = ({ notes, onDeleteNote, onCheckNote }) => {
  return (
    <div className="note-container">
      <NoteStatus notes={notes} />
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDeleteNote={onDeleteNote}
          onCheckNote={onCheckNote}
        />
      ))}
    </div>
  );
};

export default NoteList;

const NoteItem = ({ note, onDeleteNote, onCheckNote }) => {
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
          <span className="trash" onClick={() => onDeleteNote(note.id)}>
            Delete
          </span>
          <input
            type="checkbox"
            checked={note.completed}
            value={note.id}
            onChange={(e) => onCheckNote(e)}
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
