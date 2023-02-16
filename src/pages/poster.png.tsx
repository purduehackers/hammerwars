import horse from "../../public/horse.gif";
import Image from "next/image";

const PosterPng = () => {
  return (
    <Image src={"/about/poster.png"} alt="poster" width={500} height={500} />
  );
};

export default PosterPng;
