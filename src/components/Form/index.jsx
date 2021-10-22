import { Input } from "../Input";
import { Select } from "../Select";
import { Container } from "./styles";


export function Form() {
  return (
    <Container>
      <form action="">
        <Input 
          type="text"
          text="Nome do Projeto"
          name="name"
          placeholder="Insira o nome do projeto"
        />

        <Input 
          type="number"
          text="Orçamento do Projeto"
          name="name"
          placeholder="Insira o orçamento total"
        />
  
        <Select
          name="Category_id"
          text="Selecione a categoria"

        
        />
             
        <div>
          <input type="submit" className="btn" value="Criar Projeto" />
        </div>
      </form>
    </Container>
  )
}