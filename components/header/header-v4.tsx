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
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center">
        <div className="text-6xl font-medium sm:text-7xl lg:text-9xl">
          <h1 className="bg-gradient-to-r from-green-400 to-green-400 bg-no-repeat [background-position:0_100%] [background-size:100%_0.2em]">
            Hammer
          </h1>
          <h1 className="bg-gradient-to-r from-green-400 to-green-400 bg-no-repeat [background-position:0_100%] [background-size:100%_0.2em]">
            Wars_
          </h1>
        </div>
        <div className="relative w-20 sm:w-32 lg:w-44 xl:w-60 h-20 sm:h-32 lg:h-44 xl:h-60">
          <Image src={"/icon.svg"} alt="HammerWars Logo" fill />
        </div>
      </div>

      <div className="p-4 text-lg sm:text-xl lg:text-2xl text-center">
        <h2 className="font-bold mt-6 mb-2 text-2xl sm:text-3xl text-left">
          Saturday, April 1 @ WALC
        </h2>
        <h3 className="mb-8 text-xl">2:00-7:00pm</h3>
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
        className="px-4 py-2 font-bold rounded cursor-pointer bg-sky-300 hover:bg-sky-400 transition duration-100 border-[3px] border-black"
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
