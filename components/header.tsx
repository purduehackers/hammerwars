const Header = () => {
    return (
        <div className="flex justify-center min-h-screen place-items-center bg-neutral-100 max-w-screen">
            <div className="border-4 border-black">
                <div className="flex justify-end w-full h-5 border-b-4 border-black">
                    <div className="w-5 border-l-4 border-black"></div>
                    <div className="w-5 border-l-4 border-black"></div>
                    <div className="w-5 border-l-4 border-black"></div>
                </div>
                <div className="p-4">
                    <div className="text-4xl sm:text-6xl md:text-title
                        bg-gradient-to-r from-green-400 to-green-400
                        bg-no-repeat [background-position:0_100%]
                        [background-size:100%_0.2em]"
                    >Hammer</div>
                    <div className="text-4xl w-fit sm:text-6xl md:text-title
                        bg-gradient-to-r from-green-400 to-green-400
                        bg-no-repeat [background-position:0_100%]
                        [background-size:100%_0.2em]"
                    >Wars</div>
                </div>
            </div>
        </div>
    )
}

export default Header;