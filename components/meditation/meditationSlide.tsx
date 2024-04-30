import { useSetSelectedIndexInList } from "@/hooks/useSetSelectedIndexInList";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import VideoComponent from "./videoComponent";

interface Thought {
  id: number;
  url: string;
}

interface listOfMeditations {
  list1: Thought[];
  list2: Thought[];
  list3: Thought[];
}

const MeditationSlide = ({ list1, list2, list3 }: listOfMeditations) => {
  const { currentIndex, handleNext, handlePrevious } =
    useSetSelectedIndexInList(list1);

  return (
    <>
      <div className="flex md:p-5 p-4 rounded-xl items-center justify-between">
        <div>
          <ChevronLeftIcon
            className="md:h-8 md:w-8 h-5 w-5 cursor-pointer text-white"
            onClick={handlePrevious}
          />
        </div>
        {list1.map((thought: Thought, index: number) => (
          <div key={index}>
            <VideoComponent
              index={index}
              currentIndex={currentIndex}
              url={thought.url}
            />
          </div>
        ))}
        <div className="hidden sm2:block">
          {list2.map((thought: Thought, index: number) => (
            <div key={index}>
              <VideoComponent
                index={index}
                currentIndex={currentIndex}
                url={thought.url}
              />
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          {list3.map((thought: Thought, index: number) => (
            <div key={index}>
              <VideoComponent
                index={index}
                currentIndex={currentIndex}
                url={thought.url}
              />
            </div>
          ))}
        </div>
        <div>
          <ChevronRightIcon
            className="md:h-8 md:w-8 h-5 w-5 cursor-pointer text-white"
            onClick={handleNext}
          />
        </div>
      </div>
    </>
  );
};

export default MeditationSlide;
