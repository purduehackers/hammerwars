import Link from "next/link";
import { useContext } from "react";
import SectionWindow from "components/section-window";
import Image from "next/image";

const HeaderV4 = () => {
  const accessBrokenPortal = () => {
    const theyDontCare = confirm(
      "🐴 Sugar: The application is not open yet. Continuing might enter a broken application portal. Are you sure you want to conitnue? I strongly recommand you not to..."
    );
    if (theyDontCare) {
      window.location.href = "/broken-portal";
    } else {
      alert("🐴 Sugar: wise decision.");
    }
  };

  const content = (
    <div className="flex flex-col items-center justify-center h-full p-4 font-mono">
      <div className="flex">
        <div className="text-4xl font-medium sm:text-7xl lg:text-9xl">
          <div className="w-fit bg-gradient-to-r from-green-400 to-green-400 bg-no-repeat [background-position:0_100%] [background-size:100%_0.2em]">
            Hammer
          </div>
          <div className="w-fit text-4xl font-medium sm:text-7xl lg:text-9xl bg-gradient-to-r from-green-400 to-green-400 bg-no-repeat [background-position:0_100%] [background-size:100%_0.2em]">
            Wars_
          </div>
        </div>
        <div className="relative w-20 sm:w-32 lg:w-44 xl:w-60">
          <Image src={"/icon.svg"} alt="poster" fill className="mt-5" />
        </div>
      </div>

      <div className="p-4 text-lg sm:text-xl lg:text-2xl">
        <a
          className="underline text-amber-500"
          href="https://www.purduehackers.com/"
          target="_blank"
          rel="noreferrer"
        >
          Purdue Hackers
        </a>{" "}
        &{" "}
        <a
          className="underline text-violet-400"
          href="https://purduecpu.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          CPU
        </a>
      </div>
      <a
        href="https://puhack.horse/apply2hammerwars"
        className="px-4 py-2 rounded-full cursor-pointer bg-sky-300"
        target="_blank"
        rel="noreferrer"
      >
        Apply Now!
      </a>
      {/* <button
        className="px-4 py-2 rounded-full bg-sky-300"
        onClick={() => accessBrokenPortal()}
      >
        Apply Now!
      </button> */}
    </div>
  );

  return <SectionWindow content={content} />;
};

export default HeaderV4;
