const HeaderV2 = () => {
    return (
        <div className="flex justify-center h-screen place-items-center bg-neutral-100 max-w-screen">
            <div className="w-4/5 border-8 border-black h-4/5">
                <div className="flex justify-end w-full h-8 border-b-8 border-black">
                    <div className="w-8 border-l-8 border-black"></div>
                    <div className="w-8 border-l-8 border-black"></div>
                    <div className="w-8 border-l-8 border-black"></div>
                </div>
                <div className="flex flex-col justify-center h-full p-4 font-mono font-medium">
                    <div className="text-4xl w-fit sm:text-6xl md:text-title
                        bg-gradient-to-r from-green-400 to-green-400
                        bg-no-repeat [background-position:0_100%]
                        [background-size:100%_0.2em]"
                    >Hammer</div>
                    <div className="text-4xl w-fit sm:text-6xl md:text-title
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