import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function Home() {
   
    return (
        <div>
            <h1>BEM VINDO</h1>
            <Link to="/todo">Ir para lista de planetas</Link>
        </div>

    );
}