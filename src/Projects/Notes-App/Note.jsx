import { Delete } from "@mui/icons-material";
import React from "react";

const Note = ({ note, onDelete }) => {
  return (
    <>
      <div className="bg-yellow-100 p-4 rounded shadow-md mb-4">
        <div className="flex justify-between items-center">
          <p>{note.text}</p>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => onDelete(note.id)}
          >
            <Delete />
          </button>
        </div>
      </div>
    </>
  );
};

export default Note;
