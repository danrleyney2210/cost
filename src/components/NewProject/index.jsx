import { Form } from '../Form'
import { Container, Content } from './styles'

export function NewProject() {
  return (
    <Container>
      <Content>
        <h1>Criar Projeto</h1>
        <p>Cire seu projeto para depois adcionar os serviços</p>
        <Form />
      </Content>
    </Container>
  )
}