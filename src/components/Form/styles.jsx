import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  
  form {
    width: 600px;
    margin: 2rem 0;
    padding: 1rem;


    .btn {
      background: #222;
      color: #fff;
      padding: 0.7rem 1.2rem;
      text-decoration: none;
      transition: .5s;
      cursor: pointer;
      border: none;

      :hover {
        color: yellow;
      }
    }
  }

`