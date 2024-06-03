import React, { useEffect, useState } from "react";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import axios from "axios";
import { NotesContext } from "./NotesContext";

const dev_URL = "http://localhost:4000/notes";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  const fetchNotes = async () => {
    try {
      const response = await axios.get(dev_URL);
      if (response) {
        setNotes(response.data);
      }
    } catch (error) {
      console.log(`Error : `, error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async () => {
    try {
      const newNote = {
        id: Date.now(),
        text: noteText,
      };

      if (noteText.length > 0) {
        const response = await axios.post(dev_URL, newNote);
        if (response) {
          setNotes([...notes, response.data]);
          fetchNotes();
          setNoteText("");
        }
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const resp = await axios.delete(`${dev_URL}/${id}`);
      if (resp) {
        setNotes(notes.filter((note) => note.id !== id));
        fetchNotes();
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Notes App</h1>
          <NotesContext.Provider
            value={{ notes, addNote, deleteNote, noteText, setNoteText }}
          >
            <NoteForm />
            <NoteList />
          </NotesContext.Provider>
        </div>
      </div>
    </>
  );
};

export default NotesApp;
