import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  span {
    position: absolute;
    top: 0;
    left: 35px;
  }
`;

export const Input = styled.input`
  ::placeholder {
    padding-left: 50px;
  }
`;
