import { ChangeEvent, FC } from "react";
import { Form } from "../../interface/Form.interface";

interface InputPasswordProps {
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  formStatus: Form;
}

const InputPassword: FC<InputPasswordProps> = ({
  formStatus,
  handleInputChange,
}) => {
  return (
    <div>
      <label htmlFor="password">
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          placeholder="Ingresá tu contraseña"
          value={formStatus.password}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default InputPassword;
