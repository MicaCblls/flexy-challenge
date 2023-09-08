import {
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
  MutableRefObject,
  FocusEvent,
} from "react";
import style from "./RegisterForm.module.css";
import Button from "./button/Button";
import { AiOutlineEye } from "react-icons/ai";
import { TbEyeClosed } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Form } from "../interface/Form.interface";
import { validateFullName } from "../validations/fullName.validation";
import { validatePhone } from "../validations/phone.validation";
import { validateEmail } from "../validations/email.validation";
import { validatePassword } from "../validations/password.validation";
import { toBase64 } from "../../utils/FileToBase64";
import { toast } from "react-toastify";
import { validateImage } from "../validations/image.validation";

const RegisterForm = () => {
  const fileInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
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
  const [image, setImage] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const validateBeforeSubmit = (formState: Form) => {
    let errorImageObj = validateImage(formState.image);
    setFormErrorStatus((prev) => ({ ...prev, ...errorImageObj }));

    let errorNameObj = validateFullName(formState.fullName);
    setFormErrorStatus((prev) => ({ ...prev, ...errorNameObj }));

    let errorPhoneObj = validatePhone(formState.phone);
    setFormErrorStatus((prev) => ({ ...prev, ...errorPhoneObj }));

    let errorEmailObj = validateEmail(formState.email);
    setFormErrorStatus((prev) => ({ ...prev, ...errorEmailObj }));

    let errorPasswordObj = validatePassword(formState.password);
    setFormErrorStatus((prev) => ({ ...prev, ...errorPasswordObj }));

    if (
      !formErrorStatus.image.length &&
      !formErrorStatus.fullName.length &&
      !formErrorStatus.phone.length &&
      !formErrorStatus.email.length &&
      !formErrorStatus.password.length
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;

    if (name === "image") {
      if (files?.length) {
        let eventualState = "";

        const reader = new FileReader();

        reader.onload = () => {
          if (typeof reader.result === "string") {
            setImage(reader.result);
          }
        };
        try {
          const res = await toBase64(files[0]);

          eventualState = res;
          setFormStatus((prev) => ({ ...prev, image: eventualState }));
        } catch (e) {
          console.log(e);
        }
        reader.readAsDataURL(files[0]);
      }
    }

    if (name === "fullName") {
      setFormStatus((prev) => ({ ...prev, fullName: value }));
      let errorNameObj = validateFullName(value);
      setFormErrorStatus((prev) => ({ ...prev, ...errorNameObj }));
    }
    if (name === "phone") {
      setFormStatus((prev) => ({ ...prev, phone: value }));
      let errorPhoneObj = validatePhone(value);
      setFormErrorStatus((prev) => ({ ...prev, ...errorPhoneObj }));
    }
    if (name === "email") {
      setFormStatus((prev) => ({ ...prev, email: value }));
      let errorEmailObj = validateEmail(value);
      setFormErrorStatus((prev) => ({ ...prev, ...errorEmailObj }));
    }
    if (name === "password") {
      setFormStatus((prev) => ({ ...prev, password: value }));
      let errorPasswordObj = validatePassword(value);
      setFormErrorStatus((prev) => ({ ...prev, ...errorPasswordObj }));
    }
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let finalValidation = await validateBeforeSubmit(formStatus);
    if (finalValidation) {
      toast.success(
        `¡Bienvenid@ ${formStatus.fullName}! Su registro ha sido exitoso.`,
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setFormStatus({
        image: "",
        fullName: "",
        phone: "",
        email: "",
        password: "",
      });
      setFormErrorStatus({
        image: "",
        fullName: "",
        phone: "",
        email: "",
        password: "",
      });
    }
  };

  const btnDisabled =
    formErrorStatus.image.length ||
    formErrorStatus.fullName.length ||
    formErrorStatus.phone.length ||
    formErrorStatus.email.length ||
    formErrorStatus.password.length ||
    !formStatus.email.length ||
    !formStatus.fullName.length ||
    !formStatus.email.length ||
    !formStatus.password
      ? true
      : false;

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
            <div className={style.inputFileContainer}>
              <input
                type="file"
                id="user-avatar"
                name="image"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleInputChange}
              />
              <label htmlFor="user-avatar">
                <img src="/icono.svg" alt="intup file icon" />{" "}
                <span>Subí tu foto de perfil</span>
                {formStatus.image.length > 0 && (
                  <span className={style.checkIcon}>
                    <BsFillCheckCircleFill />
                  </span>
                )}
              </label>
            </div>
            {formErrorStatus.image.length > 0 && (
              <small className={style.validation}>
                {formErrorStatus.image}
              </small>
            )}
          </div>
          <div
            className={
              formErrorStatus?.fullName?.length
                ? style.inputInvalid
                : style.inputContainer
            }
          >
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
            {formErrorStatus.fullName.length > 0 && (
              <small className={style.validation}>
                {formErrorStatus.fullName}
              </small>
            )}
          </div>

          <div
            className={
              formErrorStatus?.phone?.length
                ? style.inputInvalid
                : style.inputContainer
            }
          >
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
            {formErrorStatus?.phone?.length > 0 && (
              <small className={style.validation}>
                {formErrorStatus.phone}
              </small>
            )}
          </div>

          <div
            className={
              formErrorStatus?.email?.length
                ? style.inputInvalid
                : style.inputContainer
            }
          >
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

            {formErrorStatus?.email?.length > 0 && (
              <small className={style.validation}>
                {formErrorStatus.email}
              </small>
            )}
          </div>

          <div
            className={
              formErrorStatus?.password?.length
                ? style.inputInvalid
                : style.inputContainer
            }
          >
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
            {formErrorStatus?.password?.length > 0 && (
              <small className={style.validation}>
                {formErrorStatus.password}
              </small>
            )}
            <small className={style.forgotPassword}>
              ¿Olvidaste tu contraseña?
            </small>
          </div>
        </div>
        <div className={style.btnContainer}>
          <Button btnDisabled={btnDisabled} />
          <small>
            ¿Ya tenés una cuenta? <strong>Iniciá sesión</strong>{" "}
          </small>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
