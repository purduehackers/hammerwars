import SmallWindow from "components/small-window";
import Image from "next/image";

const PosterV2 = () => {
  const content = (
    <Image src={"/about/poster.png"} alt="poster" width={500} height={500} />
  );
  return (
    <SmallWindow content={content} title={"poster.png"} link={"/poster.png"} />
  );
};

export default PosterV2;
