import { useState } from "react";

import { Link } from "react-router-dom";

export default function Home() {
   
    return (
        <div>
            <h1>Home</h1>
            <Link class="idPlanetas"to="/todo">Ir para proxima pagina</Link>
        </div>

    );
}