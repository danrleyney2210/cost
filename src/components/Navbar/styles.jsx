import styled from 'styled-components'


export const Container = styled.div`
  background: #333;
`

export const Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  h2 {
    color: #fff;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    list-style: none;
    font-size: 1rem;
    width: 300px;

    li  {
      a {
        text-decoration: none;
        color: #fff;

        &:hover {
          color: yellow;
        }
      }
    }
  }
`