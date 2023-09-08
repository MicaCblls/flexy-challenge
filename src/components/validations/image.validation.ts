export const validateImage = (input: FileList | null) => {
  let error = {
    image: "",
  };

  if (!input) {
    error.image = "Imagen requerida";
  }

  return error;
};
