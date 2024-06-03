import { createContext, useContext } from "react";

const NotesContext = createContext();
const useNotes = () => useContext(NotesContext);

export { NotesContext, useNotes };
