import { Link } from 'react-router-dom'
import { Container, Content } from './styles'
import { logo } from './../../assets/logo.png'

export function Navbar() {
  return (
    <Container>
      <Content >
        <h2>Logo</h2>      
        <ul>
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/company">Company</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/newProject">New Project</Link></li>      
        </ul>
      </Content>
    </Container>
  )
}