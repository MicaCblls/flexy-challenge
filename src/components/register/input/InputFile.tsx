import { ChangeEvent, FC } from "react";
import { Form } from "../../interface/Form.interface";

interface InputFileProps {
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  formStatus: Form;
}

const InputFile: FC<InputFileProps> = ({ formStatus, handleInputChange }) => {
  return (
    <div>
      <label htmlFor="user-avatar">
        <input
          type="file"
          name="image"
          id="user-avatar"
          value={formStatus.image}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default InputFile;
