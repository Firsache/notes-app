import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";
import { SearchBox } from "../SearchBox/SearchBox ";
import { Header, ButtonsBlock } from "./SearchBar.styled";

export const SearchBar = () => {
  const { currentNote, disabled, choseAdd, deleteNote, choseEdit } =
    useContext(NotesContext);

  return (
    <Header>
      <ButtonsBlock>
        <button onClick={() => choseAdd()}>add</button>
        <button disabled={disabled} onClick={() => deleteNote(currentNote.id)}>
          delete
        </button>
        <button disabled={disabled} onClick={() => choseEdit()}>
          edit
        </button>
      </ButtonsBlock>
      <SearchBox />
    </Header>
  );
};
