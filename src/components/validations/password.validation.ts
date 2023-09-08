export const validatePassword = (input: string) => {
  let error = {
    password: "",
  };

  if (input.length && input.length < 8) {
    error.password = "Debe tener al menos 8 caracteres.";
  }
  if (!input.length) {
    error.password = "Contaseña requerida.";
  }

  return error;
};
