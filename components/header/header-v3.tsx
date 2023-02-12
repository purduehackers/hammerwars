import Link from "next/link";
import { useContext } from "react"
import Draggable from "react-draggable"
import Image from "next/image";

import { DraggableContext } from '../../context/draggable-context'

const HeaderV3 = () => {
    const { draggable } = useContext(DraggableContext);
    return (
        <div className="flex justify-center h-screen place-items-center max-w-screen">
            <Draggable disabled={!draggable} handle=".handle">
                <div className="flex flex-col justify-center w-full h-full place-items-center">
                    <div className="flex w-11/12 h-8 border-t-8 border-black sm:w-4/5 border-x-8 handle bg-amber-200">
                        <div className="flex justify-start w-1/2 pl-2 underline truncate">
                            <Link href="/source-code">header.html</Link>
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
                    <div className="w-11/12 overflow-y-auto bg-white border-8 border-black sm:w-4/5 h-4/5">
                        <div className="flex flex-col items-center justify-center h-full p-4 font-mono">
                            <div className="flex">
                                <div className="text-4xl font-medium sm:text-7xl lg:text-9xl">
                                    <div className="w-fit 
                                        bg-gradient-to-r from-green-400 to-green-400
                                        bg-no-repeat [background-position:0_100%]
                                        [background-size:100%_0.2em]"
                                    >Hammer</div>
                                    <div className="w-fit text-4xl font-medium sm:text-7xl lg:text-9xl
                                        bg-gradient-to-r from-green-400 to-green-400
                                        bg-no-repeat [background-position:0_100%]
                                        [background-size:100%_0.2em]"
                                    >Wars_</div>
                                </div>
                                <div className="relative w-20 sm:w-32 lg:w-44 xl:w-60">
                                    <Image
                                        src={"/icon.svg"}
                                        alt="poster"
                                        fill
                                        className="mt-5"
                                    />
                                </div>
                            </div>
                            
                            <div className="p-4 text-lg sm:text-xl lg:text-2xl">
                                <a className="underline text-amber-500"
                                    href="https://www.purduehackers.com/" 
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Purdue Hackers</a> & <a className="underline text-violet-400"
                                    href="https://purduecpu.github.io/" 
                                    target="_blank"
                                    rel="noreferrer"
                                >CPU</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Draggable>
        </div>
    )
}

export default HeaderV3