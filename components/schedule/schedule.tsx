import SectionWindow from "components/section-window";
import Time from "./time";

const Schedule = () => {
  const content = (
    <div>
      <div className="flex justify-center">
        <div className="text-6xl font-medium sm:text-7xl lg:text-9xl">
          <h1 className="bg-gradient-to-r from-sky-400 to-sky-400 bg-no-repeat [background-position:0_100%] [background-size:100%_0.2em] mt-5">
            Schedule
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <div className="p-6 text-lg md:text-xl lg:text-2xl">
          {/* <Time
            time="1:00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            title="Check in Starts"
          ></Time> */}
          <Time time="2:00 - 2:20" title="👾 Opening Ceremony"></Time>
          <Time time="2:30 - 3:00" title="🌐 Deloitte API Workshop"></Time>
          {/* <Time
            time="3:00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            title="Check in Closes"
          ></Time> */}
          <Time time="3:15 - 3:30" title="💻 CodeForces Introduction"></Time>
          <Time time="3:45 - 5:15" title="🔨 HammerWars!!!"></Time>
          <Time time="5:30 - 6:00" title="🍕 Dinner"></Time>
          <Time time="6:00 - 6:45" title="🚀 AWS Alexa Skill Workshop"></Time>
          <Time
            time="6:50 - 7:15"
            title="🎉 Closing Ceremony (Winners Announced!)"
          ></Time>
        </div>
      </div>
    </div>
  );
  return <SectionWindow content={content} />;
};

export default Schedule;
