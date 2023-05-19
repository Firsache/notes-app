import styled from "styled-components";

export const Header = styled.header`
  padding: 0 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  background-color: lightgray;
  border-bottom: 2px solid #9f9c9c;
`;

export const ButtonsBlock = styled.div`
  display: flex;
  gap: 10px;

  button {
    display: flex;
    justify-content: center;
    align-items: baseline;
    border: 1px solid #9f9c9c;
    border-radius: 2px;

    padding: 2px 14px;
  }
`;
