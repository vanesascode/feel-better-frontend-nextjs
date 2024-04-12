export const formatText = (text: string) => {
  const words = text?.split(" ");
  const formattedWords = words
    ? words.map((word) => {
        if (word.length > 23) {
          const matchedWords = word.match(/.{1,23}/g);
          return matchedWords ? matchedWords.join(" ") : "";
        }
        return word;
      })
    : [];
  return formattedWords.join(" ");
};
