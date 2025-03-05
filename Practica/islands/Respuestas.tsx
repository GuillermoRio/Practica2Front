import { FunctionComponent } from "preact";
import { useSignal } from "@preact/signals";

type TriviaPropR ={
    answer: string;
};

const Respuesta: FunctionComponent<TriviaPropR> = (Props) => {
    const { answer } = Props;
    const respuesta = useSignal("");
    return (
      <>
        <h2>{answer}</h2>
        <input type="text" 
        value={respuesta.value}
        onChange={(e) => respuesta.value = e.currentTarget.value}
        ></input><br></br>
        <button 
        onClick={() => {
          if((respuesta.value).toUpperCase() === answer.toUpperCase()){
            window.location.href = "/acierto"
          }
          else{
            window.location.href = "/fallo"
          }
        }
        }
        >
          Enviar
        </button>
      </> 
    );
  }

export default Respuesta;
  