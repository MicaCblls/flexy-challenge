export const validateImage = (input: string) => {
  let error = {
    image: "",
  };

  if (!input.length) {
    error.image = "Imagen requerida";
  }

  return error;
};
