export const toBase64 = async (file: Blob): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      }
    };
    reader.readAsDataURL(file);
  });
};
