import { LinkButton } from "../LinkButton";
import { Container, Content } from "./styles";


export function Home() {
  return (
    <Container>
      <Content>
        <h1>Bem-vindo ao <span>Cost</span></h1>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to="/newProject" text="Criar Projeto"/>     
      </Content>
    </Container>
  )
}