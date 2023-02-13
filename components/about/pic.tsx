import Image from "next/image";

const Pic = () => {
    const picCount = 9;
    const picDirs:string[] = [];

    for (let i = 0; i < picCount; ++i) {
        picDirs.push(`/about/pic/${i}.JPG`);
    }
    
    return (
        <div className="px-4 mb-10">
            <h1 className="text-2xl font-medium text-center sm:text-3xl lg:text-4xl">Previous Hammerwars Pic</h1>
            <div className="grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {picDirs.map(picDir => (
                    <div key={picDir}>
                        <Image
                            src={picDir}
                            alt={picDir}
                            width={500}
                            height={500}
                            className="mt-5"
                        />
                        <div className="text-center truncate">
                            {picDir}
                        </div>
                    </div>
                    // <div>{picDir}</div>
                ))}
            </div>
        </div>
    )
}

export default Pic;