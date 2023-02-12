import Image from "next/image";

const Pic = () => {
    const picCount = 9;
    const picDirs:string[] = [];

    for (let i = 0; i < picCount; ++i) {
        picDirs.push(`/about/pic/${i}.JPG`);
    }
    console.log(picDirs)
    
    return (
        <div className="px-4">
            <h1 className="text-4xl font-medium">Previous Hammerwars Pic</h1>
            <div className="grid grid-flow-row grid-cols-3 gap-4">
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