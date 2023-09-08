export const validateFullName = (input: string) => {
  let error = {
    fullName: "",
  };

  if (input.length && !/^[A-Z][a-zA-ZÀ-ÿ\s]{1,40}$/.test(input)) {
    error.fullName =
      "Ingresa un nombre válido, debe iniciar con mayúscula y contener solo letras.";
  }

  if (!input.length) {
    error.fullName = "Nombre y Apellido requerido.";
  }

  return error;
};
