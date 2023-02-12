import Image from "next/image";

const Poster = () => {
    return (
        <div className="px-4">
            <Image
                src={"/about/poster.png"}
                alt="poster"
                width={500}
                height={500}
                className="mt-5"
            />
            <h1 className="text-4xl font-medium text-center">poster.png</h1>
        </div>
    )
}

export default Poster;