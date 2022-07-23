import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

import { useState } from "react";

import "./App.css";

//estilo = figma(form)

//*card => entrada terá um detalhe verde no card,
// e caso seja saída esse detalhe será cinza.

// extras:
//pagina inicial

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  const [filterAll, setFilterAll] = useState([]);

  function removeCard(item) {
    const itemFilter = listTransactions.filter((elem) => elem !== item);
    setListTransactions(itemFilter);
  }

  function filterEntradas() {
    const filterAllCards = listTransactions.filter(
      (elem) => elem.type === "entrada"
    );
    setFilterAll(filterAllCards);
  }

  function filterSaidas() {
    const filter = listTransactions.filter((elem) => elem.type === "saída");
    setFilterAll(filter);
  }

  return (
    <div className="App">
      <header className="header_App">
        <img src="./Assets/Nu kenzie.png" alt="logo" className="logo" />{" "}
        <button className="btn_Inicio">Inicio</button>
      </header>
      <Form
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      />
      <div className="div_App">
        <p>Resumo financeiro</p>
      </div>
      <div className="div_Btns">
        <button
          className="btn_Todos"
          onClick={() => {
            setFilterAll([]);
          }}
        >
          Todos
        </button>
        <button
          className="btn_Entradas"
          onClick={() => {
            filterEntradas(filterAll);
          }}
        >
          Entradas
        </button>
        <button
          className="btn_Saidas"
          onClick={() => {
            filterSaidas(filterAll);
          }}
        >
          Saidas
        </button>
      </div>
      {filterAll.length > 0 ? (
        <>
          <List listTransactions={filterAll} removeCard={removeCard} />
          <TotalMoney listTransactions={filterAll} />
        </>
      ) : (
        <>
          <List listTransactions={listTransactions} removeCard={removeCard} />
          <TotalMoney listTransactions={listTransactions} />
        </>
      )}
    </div>
  );
}

export default App;
