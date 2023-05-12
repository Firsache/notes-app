import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";
import { ListItem } from "../ListItem/ListItem";

export const Sidebar = () => {
  const { notesList, searchedQuery } = useContext(NotesContext);
  const searchedNotes = notesList.filter((note) =>
    note.message.toLowerCase().includes(searchedQuery.toLowerCase())
  );
  return (
    <ul>
      {!searchedQuery &&
        notesList.length > 0 &&
        notesList.map((note) => <ListItem key={note.id} note={note} />)}

      {searchedQuery &&
        searchedNotes.length > 0 &&
        searchedNotes.map((note) => <ListItem key={note.id} note={note} />)}
      {searchedQuery && searchedNotes.length < 1 && (
        <div>Note is not found</div>
      )}
    </ul>
  );
};
