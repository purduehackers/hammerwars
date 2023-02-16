import SmallWindow from "components/small-window";
import Image from "next/image";

const picCount = 9;
const picDirs: string[] = [];

for (let i = 0; i < picCount; ++i) {
  picDirs.push(`/about/pic/${i}.JPG`);
}

const PicWindow = () => {
  const randomI = Math.floor(Math.random() * picCount);
  const imgURL = picDirs[randomI];

  const content = (
    <Image src={imgURL} alt="random pic" width={500} height={500} />
  );

  return (
    <SmallWindow content={content} title={"random_pic.png"} link={imgURL} />
  );
};

export default PicWindow;
