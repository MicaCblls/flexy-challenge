import { useState, ChangeEvent, FormEvent } from "react";
import style from "./RegisterForm.module.css";
import Button from "./button/Button";
import InputEmail from "./input/InputEmail";
import InputFile from "./input/InputFile";
import InputFullName from "./input/InputFullName";
import InputPassword from "./input/InputPassword";
import InputPhone from "./input/InputPhone";
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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormStatus((prev) => ({ ...prev, [name]: value }));
  };
  console.log(formStatus);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    console.log(event.target);
  };

  return (
    <div className={style.formContainer}>
      <div>
        <h1>¡Bienvenido!</h1>
        <span>Convertite ahora en un agente Flexy.</span>
      </div>
      <form className={style.form} onSubmit={handleFormSubmit}>
        <InputFile
          formStatus={formStatus}
          handleInputChange={handleInputChange}
        />
        <InputFullName
          formStatus={formStatus}
          handleInputChange={handleInputChange}
        />
        <InputPhone
          formStatus={formStatus}
          handleInputChange={handleInputChange}
        />
        <InputEmail
          formStatus={formStatus}
          handleInputChange={handleInputChange}
        />
        <InputPassword
          formStatus={formStatus}
          handleInputChange={handleInputChange}
        />
        <Button />
      </form>
    </div>
  );
};

export default RegisterForm;
