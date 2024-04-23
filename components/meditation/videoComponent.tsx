interface VideoComponentProps {
  url: string;
  index: number;
  currentIndex: number;
}

const VideoComponent = ({ url, index, currentIndex }: VideoComponentProps) => {
  return (
    <div
      key={index}
      className={`${index === currentIndex ? "block" : "hidden"} px-5`}
    >
      <iframe
        src={url}
        title="meditation video"
        allowFullScreen
        className="w-full xxxxl:h-[15.5rem] lg:h-[14.5rem] md:h-[15.5rem] xxs:h-[11.5rem] xs:h-[12rem] sm:h-[13rem] sm1:h-[11.75rem] sm2:h-[11.5rem] h-[12rem]"
      ></iframe>
    </div>
  );
};

export default VideoComponent;
