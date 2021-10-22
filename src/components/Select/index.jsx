import { SelectInput } from './styles'


export function Select({text, name}) {
  return (
    <SelectInput>
      <label htmlFor={name}>{text}:</label>
      <select 
        name={name} 
        id={name}
      >
        Selecione uma Opção
      </select>
    </SelectInput>
  )
}