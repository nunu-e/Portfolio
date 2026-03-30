import { IoColorPaletteOutline, IoPeopleOutline } from "react-icons/io5";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { VscCode } from "react-icons/vsc";
import Profile from "../assets/Elbethel.jpg";

const About = () => {
  return (
    <div id="about" className="bg-[#fef7f9] pt-32 pb-2">
      <div data-aos="fade-up" data-aos-offset="40">
        <h1 className="text-center text-[#51253be4] font-bold text-4xl mb-6 ">
          About Me
        </h1>
        <div className="w-20 h-1 bg-[#f472b6] mx-auto mb-10 rounded-2xl"></div>
      </div>
      <div
        className=" relative flex justify-center "
        data-aos="fade-right"
        data-aos-offset="40"
      >
        <div className="relative transition-transform duration-500  hover:scale-105">
          <img
            src={Profile}
            alt="Elbethel Ambachew"
            className="w-80 h-75 border-4 border-white rounded-3xl shadow-2xl"
          />
          <div
            className="text-[#9a597b] text-sm text-center absolute bottom-0 right-0 bg-white translate-y-1/2 translate-x-1/2 p-3 rounded-2xl shadow-2xl"
            data-aos="zoom-in"
          >
            <div className="text-[#f472b6]">1+ Years</div> Experience
          </div>
        </div>
      </div>
      <div
        className="m-12 p-8 bg-[#fceaef] rounded-2xl text-[#9a597b]"
        data-aos="fade-left"
        data-aos-offset="40"
      >
        <h1 className="text-2xl font-bold mb-4 text-[#51253be4] ">
          Hi, I'm Elbethel Ambachew
        </h1>
        <div>
          <p className="pb-4">
            A Computer Science student and aspiring full stack developer based
            in Addis Ababa. I enjoy turning ideas into real applications using
            technologies like React, Node.js, and modern web tools.
          </p>
          <p className="pb-4">
            I've worked on several academic and personal projects including
            system applications and web platforms, which helped me build strong
            foundations in data structures, frontend and backend development,
            and database design.
          </p>
          <p className="pb-4">
            I'm passionate about learning new technologies, solving challenging
            problems, and building software that improves people's everyday
            experiences.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 m-12 gap-6">
        <div className="bg-white shadow-sm  p-5 rounded-2xl transition-all duration-500  hover:scale-105 hover:shadow-2xl">
          <div className="text-[#f472b6] inline-block bg-[#fceaef] p-1 rounded-md text-2xl">
            <VscCode />
          </div>

          <h2 className="text-[#51253be4] font-bold mt-2 mb-1">Clean code</h2>
          <p className="text-[#51253be4]">
            Writing maintainable, scalable code following best practices
          </p>
        </div>
        <div className="bg-white shadow-sm  p-5 rounded-2xl transition-all duration-500  hover:scale-105 hover:shadow-2xl">
          <div className="text-[#f472b6] inline-block bg-[#fceaef] p-1 rounded-md text-2xl">
            <IoColorPaletteOutline />
          </div>

          <h2 className="text-[#51253be4] font-bold mt-2 mb-1">
            Design Focused
          </h2>
          <p className="text-[#51253be4]">
            Creating beautiful interfaces with attention to detail
          </p>
        </div>
        <div className="bg-white shadow-sm p-5 rounded-2xl transition-all duration-500  hover:scale-105 hover:shadow-2xl">
          <div className="text-[#f472b6] inline-block bg-[#fceaef] p-1 rounded-md text-2xl">
            <MdOutlineRocketLaunch />
          </div>

          <h2 className="text-[#51253be4] font-bold mt-2 mb-1">
            Fast Delivery
          </h2>
          <p className="text-[#51253be4]">
            Efficient development with modern tools and workflows
          </p>
        </div>
        <div className="bg-white shadow-sm  p-5 rounded-2xl transition-all duration-500  hover:scale-105 hover:shadow-2xl">
          <div className="text-[#f472b6] inline-block bg-[#fceaef] p-1 rounded-md text-2xl">
            <IoPeopleOutline />
          </div>

          <h2 className="text-[#51253be4] font-bold mt-2 mb-1">Team Player</h2>
          <p className="text-[#51253be4]">
            Collaborative approach with excellent communication
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
