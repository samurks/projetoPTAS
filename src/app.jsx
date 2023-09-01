import './app.css'
import { Exemplo } from './Exemplo'

export default function App() {
  const listaAlunos = [
   {nome: "Daniel",idade: 15,cidade: "Nova andradina"},
   {nome: "Liz",idade: 10,cidade: "Nova andradina"},
   {nome: "Bruno",idade: 11,cidade: "Nova andradina"}
];
    return (
      <div>
        <h1>Hello Word!</h1>
        <Exemplo lista={listaAlunos} />
      </div>
    );
  }
  