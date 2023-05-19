import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";
import { ListItem } from "../ListItem/ListItem";
import { Container, List } from "./Sidebar.styled.js";

export const Sidebar = () => {
  const { notesList, searchedQuery, currentNote } = useContext(NotesContext);
  const searchedNotes = notesList.filter((note) =>
    note.message.toLowerCase().includes(searchedQuery.toLowerCase())
  );
  return (
    <Container>
      <List>
        {!searchedQuery &&
          notesList.length > 0 &&
          notesList.map((note) => (
            <ListItem key={note.id} note={note} currentNote={currentNote} />
          ))}

        {searchedQuery &&
          searchedNotes.length > 0 &&
          searchedNotes.map((note) => <ListItem key={note.id} note={note} />)}
        {searchedQuery && searchedNotes.length < 1 && (
          <div>Note is not found</div>
        )}
      </List>
    </Container>
  );
};
