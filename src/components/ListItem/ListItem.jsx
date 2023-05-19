import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";
import { Item } from "./ListItem.styled";

export const ListItem = ({ note, currentNote }) => {
  const { title, date, message } = note;
  const { choseNote } = useContext(NotesContext);
  return (
    <Item
      note={note}
      currentNote={currentNote}
      onClick={() => {
        choseNote(note);
      }}
    >
      <h2>{title.length > 30 ? title.substr(0, 30) + "..." : title}</h2>
      <span>{date}</span>
      <span>{message}</span>
    </Item>
  );
};
