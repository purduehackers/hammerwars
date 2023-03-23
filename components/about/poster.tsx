import Image from "next/image";

const Poster = () => {
  return (
    <div className="px-4 mb-10">
      <h1 className="text-2xl font-medium text-center sm:text-3xl lg:text-4xl">
        poster.png
      </h1>
      <div className="flex flex-col xl:flex-row">
        <Image
          src={"/about/poster.png"}
          alt="poster-1"
          width={500}
          height={500}
          className="p-2 mt-5"
        />
        <Image
          src={"/about/poster-2.png"}
          alt="poster-2"
          width={500}
          height={500}
          className="p-2 mt-5"
        />
      </div>
    </div>
  );
};

export default Poster;
