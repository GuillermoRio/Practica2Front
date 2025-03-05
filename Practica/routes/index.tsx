import axios from "npm:axios";
import Preguntas from "../components/Preguntas.tsx";
import Respuestas from "../islands/Respuestas.tsx";

type Pregunta = {
  question: string;
  answer: string;
};

export default async function Home() {
  try{
    const respuesta = await axios.get<Pregunta[]>("https://api.api-ninjas.com/v1/trivia", {
      headers: {
        "X-Api-Key": "o41UmkM39ZTvU9n00j/IIg==H9RI53qcyieVU6GE",
      },
    });
    const pregunta = respuesta.data[0].question;
    const respuestaCorrecta = respuesta.data[0].answer;
    return (
      <div>
        <h1 style="padding-top: 200px"> TRIVIA </h1>
        <Preguntas question={pregunta} />
        <Respuestas answer={respuestaCorrecta} />
      </div>

    );
  }catch(e){
    return <div> Error</div>
  }
  
}
