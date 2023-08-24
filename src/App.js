import React, { useState } from "react";

function App() {
  const [numero, setNumero] = useState(0);
  const valorfixo = 4;
  const mudar = (e) => {
    setNumero(JSON.parse(e.target.value));
  };

  const calcular = () => {
    const resultado = numero + valorfixo;
    alert(resultado);
  };

  function alerta() {
    alert("Você conseguiu!");
  }
  return (
    <div>
      <input type="number" onChange={mudar} />
      <button onClick={calcular}>Somar</button> <br/> <br/>

      <div onClick={alerta}><h1>Clique aqui </h1> </div>
      
    </div>
  );
}

export default App;
