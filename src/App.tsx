import Header from "./components/header/Header";
import "./App.css";
import RegisterForm from "./components/register/RegisterForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app-container">
      <ToastContainer />
      <aside className="register">
        <Header />
        <RegisterForm />
      </aside>
      <aside className="picture"></aside>
    </div>
  );
}

export default App;
