import { formatText } from "@/utils/formattingUtils";

const ThoughtChosen = ({ thought }: { thought: string | null | undefined }) => {
  const formattedThought = formatText(thought || "");

  return (
    <div className="flex justify-center items-center md:text-body-thin text-base-thin text-gray bg-dark-green-2 lg:px-16 md:px-10 px-5 py-5 rounded-lg gap-5 xs:flex-row flex-col max-w-[64rem]">
      <p className="block xxs:hidden">{formattedThought}</p>
      <p className="hidden xxs:block">{thought}</p>
    </div>
  );
};

export default ThoughtChosen;
