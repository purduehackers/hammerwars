const About = () => {
  return (
    <div className="flex justify-center h-screen place-items-center bg-neutral-100 max-w-screen">
      <div className="w-4/5 border-8 border-black h-4/5">
        <div className="flex justify-end w-full h-8 border-b-8 border-black">
          <div className="flex justify-center w-8 border-l-8 border-black place-items-center">
            <div className="w-4 h-1 bg-black"></div>
          </div>
          <div className="flex justify-center w-8 border-l-8 border-black place-items-center">
            <div className="w-4 h-4 border-4 border-black"></div>
          </div>
          <div className="flex justify-center w-8 text-xl font-bold border-l-8 border-black place-items-center">
            <div className="cross">X</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full p-4 font-mono font-medium text-9xl sm:text-6xl md:text-9xl">
          <div
            className="w-fit
                        bg-gradient-to-r from-amber-400 to-amber-400
                        bg-no-repeat [background-position:0_100%]
                        [background-size:100%_0.2em]"
          >
            About
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
