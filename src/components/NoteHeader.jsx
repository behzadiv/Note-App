import React from "react";

const NoteHeader = ({ onSortHandler, sortBy }) => {
  return (
    <div className="note-header">
      <h1>My Notes(2)</h1>
      <select value={sortBy} onChange={onSortHandler}>
        <option value="latest">sort based on latest notes</option>
        <option value="completed">sort based on completed notes</option>
        <option value="newest">sort based on earliest notes</option>
      </select>
    </div>
  );
};

export default NoteHeader;
