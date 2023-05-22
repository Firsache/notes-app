import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";
import { AiOutlineSearch } from "react-icons/ai";
import { Label, Input } from "./SearchBox.styled";

export const SearchBox = () => {
  const { searchedQuery, search } = useContext(NotesContext);

  const handleInputChange = (e) => {
    search(e.target.value);
  };
  return (
    <Label>
      {!searchedQuery && (
        <span>
          <AiOutlineSearch />
        </span>
      )}

      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search"
        name="search"
        value={searchedQuery}
        onChange={handleInputChange}
      />
    </Label>
  );
};
