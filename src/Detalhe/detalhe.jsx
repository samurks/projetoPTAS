import { useParams } from "react-router-dom";
import Card from "../componentes/card";

export default function Detalhe(){
    const { id } = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"));
    const planeta = lista.filter( (planeta) => {
        if([planeta].id == id){
            return planeta;
        }
        return null;
    })

    return(
         <Card planeta={planeta[0]}></Card>
    );

}