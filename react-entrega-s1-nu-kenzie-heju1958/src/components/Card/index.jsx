import "./card.css";

const Card = ({ transaction, index, removeCard }) => {
  return (
    <>
      <li key={index} className="li_Card">
        <div className="div_Card--description">
          {transaction.description}
          <button
            className="btn_Remove"
            onClick={() => {
              removeCard(transaction);
            }}
          >
            <img src="./Assets/trash.png" alt="excluir" className="icon_Card" />
          </button>
        </div>
        <div className="div_Card--type">{transaction.type}</div>
        <div className="div_Card--value">R$ {transaction.value},00</div>
      </li>
    </>
  );
};

export default Card;
