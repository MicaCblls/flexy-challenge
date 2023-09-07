import Header from "./components/header/Header";
import "./App.css";
import RegisterForm from "./components/register/RegisterForm";

function App() {
  return (
    <div className="app-container">
      <aside className="register">
        <Header />
        <RegisterForm />
      </aside>
      <aside className="picture"></aside>
    </div>
  );
}

export default App;
