import { ChangeEvent, FC } from "react";
import { Form } from "../../interface/Form.interface";

interface InputEmailProps {
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  formStatus: Form;
}

const InputEmail: FC<InputEmailProps> = ({ formStatus, handleInputChange }) => {
  return (
    <div>
      <label htmlFor="email">
        <input
          type="email"
          placeholder="hola@tuemail.com"
          id="email"
          name="email"
          autoComplete="off"
          value={formStatus.email}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default InputEmail;
