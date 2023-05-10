import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";
import { ListItem } from "../ListItem/ListItem";

export const Sidebar = () => {
  const { notesList } = useContext(NotesContext);
  return (
    <ul>
      {notesList?.map((note) => (
        <ListItem key={note.id} note={note} />
      ))}
    </ul>
  );
};
