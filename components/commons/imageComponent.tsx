import Image from "next/image";

interface ImageComponentProps {
  image: string;
  alt: string;
}

const ImageComponent = ({ image, alt }: ImageComponentProps) => {
  return (
    <Image
      src={image}
      alt={alt}
      width={2000}
      height={2000}
      className="rounded-xl w-full"
    />
  );
};

export default ImageComponent;
