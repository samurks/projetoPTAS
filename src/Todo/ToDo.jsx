import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Importe o arquivo de estilos

export default function ToDo() {
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState([]);
    const [id, setId] = useState(1);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            id: id
        }]);
        setId(id + 1);
        setAtividade("");
    };

    const remover = (id) => {
        const auxLista = lista.filter((ativ) => ativ.id !== id);
        setLista(auxLista);
    }

    return (
        <div class="lista-planetas">
           <Link to="/" class="link-home">Voltar para a página principal</Link>
            <h1>Lista de Planetas</h1>
            <div class="form-container">
                <form onSubmit={salvar}>
                    <input
                        type="text"
                        value={atividade}
                        onChange={(e) => setAtividade(e.target.value)}
                    />
                    <button>ADICIONAR</button>
                </form>
            </div>
            {lista.map((ativ) => (
                <ul key={ativ.id}>
                    <li>
                        <p>{ativ.id} {ativ.atividade}</p>
                        <button class="remove-button" onClick={() => remover(ativ.id)}>
                            Remover
                        </button>
                    </li>
                </ul>
            ))}
        </div>
    );
}
