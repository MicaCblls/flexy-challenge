import { useState, ChangeEvent, FormEvent } from "react";
import style from "./RegisterForm.module.css";
import Button from "./button/Button";
import { AiOutlineEye } from "react-icons/ai";
import { TbEyeClosed } from "react-icons/tb";
import { Form } from "../interface/Form.interface";

const RegisterForm = () => {
  const [formStatus, setFormStatus] = useState<Form>({
    image: "",
    fullName: "",
    phone: "",
    email: "",
    password: "",
  });
  const [formErrorStatus, setFormErrorStatus] = useState<Form>({
    image: "",
    fullName: "",
    phone: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormStatus((prev) => ({ ...prev, [name]: value }));
  };
  console.log(formStatus);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className={style.registerContainer}>
      <div className={style.titleContainer}>
        <h1>¡Bienvenido!</h1>
        <span className={style.subtitle}>
          Convertite ahora en un agente Flexy.
        </span>
      </div>
      <form className={style.form} onSubmit={handleFormSubmit}>
        <div className={style.formContainer}>
          <div className={style.inputFile}>
            <input
              type="file"
              id="user-avatar"
              name="image"
              style={{ display: "none" }}
              value={formStatus.image}
              onChange={handleInputChange}
            />
            <label htmlFor="user-avatar">
              <img src="/icono.svg" alt="intup file icon" />{" "}
              <span>Subí tu foto de perfil</span>
            </label>
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="fullName">Nombre y Apellido</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={style.input}
              autoComplete="off"
              placeholder="Nombre y Apellido"
              value={formStatus.fullName}
              onChange={handleInputChange}
            />
            <small className={style.validation}>
              Debe tener al menos 8 caracteres.
            </small>
          </div>

          <div className={style.inputContainer}>
            <label htmlFor="phone">Teléfono</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              className={style.input}
              autoComplete="off"
              placeholder="+54 01 0200 000"
              value={formStatus.phone}
              onChange={handleInputChange}
            />
            <small className={style.validation}>
              Debe tener al menos 8 caracteres.
            </small>
          </div>

          <div className={style.inputContainer}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="hola@tuemail.com"
              id="email"
              name="email"
              className={style.input}
              autoComplete="off"
              value={formStatus.email}
              onChange={handleInputChange}
            />

            <small className={style.validation}>
              Debe tener al menos 8 caracteres.
            </small>
          </div>

          <div className={style.passwordContainer}>
            <label htmlFor="password">Contraseña</label>
            <div className={style.inputPassword}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className={style.input}
                autoComplete="off"
                placeholder="Ingresá tu contraseña"
                value={formStatus.password}
                onChange={handleInputChange}
              />
              <span
                className={style.eyeContainer}
                onClick={handleTogglePassword}
              >
                {showPassword ? <AiOutlineEye /> : <TbEyeClosed />}
              </span>
            </div>
            <small className={style.validationPassword}>
              Debe tener al menos 8 caracteres.
            </small>
            <small className={style.forgotPassword}>
              ¿Olvidaste tu contraseña?
            </small>
          </div>
        </div>
        <div className={style.btnContainer}>
          <Button btnDisabled={false} />
          <small>
            ¿Ya tenés una cuenta? <strong>Iniciá sesión</strong>{" "}
          </small>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
