import { NotesContext } from "../../context/NotesContext";
import { useNotes } from "../../hooks/notes.hook";
import { useSearch } from "../../hooks/search.hook";
import { SearchBar } from "../SearchBar/SearchBar";
import { Sidebar } from "../Sidebar/Sidebar";
import { Workspace } from "../Workspace/Workspace";
import { Main } from "./App.styled";

export function App() {
  const { searchedQuery, search } = useSearch();
  const {
    getNotes,
    notesList,
    currentNote,
    disabled,
    choseNote,
    editing,
    choseEdit,
    adding,
    choseAdd,
    addNote,
    deleteNote,
    editNote,
  } = useNotes();

  getNotes();

  return (
    <NotesContext.Provider
      value={{
        searchedQuery,
        search,
        notesList,
        currentNote,
        disabled,
        choseNote,
        editing,
        choseEdit,
        adding,
        choseAdd,
        addNote,
        deleteNote,
        editNote,
      }}
    >
      <div>
        <SearchBar />
        <Main>
          <Sidebar />
          <Workspace />
        </Main>
      </div>
    </NotesContext.Provider>
  );
}
