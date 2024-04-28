import Image from "next/image";

interface SocialMediaIconProps {
  href: string;
  src: string;
  alt: string;
}

const socialMediaIcon = ({ href, src, alt }: SocialMediaIconProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="cursor-pointer">
      <Image src={src} alt={alt} width={100} height={100} />
    </a>
  );
};

export default socialMediaIcon;
