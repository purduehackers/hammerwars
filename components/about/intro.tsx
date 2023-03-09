const Intro = () => {
  return (
    <div className="px-4 mb-10">
      <h1 className="text-2xl font-medium text-center sm:text-3xl lg:text-4xl">
        What is Hammerwars?
      </h1>
      <div className="flex justify-center mt-4">
        <div className="lg:w-3/5">
          <p>
            Hammer Wars is a competitive programming competition hosted by
            Purdue Hackers and Purdue CPU and sponsored by AWS and Deloitte.
            This year, Hammer Wars will be held on Saturday, April 1st @ X-X PM.
          </p>
          <br />
          <p>
            Our purpose is to help jumpstart students' critical thinking skills
            by solving coding interview problems in a competitive format, which
            is essential to obtaining future internship and job opportunities.
          </p>
          <br />
          <p>
            All undergraduate Purdue students are invited to participate. There
            will be free swag, food, as well as $XXXX in prizes!
          </p>
          <br />
          <p>
            The first 100 people to register for Hammer Wars will get a free
            t-shirt!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
