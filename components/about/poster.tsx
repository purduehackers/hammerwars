import Image from "next/image";

const Poster = () => {
  return (
    <div className="px-4 mb-10">
      <h1 className="text-2xl font-medium text-center sm:text-3xl lg:text-4xl">
        poster.png
      </h1>
      <Image
        src={"/about/poster.png"}
        alt="poster"
        width={500}
        height={500}
        className="mt-5"
      />
    </div>
  );
};

export default Poster;
