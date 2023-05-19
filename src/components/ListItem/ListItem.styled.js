import styled from "styled-components";

export const Item = styled.li`
  padding: 10px 20px;
  margin-right: 3px;
  height: 70px;

  background-color: ${({ note, currentNote }) =>
    note.id === currentNote?.id ? "#ece7e7" : "white"};
  span {
    font-size: 14px;
  }
`;
