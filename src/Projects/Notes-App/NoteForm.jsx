import { Add } from "@mui/icons-material";
import React from "react";
import { useNotes } from "./NotesContext";

const NoteForm = () => {
  const { addNote, noteText, setNoteText } = useNotes();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;
    addNote(noteText);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          className="border rounded w-80 p-2 text-gray-700"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Enter your note here..."
          rows="3"
        ></textarea>
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          <Add />
        </button>
      </form>
    </>
  );
};

export default NoteForm;
