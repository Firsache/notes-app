import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: baseline;
  position: relative;

  span {
    position: absolute;
    top: 2px;
    left: 40px;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 4px;
  padding: 4px 14px;

  :focus,
  :active {
    outline-color: #9f9c9c;
  }
  ::placeholder {
    padding-left: 50px;
  }
`;
