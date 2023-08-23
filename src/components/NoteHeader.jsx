import React from "react";
import { useNote } from "../context/NoteContext";

const NoteHeader = ({ onSortHandler, sortBy }) => {
  const  notes  = useNote();
  return (
    <div className="note-header">
      <h1>My Notes({notes.length})</h1>
      <select value={sortBy} onChange={onSortHandler}>
        <option value="latest">sort based on latest notes</option>
        <option value="completed">sort based on completed notes</option>
        <option value="newest">sort based on earliest notes</option>
      </select>
    </div>
  );
};

export default NoteHeader;
