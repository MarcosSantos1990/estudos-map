import "./App.css";

function App() {
  const formulario = [
    {
      nome: "Marcos",
      sobrenome: "fernandes",
      email: "marcos@teste.com.br",
      habilitado: false,
    },
    {
      nome: "Bruna",
      sobrenome: "alves",
      email: "bruna@teste.com.br",
      habilitado: true,
    },
    {
      nome: "Camila",
      sobrenome: "Oliveira",
      email: "camila@teste.com.br",
      habilitado: false,
    },
    {
      nome: "Cedric",
      sobrenome: "Santos",
      email: "cedric@teste.com.br",
      habilitado: true,
    },
  ];

  const filtrando = formulario.filter((itemFormulario) => {
    return itemFormulario.habilitado === false;
  });

  

  const mercado = [
    {
      fruta: "abacaxi",
      limpeza: " sabão",
      mistura: "tulipa",
    },
    {
      fruta: "maçã",
      limpeza: " detergênte",
      mistura: "calabresa",
    },
    {
      fruta: "abacaxi",
      limpeza: "desenfetante",
      mistura: "figado",
    },
  ];

  const lista = mercado.filter((itemMercado) => {
    return itemMercado.fruta === "abacaxi";
  });
  
  return (
    <div className="App">
      <div className="list-1">
        {filtrando.map((item) => {
          return (
            <div className="container">
              <div>{item.nome}</div>
              <div>{item.sobrenome}</div>
              <div>{item.email}</div>
              <div>{item.habilitado}</div>
              <br />
            </div>
          );
        })}

      </div>
      <div className="list-2">
        {lista.map((item) => {
          return (
            <div className="container">
              <div>{item.fruta}</div>
              <div>{item.limpeza}</div>
              <div>{item.mistura}</div>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
  


};


export default App;