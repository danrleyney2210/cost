import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  margin: 1rem;

  a {
    background: #222;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #fff;

    &:hover {
      color: yellow;
    }
  }
`

export function LinkButton({ to, text}) {
  return(
    <Container>
      <Link to={to}>
        {text}
      </Link>
    </Container>
  )
}