import { useContext } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import { NotesContext } from "../../context/NotesContext";
import { SearchBox } from "../SearchBox/SearchBox ";
import { Header, ButtonsBlock } from "./SearchBar.styled";

//
export const SearchBar = () => {
  const { disabled, choseAdd, modalDelete, choseEdit } =
    useContext(NotesContext);

  return (
    <Header>
      <ButtonsBlock>
        <button onClick={() => choseAdd()}>
          <AiOutlinePlus size="16px" />
        </button>
        <button disabled={disabled} onClick={() => modalDelete()}>
          <AiOutlineDelete size="16px" />
        </button>
        <button disabled={disabled} onClick={() => choseEdit()}>
          <AiOutlineEdit size="16px" />
        </button>
      </ButtonsBlock>
      <SearchBox />
    </Header>
  );
};
