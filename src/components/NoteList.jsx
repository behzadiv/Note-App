import React from "react";

const NoteList = ({ notes, onDeleteNote }) => {
  return (
    <div className="note-container">
      <div className="note-status">
        <div>
          All <span>2</span>
        </div>
        <div>
          completed <span>2</span>
        </div>
        <div>
          open <span>2</span>
        </div>
      </div>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDeleteNote={onDeleteNote} />
      ))}
    </div>
  );
};

export default NoteList;

const NoteItem = ({ note, onDeleteNote }) => {
  const options = {
    year: "numeric",
    day: "2-digit",
    month: "short",
  };
  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <span className="trash" onClick={()=>onDeleteNote(note.id)}>
            Delete
          </span>
          <input type="checkbox" id="" name="" />
        </div>
      </div>
      <div className="note-item__footer">
        <span>{new Date(note.createdAt).toLocaleString("en-us", options)}</span>
      </div>
    </div>
  );
};
