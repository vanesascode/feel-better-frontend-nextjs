import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface Meditation {
  id: number;
  url: string;
}

const MeditationSlide = ({ list }: { list: Meditation[] }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {list.map((meditation: Meditation) => (
          <div key={meditation.id}>
            <iframe
              src={meditation.url}
              title="0"
              allowFullScreen
              className="w-full px-5 xxxxl:h-[15.5rem] lg:h-[14.5rem] md:h-[15.5rem] xxs:h-[10.5rem] xs:h-[12rem] sm:h-[13rem] sm1:h-[9.75rem] sm2:h-[10.5rem] h-[10rem]"
            ></iframe>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default MeditationSlide;
