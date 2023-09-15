import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Importe o arquivo de estilos

export default function ToDo() {
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState([]);
    const [id, setId] = useState(1);
    const [imagem, setimagem] = useState("");

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            id: id,
            imagem:imagem
        }]);
        setId(id + 1);
        setAtividade("");
        setimagem("");
        
    };

    const remover = (id) => {
        /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/
        const auxLista = [];
        lista.map((lista) => {
            if (lista.id !== id) {
                auxLista.push(lista);
            }
        });
        setLista(auxLista);
 
    }

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
                    />
                    
            
                    <input
                        type="text"
                        value={imagem}
                        onChange={(e) => setimagem(e.target.value)}
                    />
                    <button>ADICIONAR</button>
                </form>
            </div>
            {lista.map((ativ) => (
                <ul key={ativ.id}>
                    <li>
                        <p className="idAtiv"> {ativ.id} {ativ.atividade} 
                        </p>
                        <img src={ativ.imagem}></img>
                        <button className="remove-button" onClick={() => remover(ativ.id)}>
                            Remover
                        </button>
                    </li>
                </ul>
            ))}
        </div>
    );
}
