import React from "react";
import Note from "./Note";
import { useNotes } from "./NotesContext";

const NoteList = () => {
  const { notes, deleteNote } = useNotes();

  return (
    <>
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={deleteNote} />
      ))}
    </>
  );
};

export default NoteList;
