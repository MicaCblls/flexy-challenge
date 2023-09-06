import Header from "./components/header/Header";
import "./App.css";
import RegisterForm from "./components/register/RegisterForm";

function App() {
  return (
    <div className="app-container">
      <aside className="left">
        <Header />
        <RegisterForm />
      </aside>
      <aside className="right">
        <img src="/inicia-sesión-agente.png" alt="Inicia sesión agente" />
      </aside>
    </div>
  );
}

export default App;
