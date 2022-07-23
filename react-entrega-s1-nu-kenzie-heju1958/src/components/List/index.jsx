import Card from "../Card";

import "./list.css";

const List = ({ listTransactions, removeCard }) => {
  return (
    <>
      <ul className="ul_List">
        {listTransactions.length > 0 ? (
          listTransactions.map((transaction, index) => (
            <Card
              transaction={transaction}
              key={index}
              removeCard={removeCard}
            />
          ))
        ) : (
          <div className="div_noItems">
            <p className="div_noItems--p">
              Você ainda não possui nenhum lançamento
            </p>
            <img src="./Assets/noItems.png" alt="noItems" />
            <img src="./Assets/noItems.png" alt="noItems" />
            <img src="./Assets/noItems.png" alt="noItems" />
          </div>
        )}
      </ul>
    </>
  );
};

export default List;
