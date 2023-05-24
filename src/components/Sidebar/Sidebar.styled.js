import styled from "styled-components";

export const Container = styled.div`
  flex-basis: 30%;
  min-width: 240px;
  height: calc(100vh - 50px);

  overflow-y: scroll;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    margin-top: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 10px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
