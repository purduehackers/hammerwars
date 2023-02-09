import { useContext, useState } from "react"
import Draggable from "react-draggable"
import Image from "next/image"
import Faq from "./faq"
import Intro from "./intro"

import { DraggableContext } from '../../context/draggable-context'

const files = {
    "intro": <Intro />,
    "faq": <Faq />,
    "pic": <div>pic</div>
}

const AboutV3 = () => {
    const { draggable } = useContext(DraggableContext);
    const [file, setFile] = useState<string>("intro");

    const selectedAttributes = "";
    
    return (
        <div className="flex justify-center h-screen place-items-center max-w-screen">
            <Draggable disabled={!draggable} handle=".handle">
                <div className="flex flex-col justify-center w-full h-full place-items-center">
                    <div className="flex w-4/5 h-8 border-t-8 border-black border-x-8 handle bg-amber-200">
                        <div className="flex justify-start w-1/2 pl-5">
                            about.html
                        </div>
                        <div className="flex justify-end w-1/2">
                            <div className="flex justify-center w-8 border-l-8 border-black place-items-center">
                                <div className="w-4 h-1 bg-black"></div>
                            </div>
                            <div className="flex justify-center w-8 border-l-8 border-black place-items-center">
                                <div className="w-4 h-4 border-4 border-black"></div>
                            </div>
                            <div className="flex justify-center w-8 text-xl font-bold border-l-8 border-black place-items-center">
                                <div className='cross'>X</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/5 bg-white border-8 border-black h-3/5">
                        <div className="flex flex-col h-full overflow-auto place-items-center">
                            <div className="text-6xl font-medium sm:text-7xl md:text-9xl">
                                <div className="w-fit 
                                    bg-gradient-to-r from-amber-400 to-amber-400
                                    bg-no-repeat [background-position:0_100%]
                                    [background-size:100%_0.2em] mt-5"
                                >About</div>
                            </div>
                            <div className="mt-4 border-t-4 border-slate-400"></div>
                            {files[file as keyof typeof files]}
                        </div>
                        
                    </div>
                    <div className="flex justify-center w-4/5 gap-8 overflow-y-auto border-b-8 border-black bg-slate-100 h-1/5 border-x-8">
                        <div className="flex flex-col place-items-center">
                            <Image
                                src="/about/file.png"
                                alt="intro"
                                width={60}
                                height={60}
                                className="mt-5"
                                onClick={() => setFile("intro")}
                            />
                            <p className={file == "intro" ? "bg-blue-300": ""}>
                                intro<br />
                                .txt
                            </p>
                        </div>
                        <div className="flex flex-col place-items-center">
                            <Image
                                src="/about/file.png"
                                alt="faq"
                                width={60}
                                height={60}
                                className="mt-5"
                                onClick={() => setFile("faq")}
                            />
                            <p className={file == "faq" ? "bg-blue-300": ""}>
                                faq<br />
                                .txt
                            </p>
                        </div>
                        <div className="flex flex-col place-items-center">
                            <Image
                                src="/about/folder.png"
                                alt="Picture of the author"
                                width={70}
                                height={70}
                                className="mt-5"
                                onClick={() => setFile("pic")}
                            />
                            <p className={file == "pic" ? "bg-blue-300": ""}>
                                pic<br />
                            </p>
                        </div>
                    </div>
                </div>
            </Draggable>
        </div>
    )
}

export default AboutV3;