import SelectorButton from "../commons/selectorButton";

interface FeelingFilterOfThoughtsProps {
  //eslint-disable-next-line
  fetchThoughtsByFeeling: (feeling: string) => void;
}
const FeelingFilterOfThoughts = ({
  fetchThoughtsByFeeling,
}: FeelingFilterOfThoughtsProps) => {
  return (
    <section className="grid grid-cols-2 sm:flex xl:gap-5 gap-3 text-cover2-semibold justify-center lg:justify-start  lg:mt-5 lg:mb-0 md:my-5 my-4 ">
      <SelectorButton onClick={() => fetchThoughtsByFeeling("😀")}>
        <div className="md:text-cover4-semibold text-heading3-bold m-[-0.3rem]">
          😀
        </div>
      </SelectorButton>
      <SelectorButton onClick={() => fetchThoughtsByFeeling("🙂")}>
        <div className="md:text-cover4-semibold text-heading3-bold m-[-0.3rem]">
          🙂
        </div>
      </SelectorButton>
      <SelectorButton onClick={() => fetchThoughtsByFeeling("😐")}>
        <div className="md:text-cover4-semibold text-heading3-bold m-[-0.3rem]">
          😐
        </div>
      </SelectorButton>
      <SelectorButton onClick={() => fetchThoughtsByFeeling("🙁")}>
        <div className="md:text-cover4-semibold text-heading3-bold m-[-0.3rem]">
          🙁
        </div>
      </SelectorButton>
    </section>
  );
};

export default FeelingFilterOfThoughts;
