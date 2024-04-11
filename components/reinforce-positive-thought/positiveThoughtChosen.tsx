import { useAppSelector } from "@/redux/hooks";
import { selectThought } from "@/redux/features/thoughtSlice";

const formatPositiveThought = (positiveThought: string) => {
  const words = positiveThought?.split(" ");
  const formattedWords = words
    ? words.map((word) => {
        if (word.length > 15) {
          const matchedWords = word.match(/.{1,15}/g);
          return matchedWords ? matchedWords.join(" ") : "";
        }
        return word;
      })
    : [];
  return formattedWords.join(" ");
};

const PositiveThoughtChosen = () => {
  const { positiveThought } = useAppSelector(selectThought);
  const formattedPositiveThought = formatPositiveThought(positiveThought || "");

  return (
    <div className="flex justify-center items-center md:text-body-thin text-base-thin text-gray bg-dark-green-2 lg:px-16 md:px-10 px-5 py-5 rounded-lg gap-5 xs:flex-row flex-col max-w-[1024px]">
      <p>{formattedPositiveThought}</p>
    </div>
  );
};

export default PositiveThoughtChosen;
