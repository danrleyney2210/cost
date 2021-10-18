import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { Container, Content } from './styles'

export function Footer() {
  return (
    <Container >
      <Content>
    
        <ul>
          <li>
            <FaFacebook />
          </li>
          <li>
            < FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
      </Content>
    </Container>
  )
}