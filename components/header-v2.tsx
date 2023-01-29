const HeaderV2 = () => {
    return (
        <div className="flex justify-center h-screen place-items-center bg-neutral-100 max-w-screen">
            <div className="w-4/5 border-8 border-black h-4/5">
                <div className="flex justify-end w-full h-8 border-b-8 border-black">
                    <div className="w-8 border-l-8 border-black flex justify-center place-items-center">
                        <div className="w-4 h-1 bg-black"></div>
                    </div>
                    <div className="w-8 border-l-8 border-black flex justify-center place-items-center">
                        <div className="w-4 h-4 border-4 border-black"></div>
                    </div>
                    <div className="w-8 border-l-8 border-black flex justify-center place-items-center font-bold text-xl">
                        <div className='cross'>X</div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center h-full p-4 font-mono font-medium text-9xl sm:text-6xl md:text-9xl">
                    <div className="w-fit
                        bg-gradient-to-r from-green-400 to-green-400
                        bg-no-repeat [background-position:0_100%]
                        [background-size:100%_0.2em]"
                    >Hammer</div>
                    <div className="w-fit
                        bg-gradient-to-r from-green-400 to-green-400
                        bg-no-repeat [background-position:0_100%]
                        [background-size:100%_0.2em]"
                    >Wars_</div>
                </div>
            </div>
        </div>
    )
}

export default HeaderV2