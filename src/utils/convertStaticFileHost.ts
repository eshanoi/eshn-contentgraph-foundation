export const convertStaticFileHost = (imageUrl?: string) => {
  return imageUrl?.replace('https://localhost:5001', 'https://inte.eshn.dev');
};
