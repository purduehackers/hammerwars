import { useContext } from "react"
import Draggable from "react-draggable"
import Image from "next/image"

import { DraggableContext } from '../context/draggable-context'

const AboutV3 = () => {
    const { draggable } = useContext(DraggableContext);
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
                            <div className="w-4/5 mt-4 border-t-4 border-slate-400"></div>
                            <div className="p-4">
                                <h1 className="text-4xl font-medium">What is Hammerwars?</h1>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dui ultricies, blandit leo sed, tempus ante. Sed auctor ultricies nisi, vitae porttitor neque vehicula eget. Vestibulum vel consectetur libero. Integer tincidunt, neque eu efficitur malesuada, erat metus bibendum dolor, et viverra diam libero vel ex. Nam luctus faucibus tempus. Aliquam elit quam, aliquam vitae ornare ac, iaculis ac nisi. Sed vel arcu orci. Maecenas blandit nunc vel ligula fringilla, nec lacinia risus condimentum. Maecenas molestie magna commodo ex lobortis, sit amet ullamcorper arcu porttitor. Aliquam varius facilisis sem eget auctor. Praesent libero diam, pharetra in imperdiet a, iaculis non velit. Nam at bibendum lorem. Donec malesuada efficitur lacus, nec sodales magna congue at. Nam sagittis vestibulum neque, sit amet aliquet elit molestie ut. Fusce sagittis, quam eu lacinia dictum, tortor ligula iaculis tortor, scelerisque sollicitudin nisl ipsum dapibus libero. Integer at est eu magna ornare euismod. Sed pellentesque, metus eget consequat sollicitudin, elit lacus bibendum sem, id elementum mi odio at lacus. Praesent laoreet eros ante, quis suscipit metus vulputate sit amet. Maecenas viverra enim id consequat vulputate.
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex justify-center w-4/5 gap-8 border-b-8 border-black bg-slate-100 h-1/5 border-x-8">
                        <div className="flex flex-col place-items-center">
                            <Image
                                src="/file.svg"
                                alt="Picture of the author"
                                width={50}
                                height={50}
                                className="mt-5"
                            />
                            <p className="">
                                intro<br />
                                .txt
                            </p>
                        </div>
                        <div className="flex flex-col place-items-center">
                            <Image
                                src="/file.svg"
                                alt="Picture of the author"
                                width={50}
                                height={50}
                                className="mt-5"
                            />
                            <p className="">
                                faq<br />
                                .txt
                            </p>
                        </div>
                        <div className="flex flex-col place-items-center">
                            <Image
                                src="/file.svg"
                                alt="Picture of the author"
                                width={50}
                                height={50}
                                className="mt-5"
                            />
                            <p className="">
                                pic<br />
                                .txt
                            </p>
                        </div>
                    </div>
                </div>
            </Draggable>
        </div>
    )
}

export default AboutV3;