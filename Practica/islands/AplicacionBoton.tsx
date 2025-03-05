export default function Retorno() {
  return (
    <>
      <button class="botonesVolver" onClick={() => {
          window.location.href = "/";
      }}
          > 
          Volver a jugar
          </button>
    </>
  );
}
