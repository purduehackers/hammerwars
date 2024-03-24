import Link from "next/link";
import { useContext } from "react";
import SectionWindow from "components/section-window";
import Image from "next/image";

const NewHammerWars = () => {
  const content = (
    <div className="flex flex-col items-center justify-center h-full p-4 font-mono">
      <div className="flex flex-col-reverse items-center justify-center sm:flex-row w-full md:px-5">
        <div className="relative w-full h-32 sm:h-48 lg:h-64 xl:h-80">
          <Image src={"/banner-md.svg"} alt="HammerWars 3 Logo" fill />
        </div>
      </div>

      <div className="p-4 text-lg text-center sm:text-xl lg:text-2xl">
        <h2 className="mt-6 mb-2 text-2xl font-bold text-left sm:text-3xl">
          This is the old site
        </h2>
        <h3 className="mb-8 text-xl">For the latest contest, go to:</h3>
        <a
          className="px-4 py-2 underline text-black font-bold text-3xl rounded
          cursor-pointer bg-amber-400 hover:bg-amber-200 transition duration-100
          border-[3px] border-black"
          href="https://hammerwars.win"
          target="_blank"
          rel="noreferrer"
        >
          HammerWars 3
        </a>
      </div>
      <p className="mt-5 md:px-9">
        <i>
          It&rsquo;s 2024. That was a year ago. Just stop thinking in the past.
          You have to get over this. Do it for me. Please, wake up, please...
        </i>
      </p>
    </div>
  );

  return <SectionWindow content={content} title="update.html" />;
};

export default NewHammerWars;
