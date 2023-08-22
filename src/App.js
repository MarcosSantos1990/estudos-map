import "./App.css";

function App() {
  const cadastro = [
    {
      id: 1,
      nome: "Marcos",
      idade: 33,
      data_nascimento: "08/03/1990",
      nome_da_mãe: " Marina",
      nome_do_pai: "",
    },
    {
      id: 2,
      nome: "Kelly",
      idade: 34,
      data_nascimento: "01/07/1989",
      nome_da_mãe: "Maria",
      nome_do_pai: "Osvaldo",
    },
    {
      id: 3,
      nome: "Carol",
      idade: 32,
      data_nascimento: "05/08/1991",
      nome_da_mãe: "Marta",
      nome_do_pai: "Marcio",
    },
    {
      id: 4,
      nome: "Bruno",
      idade: 30,
      data_nascimento: "02/11/1993",
      nome_da_mãe: " Ana",
      nome_do_pai: "Ronaldo",
    },
    {
      id: 5,
      nome: "Paula",
      idade: 27,
      data_nascimento: "28/09/1996",
      nome_da_mãe: "Thais",
      nome_do_pai: "",
    },
  ];

  return (
    <div className="App">
      {
        cadastro.map(item =>{
          return(
            <div className="container">
            <div>Nome: {item.nome}</div>
            <div>Idade: {item.idade}</div>
            <div> Data de nascimento: {item.data_nascimento}</div>
            <div>Nome do mãe: {item.nome_da_mãe}</div>
            {item.nome_do_pai !== "" && <div>Nome do Pai: {item.nome_do_pai}</div>} <br />
            </div>
          );
        })
      }


    </div>
  );
}

export default App;