import { NotesContext } from "../../context/NotesContext";
import { useNotes } from "../../hooks/notes.hook";
import { useSearch } from "../../hooks/search.hook";
import { SearchBar } from "../SearchBar/SearchBar";
import { Sidebar } from "../Sidebar/Sidebar";
import { Workspace } from "../Workspace/Workspace";

export function App() {
  const { searchedQuery, search } = useSearch();
  const { notesList, currentNote, createNote, addNote, deleteNote, editNote } =
    useNotes();

  return (
    <NotesContext.Provider
      value={
        (searchedQuery,
        search,
        notesList,
        currentNote,
        createNote,
        addNote,
        deleteNote,
        editNote)
      }
    >
      <div>
        <SearchBar />
        <div>
          <Sidebar />
          <Workspace />
        </div>
      </div>
    </NotesContext.Provider>
  );
}
