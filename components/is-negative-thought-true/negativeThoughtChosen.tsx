import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import {
  maintainThoughtsDataStoredinRedux,
  selectThought,
} from "@/redux/features/thoughtSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";

const NegativeThoughtChosen = () => {
  const { negativeThought } = useAppSelector(selectThought);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(maintainThoughtsDataStoredinRedux());
  }, []);

  return (
    <div className="flex justify-center items-center text-body-thin text-gray bg-dark-green-2 lg:px-16 md:px-10 px-5 py-5 rounded-lg gap-5 xs:flex-row flex-col">
      <Image
        src="/home/head-icon.svg"
        alt="head icon accompanying the negative thought"
        width={30}
        height={30}
      />
      <p>{negativeThought}</p>
    </div>
  );
};

export default NegativeThoughtChosen;
