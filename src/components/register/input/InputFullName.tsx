import { ChangeEvent, FC } from "react";
import { Form } from "../../interface/Form.interface";

interface InputFullNameProps {
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  formStatus: Form;
}

const InputFullName: FC<InputFullNameProps> = ({
  formStatus,
  handleInputChange,
}) => {
  return (
    <div>
      <label htmlFor="fullName">
        <input
          type="text"
          name="fullName"
          id="fullName"
          autoComplete="off"
          placeholder="Nombre y Apellido"
          value={formStatus.fullName}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default InputFullName;
