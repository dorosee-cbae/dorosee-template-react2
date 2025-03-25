import styled from 'styled-components';

export const StyledUserCard = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    width: 100%;

    &:focus {
      outline: 2px solid #007bff;
    }
  }

  button {
    all: unset;
    box-sizing: border-box;
    background-color: #007bff;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    text-align: center;

    &:hover {
      background-color: #0056b3;
    }

    &:focus {
      outline: 2px solid #0056b3;
    }
  }
`;
