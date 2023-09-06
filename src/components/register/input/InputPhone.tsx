import { ChangeEvent, FC } from "react";
import { Form } from "../../interface/Form.interface";

interface InputPhoneProps {
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  formStatus: Form;
}

const InputPhone: FC<InputPhoneProps> = ({ formStatus, handleInputChange }) => {
  return (
    <div>
      <label htmlFor="phone">
        <input
          type="phone"
          name="phone"
          id="phone"
          autoComplete="off"
          placeholder="+54 01 0200 000"
          value={formStatus.phone}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default InputPhone;
