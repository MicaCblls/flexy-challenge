export const validatePhone = (input: string) => {
  let error = {
    phone: "",
  };
  if (
    input.length &&
    !/^(\+\d{1,2}\s?)?\(?\d{1,4}\)?[\s.-]?\d{1,3}[\s.-]?\d{1,4}[\s.-]?\d{1,4}$/.test(
      input
    )
  ) {
    error.phone = "Ingresa un teléfono valido, por ejemplo: +54 9 01 0200 000.";
  }
  if (!input.length) {
    error.phone = "Teléfono requerido.";
  }
  return error;
};
