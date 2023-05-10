import { createContext } from "react";

function noop() {}
export const NotesContext = createContext({
  searchedQuery: "",
  search: noop,
  notesList: [],
  currentNote: "",
  disabled: true,
  choseNote: noop,
  editing: false,
  choseEdit: noop,
  adding: false,
  choseAdd: noop,
  addNote: noop,
  deleteNote: noop,
  editNote: noop,
});
