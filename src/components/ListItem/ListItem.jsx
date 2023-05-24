import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";
import { Item, ItemMessage } from "./ListItem.styled";

export const ListItem = ({ note, currentNote }) => {
  const { title, date, message } = note;
  const { choseNote } = useContext(NotesContext);

  const getDate = new Date(date).toLocaleString().split(",")[0].split(".");
  const americanDate = [getDate[1], getDate[0], getDate[2].slice(-2)].join("/");
  return (
    <Item
      note={note}
      currentNote={currentNote}
      onClick={() => {
        choseNote(note);
      }}
    >
      <h2>{title.length > 20 ? title.substr(0, 20) + "..." : title}</h2>
      <ItemMessage>
        <p>{americanDate}</p>
        <p>{message.length > 15 ? title.substr(0, 15) + "..." : message}</p>
      </ItemMessage>
    </Item>
  );
};
