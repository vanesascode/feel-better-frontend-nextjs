import Image from "next/image";

const LoadingCircle = () => {
  return (
    <div className="bg-[#000000] flex justify-center items-center h-[50vh]">
      <Image
        src="/loading.gif"
        alt="loading"
        width={400}
        height={400}
        className="p-[50px]"
      />
    </div>
  );
};

export default LoadingCircle;
