import horse from "../../public/horse.gif"
import Image from 'next/image';

const SourceCode = () => {
    return (
        <div className="p-4 font-robo-mono">
            {"<!DOCTYPE html>"}<br />
            {"<html>"}<br />
            {"<h1>This is the source code of the header section :D</h1>"}<br />
            {"<h1>The foundation of the website is built with this:</h1>"}<br />
            {"<canvas style='background-image:url('public/horse.gif')'>"}<br />
            <Image
                src={horse}
                height="500"
                width="500"
                alt="horse"
            >
            </Image>
            {"</canvas>"}<br />
            {"</html>"}
        </div>
    )
}

export default SourceCode