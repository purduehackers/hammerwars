import { useContext } from "react";
import Image from "next/image";
import SectionWindow from "components/section-window";
import PicWindow from "components/about/pic-window";

const SponsorsV2 = () => {
  const content = (
    <div className="flex flex-col h-full overflow-auto place-items-center">
      <div className="text-4xl font-medium sm:text-7xl lg:text-8xl">
        <div className="w-fit bg-gradient-to-r from-violet-400 to-violet-400 bg-no-repeat [background-position:0_100%] [background-size:100%_0.2em] mt-5">
          Sponsors
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-1 gap-4 px-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex place-items-center justify-self-center">
          <a
            href="https://www.deloitte.com/global/en.html"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/sponsors/deloitte.png"
              alt="intro"
              width={300}
              height={300}
              className="mt-5"
            />
          </a>
        </div>

        <div className="flex place-items-center justify-self-center">
          <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">
            <Image
              src="/sponsors/aws.jpg"
              alt="intro"
              width={200}
              height={200}
              className="mt-5"
            />
          </a>
        </div>
      </div>
      <div className="absolute left-0 hidden top-96 md:block">
        <PicWindow />
      </div>
      <div className="absolute bottom-0 hidden right-12 md:block">
        <PicWindow />
      </div>
    </div>
  );
  return <SectionWindow content={content} title="sponsors.html" />;
};

export default SponsorsV2;
