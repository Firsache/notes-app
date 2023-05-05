import { createContext } from "react";

function noop() {}
export const NotesContext = createContext({
  searchedQuery: null,
  search: noop,
  notesList: [],
  currentNote: null,
  createNote: noop,
  addNote: noop,
  deleteNote: noop,
  editNote: noop,
});
