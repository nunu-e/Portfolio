import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Campustrade from "../assets/screencapture-campus-trade-frontend-netlify-app-2026-03-09-19_20_15.png";
import Thinkbox from "../assets/screencapture-localhost-5173-2026-03-09-11_10_12.png";
import Moodbuddy from "../assets/screencapture-moodbuddyapp-netlify-app-2026-03-09-19_35_27.png";

const Project = () => {
  return (
    <div id="project" className="bg-[#fef7f9] pt-25">
      <div data-aos="fade-up" data-aos-offset="40">
        <h1 className="text-center text-[#51253be4] font-bold text-4xl mb-6 ">
          Featured Projects
        </h1>
        <div className="w-20 h-1 bg-[#f472b6] mx-auto mb-10 rounded-2xl"></div>
      </div>
      <div className="text-[#9a597b] mb-7 text-center">
        A selection of my recent work and side projects
      </div>
      <div className="grid grid-cols-2 gap-12 m-12 mb-0">
        <div className=" bg-white rounded-3xl mb-12 shadow-sm transition-all duration-500 hover:scale-100 hover:bg-[#fef7f9] hover:shadow-2xl">
          <img
            src={Moodbuddy}
            alt="MoodBuddy"
            className="h-70 w-full object-cover rounded-t-2xl "
          ></img>
          <div className="p-10">
            <h1 className="text-[#51253be4] font-bold mb-2 text-xl">
              MoodBuddy
            </h1>
            <p>
              A simple, friendly web application designed to help users track
              and reflect on their emotional wellbeing. It allows people to
              record their mood each day, add a short journal note, and
              visualize how their emotions change over time. The goal is to make
              self reflection easy, consistent, and personal.
            </p>
            <div className="flex mb-3">
              <div className="p-3  text-center text-[#f472b6] bg-[#ffe0f0] shadow-sm m-3 ml-0 rounded-3xl transition-all hover:shadow-2xl">
                React
              </div>
              <div className="p-3 text-center text-[#f472b6] bg-[#ffe0f0] shadow-sm m-3 rounded-3xl transition-all hover:shadow-2xl">
                NodeJs
              </div>
              <div className="p-3 text-center text-[#f472b6] bg-[#ffe0f0] shadow-sm m-3 rounded-3xl transition-all hover:shadow-2xl">
                MongoDb
              </div>
            </div>
            <div className="flex gap-5 text-[#9a597b]">
              <a
                href="https://moodbuddyapp.netlify.app/"
                target="_blank"
                className="flex justify-center gap-3"
              >
                <FaExternalLinkAlt className="text-xl" />
                <span>Live Demo</span>
              </a>
              <a
                href="https://github.com/nunu-e/mood-buddy-frontend.git"
                target="_blank"
                className="flex justify-center gap-3"
              >
                <FaGithub className="text-xl" />
                <span>Frontend Code</span>
              </a>
              <a
                href="https://github.com/nunu-e/mood-buddy-backend.git"
                target="_blank"
                className="flex justify-center gap-3"
              >
                <FaGithub className="text-xl" />
                <span>Backend Code</span>
              </a>
              
            </div>
          </div>
        </div>
        <div className=" bg-white rounded-3xl mb-12 shadow-sm transition-all duration-500 hover:scale-100 hover:bg-[#fef7f9] hover:shadow-2xl">
          <img
            src={Campustrade}
            alt="Campus Trade"
            className="h-70 w-full object-cover rounded-t-2xl "
          ></img>
          <div className="p-10">
            <h1 className="text-[#51253be4] font-bold mb-2 text-xl">
              Campus Trade
            </h1>
            <p>
              A simple, practical web platform designed to help students buy,
              sell, and exchange goods within their campus community. It allows
              users to list items, browse available products, and connect with
              other students through real-time messaging. The goal is to create
              a convenient and secure marketplace where campus members can trade
              easily, communicate instantly, and manage their transactions in a
              smooth and reliable way.
            </p>
            <div className="flex mb-3">
              <div className="p-3  text-center text-[#f472b6] bg-[#ffe0f0] shadow-sm m-3 ml-0 rounded-3xl transition-all hover:shadow-2xl">
                React
              </div>
              <div className="p-3 text-center text-[#f472b6] bg-[#ffe0f0] shadow-sm m-3 rounded-3xl transition-all hover:shadow-2xl">
                NodeJs
              </div>
              <div className="p-3 text-center text-[#f472b6] bg-[#ffe0f0] shadow-sm m-3 rounded-3xl transition-all hover:shadow-2xl">
                MongoDb
              </div>
            </div>
            <div className="flex gap-5 text-[#9a597b]">
              <a
                href="https://campus-trade-frontend.netlify.app/"
                target="_blank"
                className="flex justify-center gap-3"
              >
                <FaExternalLinkAlt className="text-xl" />
                <span>Live Demo</span>
              </a>
              <a
                href="https://github.com/nunu-e/campus-trade-frontend.git"
                target="_blank"
                className="flex justify-center gap-3"
              >
                <FaGithub className="text-xl" />
                <span>Frontend Code</span>
              </a>
              <a
                href="https://github.com/nunu-e/campus-trade-backend.git"
                target="_blank"
                className="flex justify-center gap-3"
              >
                <FaGithub className="text-xl" />
                <span>Backend Code</span>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
