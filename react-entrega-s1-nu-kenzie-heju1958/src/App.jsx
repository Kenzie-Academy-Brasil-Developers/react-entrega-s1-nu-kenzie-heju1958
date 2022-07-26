import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import HomePage from "./components/HomePage";

import { useState } from "react";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogout() {
    setIsLoggedIn(!isLoggedIn);
  }

  const [listTransactions, setListTransactions] = useState([]);

  const [filterAll, setFilterAll] = useState(true);
  const [filterSaida, setFilterSaida] = useState(false);
  const [filterEntrada, setFilterEntrada] = useState(false);

  const handleFilter = () => {
    if (filterSaida) {
      return listTransactions.filter(({ type }) => type === "saída");
    }
    if (filterEntrada) {
      return listTransactions.filter(({ type }) => type === "entrada");
    }
    if (filterAll) {
      return listTransactions;
    }
  };

  function removeCard(item) {
    const itemFilter = listTransactions.filter((elem) => elem !== item);
    setListTransactions(itemFilter);
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <header className="header_App">
            <img src="./Assets/nuKenzie.png" alt="logo" className="logo" />{" "}
            <button className="btn_Inicio" onClick={handleLogout}>
              Inicio
            </button>
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
              onClick={(event) => {
                event.preventDefault();
                setFilterEntrada(false);
                setFilterAll(true);
                setFilterSaida(false);
              }}
            >
              Todos
            </button>
            <button
              className="btn_Entradas"
              onClick={(event) => {
                event.preventDefault();
                setFilterEntrada(true);
                setFilterAll(false);
                setFilterSaida(false);
              }}
            >
              Entradas
            </button>
            <button
              className="btn_Saidas"
              onClick={(event) => {
                event.preventDefault();
                setFilterEntrada(false);
                setFilterAll(false);
                setFilterSaida(true);
              }}
            >
              Saidas
            </button>
          </div>
          {handleFilter().length > 0 ? (
            <>
              <List listTransactions={handleFilter()} removeCard={removeCard} />
              <TotalMoney listTransactions={listTransactions} />
            </>
          ) : (
            <>
              <List
                listTransactions={listTransactions}
                removeCard={removeCard}
              />
              <TotalMoney listTransactions={listTransactions} />
            </>
          )}
        </>
      ) : (
        <>
          <HomePage handleLogout={handleLogout} />
        </>
      )}
    </div>
  );
}

export default App;
