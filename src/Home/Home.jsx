import { useState } from "react";

import { Link } from "react-router-dom";

export default function Home() {
   
    return (
        <div class="containerHome">
            <h1>Agenda planetaria</h1>
            <p>Explore o fascinante mundo dos planetas e da astrologia!</p>
            <Link class="linkHome" to="/todo">Ir para proxima pagina</Link>
        </div>
    );
}