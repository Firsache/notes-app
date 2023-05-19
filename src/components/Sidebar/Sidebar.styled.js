import styled from "styled-components";

export const Container = styled.div`
  flex-basis: 30%;
  min-width: 200px;
  height: 100vh;

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

  h2 {
    padding: 0;
    margin: 0;

    font-size: 16px;
  }
`;
