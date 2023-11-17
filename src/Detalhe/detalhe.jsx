import { useParams } from "react-router-dom";

export default function Detalhe(){
    const { id } = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"));
    const atividade = lista.filter( (ativ) => {
        if(ativ.id == id){
            return ativ;
        }
        return null;
    })

    console.log(atividade);

    return(
         <Card produto={atividade[0]}/>
    );

}