import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px 30px;
  width: 100%;

  h3 {
    text-align: center;
    margin-bottom: 10px;

    font-size: 14px;
    color: #9f9c9c;

    @media screen and (min-width: 860px) {
      font-size: 16px;
    }
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 30px;

  input {
    border: none;
    padding: 10px 10px 20px 10px;

    font-size: 16px;

    :active,
    :focus {
      border: none;
      outline: none;
    }

    @media screen and (min-width: 860px) {
      font-size: 18px;
    }
  }
  textarea {
    border: none;
    font-size: 14px;
    padding: 10px 10px 20px 10px;
    padding-bottom: 20px;

    :active,
    :focus {
      border: none;
      outline: none;
    }
    @media screen and (min-width: 860px) {
      font-size: 16px;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    border-radius: 50%;
    width: 30px;
    height: 30px;

    margin-left: 10px;

    background-color: #3cb371;
    transition: transform ease-in-out;

    :hover {
      transform: scale(1.1);
    }
  }
`;
