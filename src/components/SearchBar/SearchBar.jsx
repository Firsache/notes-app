import { SearchBox } from "../SearchBox/SearchBox ";
import { Header, ButtonsBlock } from "./SearchBar.styled";

export const SearchBar = () => {
  const handleAddNote = () => {};
  const handleDeleteNote = () => {};
  const handleEditNote = () => {};
  return (
    <Header>
      <ButtonsBlock>
        <button onClick={handleAddNote}>add</button>
        <button onClick={handleDeleteNote}>delete</button>
        <button onClick={handleEditNote}>edit</button>
      </ButtonsBlock>
      <SearchBox />
    </Header>
  );
};
