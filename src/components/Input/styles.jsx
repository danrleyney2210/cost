import styled from "styled-components";


export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;


  label {
    margin-bottom: .6rem;
    font-weight: normal;
    color: #333;
    
  }

  input {
    padding: .7rem;
    border: none;
    
    outline: none;
  }

  input::placeholder {
    color: #7b7b7b;
  }

`