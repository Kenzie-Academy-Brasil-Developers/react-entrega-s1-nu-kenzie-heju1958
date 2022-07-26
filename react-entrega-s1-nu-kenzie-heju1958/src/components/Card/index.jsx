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
        <>
          {transaction.type === "entrada" ? (
            <div className="div_Card--type--entrada">
              <span className="span_entrada">{transaction.type}</span>
            </div>
          ) : (
            <div className="div_Card--type--saida">
              <span className="span_saida">{transaction.type}</span>
            </div>
          )}
        </>
        <div className="div_Card--value">R$ {transaction.value},00</div>
      </li>
    </>
  );
};

export default Card;
