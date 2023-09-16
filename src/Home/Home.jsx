import { useState } from "react";

import { Link } from "react-router-dom";

export default function Home() {
   
    return (
        <div className="containerHome">
            <h1>AGENDA PLANETARIA</h1>
            <p>Organize e Explore o fascinante mundo dos planetas e da astrologia!</p>
            <br></br>
            <Link className="link-agenda" to="/todo">Ir para proxima pagina</Link>
        </div>
    );
}