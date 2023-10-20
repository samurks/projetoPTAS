import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("lista")) || [];
  const [atividade, setAtividade] = useState("");
  const [lista, setLista] = useState(listaLocalStorage);
  const [id, setId] = useState(1);
  const [imagem, setImagem] = useState("");

  useEffect(() => {
    localStorage.setItem("lista", JSON.stringify(lista));
  }, [lista]);

  const salvar = (e) => {
    e.preventDefault();
    setLista([
      ...lista,
      {
        atividade: atividade,
        id: id,
        imagem: imagem,
      },
    ]);
    setId(id + 1);
    setAtividade("");
    setImagem("");
  };

  const remover = (id) => {
    const novaLista = lista.filter((ativ) => ativ.id !== id);
    setLista(novaLista);
  };

  return (
    <div className="lista-planetas">
       <Link to="/" className="link-home">Voltar para a página principal</Link>
        <h1>Lista de Planetas</h1>
        <div className="form-container">
            <form onSubmit={salvar}>
                <input
                    type="text"
                    value={atividade}
                    onChange={(e) => setAtividade(e.target.value)}
                    placeholder="Planeta"
                />
                
        
                <input
                    type="text"
                    value={imagem}
                    onChange={(e) => setimagem(e.target.value)}
                    placeholder="URL da Imagem"
                />
                <button>ADICIONAR</button>
            </form>
        </div>
        {lista.map((ativ) => (
            <ul key={ativ.id}>
                <li>
                    <p className="idAtiv"> {ativ.id} {ativ.atividade} 
                    </p>
                    <img className="Planeta"src={ativ.imagem}></img>
                    <br></br>
                    <button className="remove-button" onClick={() => remover(ativ.id)}>
                        Remover
                    </button>
                </li>
            </ul>
        ))}
    </div>
);
}