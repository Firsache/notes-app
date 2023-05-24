import styled from "styled-components";

export const Item = styled.li`
  padding: 10px 10px;
  margin-right: 3px;
  min-height: 60px;

  background-color: ${({ note, currentNote }) =>
    note.id === currentNote?.id ? "#ece7e7" : "white"};
  @media screen and (min-width: 860px) {
    padding: 10px 20px;
    min-height: 70px;
  }

  h2 {
    font-size: 14px;
    @media screen and (min-width: 860px) {
      font-size: 16px;
    }
  }
`;
export const ItemMessage = styled.div`
  display: flex;
  gap: 5px;
  font-size: 13px;

  @media screen and (min-width: 860px) {
    font-size: 14px;
  }
`;
