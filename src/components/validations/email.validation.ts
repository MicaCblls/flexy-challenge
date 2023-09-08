export const validateEmail = (input: string) => {
  let error = {
    email: "",
  };
  if (input.length && !/\S+@\S+\.\S+/.test(input)) {
    error.email = "Ingresa un email valido, por ejemplo: hola@tuemail.com";
  }
  if (!input.length) {
    error.email = "Email requerido";
  }
  return error;
};
