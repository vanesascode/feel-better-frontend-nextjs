import Image from "next/image";

interface ActivityImageProps {
  image: string;
  alt: string;
}

const ActivityImage = ({ image, alt }: ActivityImageProps) => {
  return (
    <Image
      src={image}
      alt={alt}
      width={1000}
      height={1000}
      className="rounded-xl w-full"
    />
  );
};

export default ActivityImage;
