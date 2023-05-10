import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";

export const ListItem = ({ note }) => {
  const { title, date, message } = note;
  const { choseNote } = useContext(NotesContext);
  return (
    <li
      onClick={() => {
        choseNote(note);
      }}
    >
      <h2>{title}</h2>
      <span>{date}</span>
      <span>{message}</span>
    </li>
  );
};
