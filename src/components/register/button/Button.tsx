import style from "./Button.module.css";
import { FC } from "react";

interface ButtonProps {
  btnDisabled: boolean;
}

const Button: FC<ButtonProps> = ({ btnDisabled }) => {
  return (
    <>
      <button type="submit" className={style.button} disabled={btnDisabled}>
        Registrate
      </button>
    </>
  );
};

export default Button;
