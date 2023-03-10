import { useContext, useState } from "react"
import Draggable from "react-draggable"
import Image from "next/image"

import { DraggableContext } from '../../context/draggable-context'

const Sponsors = () => {
    const { draggable } = useContext(DraggableContext);
    return (
        <div className="flex justify-center h-screen place-items-center max-w-screen">
            <Draggable disabled={!draggable} handle=".handle">
                <div className="flex flex-col justify-center w-full h-full place-items-center">
                    <div className="flex w-11/12 h-8 border-t-8 border-black sm:w-4/5 border-x-8 handle bg-amber-200">
                        <div className="flex justify-start w-1/2 pl-2">
                            sponsors.html
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
                    <div className="w-11/12 bg-white border-8 border-black sm:w-4/5 h-4/5">
                        <div className="flex flex-col h-full overflow-auto place-items-center">
                            <div className="text-4xl font-medium sm:text-7xl lg:text-8xl">
                                <div className="w-fit 
                                    bg-gradient-to-r from-violet-400 to-violet-400
                                    bg-no-repeat [background-position:0_100%]
                                    [background-size:100%_0.2em] mt-5"
                                >Sponsors</div>
                            </div>
                            <div className="grid grid-flow-row grid-cols-1 gap-4 px-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="flex place-items-center justify-self-center">
                                    <a href="https://www.deloitte.com/global/en.html" target="_blank" rel="noreferrer">
                                        <Image
                                            src="/sponsors/deloitte.png"
                                            alt="intro"
                                            width={300}
                                            height={300}
                                            className="mt-5"
                                        />
                                    </a>
                                </div>
                                
                                <div className="flex place-items-center justify-self-center">
                                    <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">
                                        <Image
                                            src="/sponsors/aws.jpg"
                                            alt="intro"
                                            width={200}
                                            height={200}
                                            className="mt-5"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div> 
                                           
                    </div>
                </div>
            </Draggable>
        </div>
    )
}

export default Sponsors