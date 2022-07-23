import { useState } from "react";

import "./form.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [userInputDescription, setUserInputDescription] = useState("");
  const [userInputValue, setUserInputValue] = useState("");
  const [userInputSelect, setUserInputSelect] = useState("entrada");

  const inputsValue = () => {
    const obj = {
      description: userInputDescription,
      type: userInputSelect,
      value: Number(userInputValue),
    };
    setListTransactions([obj, ...listTransactions]);
  };

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <label>Descrição</label>
        <input
          type="text"
          placeholder="Digite aqui sua descrição"
          value={userInputDescription}
          onChange={(event) => setUserInputDescription(event.target.value)}
        />
        <p className="p_form">Ex: Compra de roupas</p>
        <label className="label_valor">Valor</label>
        <input
          type="number"
          placeholder="R$"
          value={userInputValue}
          onChange={(event) => setUserInputValue(event.target.value)}
        />
        <label>Tipo de valor</label>
        <select
          value={userInputSelect}
          onChange={(event) => setUserInputSelect(event.target.value)}
        >
          <option value="entrada">Entrada</option>
          <option value="saída">Saída</option>
        </select>
        <button
          className="btn_form"
          type="submit"
          onClick={() => {
            inputsValue();
          }}
        >
          Inserir Valor
        </button>
      </form>
    </>
  );
};

export default Form;
