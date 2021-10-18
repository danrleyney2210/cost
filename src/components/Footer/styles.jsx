import styled  from 'styled-components'


export const Container = styled.div`
  background: #333;
`
export const Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    width: 100px;
    display: flex;
    justify-content: space-around;
    list-style: none;

    li {
      font-size: 1rem;
      color: #fff;
    }
  }
`