import "./homePage.css";

const HomePage = ({ handleLogout }) => {
  return (
    <>
      <div className="div_homePage">
        <div className="div_homePage--textos">
          <img src="./Assets/nuKenzieBranco.png" alt="logo" className="logoHome" />
          <p className="p1">Centralize o controle das suas finanças</p>
          <p className="p2">de forma rápida e segura</p>
          <button onClick={handleLogout} className="button_homePage">
            Iniciar
          </button>
        </div>
        <img
          src="./Assets/homePageImage.svg"
          alt="Homepage"
          className="img_homePage"
        ></img>
      </div>
    </>
  );
};

export default HomePage;
