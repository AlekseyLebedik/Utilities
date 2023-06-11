export const keyGenerate = (key, length = 20) => {
  const characters = "abcdefghijklmnopqrstuvwxyz";

  let word;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);

    const randomChar = characters[randomIndex];

    word += randomChar;
  }

  return key + word;
};
