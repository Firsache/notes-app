import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";

export const SearchBox = () => {
  const { searchedQuery, search } = useContext(NotesContext);

  const handleInputChange = (e) => {
    search(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search"
        name="search"
        value={searchedQuery}
        onChange={handleInputChange}
      />
    </>
  );
};
