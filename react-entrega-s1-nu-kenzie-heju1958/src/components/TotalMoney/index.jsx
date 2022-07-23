import "./totalMoney.css";

const TotalMoney = ({ listTransactions }) => {
  const sum = listTransactions.reduce((acc, elem) => {
    return acc + elem.value;
  }, 0);

  return (
    <div className="div_totalMoney">
      <span>Valor total: R$ {sum},00</span>
      <p className="p_totalMoney">O valor se refere ao saldo</p>
    </div>
  );
};

export default TotalMoney;
