import { FunctionComponent } from "preact";

type TriviaPropP ={
    question: string;
};

const Pregunta: FunctionComponent<TriviaPropP> = (Props) => {
    const { question } = Props;
    return (
      <div>
        <h2>{question}</h2>
      </div> 
    );
  }

export default Pregunta;
  