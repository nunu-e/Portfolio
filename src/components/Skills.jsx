import {
  FaAws,
  FaDatabase,
  FaDocker,
  FaNodeJs,
  FaReact,
  FaServer,
  FaWrench,
} from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { IoIosGitBranch } from "react-icons/io";
import { IoColorPaletteOutline } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJest, SiMongodb } from "react-icons/si";
import { TbBrandJavascript, TbBrandMysql, TbWorld } from "react-icons/tb";

const Skills = () => {
  return (
    <div id="skills" className="bg-[#fef7f9] pt-25">
      <div data-aos="fade-up" data-aos-offset="40">
        <h1 className="text-center text-[#51253be4] font-bold text-4xl mb-6 ">
          Skills
        </h1>
        <div className="w-20 h-1 bg-[#f472b6] mx-auto mb-10 rounded-2xl"></div>
      </div>
      <div className="text-[#9a597b] mb-7 text-center">
        Technologies I work with to bring ideas to life
      </div>
      <div className="grid grid-cols-2 m-12">
        <div className="p-5 bg-white rounded-3xl mr-12 mb-12 shadow-sm transition-all duration-500 hover:scale-100 hover:bg-[#fef7f9] hover:shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#f472b6] rounded-2xl text-white text-3xl">
              <IoColorPaletteOutline />
            </div>

            <span className="text-[#51253be4] font-bold mt-2 mb-1 text-xl">
              Frontend Development
            </span>
          </div>
          <div className="grid grid-cols-2 items-center">
            <div className="bg-[#fceaef] p-5 rounded-3xl mr-8 mb-8 mt-8 text-center transition-all duration-500 hover:scale-105 hover:bg-[#f8dde4] ">
              <FaReact className="mx-auto text-2xl text-[#f472b6]" />
              <h3>React</h3>
            </div>
            <div className="bg-[#fceaef] p-5 rounded-3xl mr-8 mb-8 mt-8 text-center transition-all duration-500 hover:scale-105 hover:bg-[#f8dde4]">
              <TbBrandJavascript className="mx-auto text-2xl text-[#f472b6]" />
              <h3>Javascript</h3>
            </div>
            <div className="bg-[#fceaef] p-5 rounded-3xl mr-8 mb-8  text-center transition-all duration-500 hover:scale-105 hover:bg-[#f8dde4]">
              <RiTailwindCssFill className="mx-auto text-2xl text-[#f472b6]" />
              <h3>TailwindCSS</h3>
            </div>
            <div className="bg-[#fceaef] p-5 rounded-3xl mr-8 mb-8 text-center transition-all duration-500 hover:scale-105 hover:bg-[#f8dde4]">
              <TbWorld className="mx-auto text-2xl text-[#f472b6]" />
              <h3>HTML/CSS</h3>
            </div>
          </div>
        </div>
        <div className="p-5 bg-white rounded-3xl mb-12 shadow-sm transition-all duration-500 hover:scale-100 hover:bg-[#fef7f9] hover:shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#f472b6] rounded-2xl text-white text-3xl">
              <FaServer />
            </div>

            <span className="text-[#51253be4] font-bold mt-2 mb-1 text-xl">
              Backend Development
            </span>
          </div>
          <div className="grid grid-cols-2 items-center">
            <div className="bg-[#fceaef] p-5 rounded-3xl mr-8 mb-8 mt-8 text-center transition-all duration-500 hover:scale-105 hover:bg-[#f8dde4]">
              <FaNodeJs className="mx-auto text-2xl text-[#f472b6]" />
              <h3>NodeJs</h3>
            </div>
            <div className="bg-[#fceaef] p-5 rounded-3xl mr-8 mb-8 mt-8 text-center transition-all duration-500 hover:scale-105 hover:bg-[#f8dde4]">
              <GoPackage className="mx-auto text-2xl text-[#f472b6]" />
              <h3>ExpressJs</h3>
            </div>
          </div>
        </div>
        <div className="p-5 bg-white rounded-3xl mr-12 shadow-sm transition-all duration-500 hover:scale-100 hover:bg-[#fef7f9] hover:shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#f472b6] rounded-2xl text-white text-3xl">
              <FaDatabase />
            </div>

            <span className="text-[#51253be4] font-bold mt-2 mb-1 text-xl">
              DataBase Development
            </span>
          </div>
          <div className="grid grid-cols-2 items-center">
            <div className="bg-[#fceaef] p-5 rounded-3xl mr-8 mb-8  mt-8 text-center transition-all duration-500 hover:scale-105 hover:bg-[#f8dde4]">
              <SiMongodb className="mx-auto text-2xl text-[#f472b6]" />
              <h3>MongoDb</h3>
            </div>
            <div className="bg-[#fceaef] p-5 rounded-3xl mr-8 mb-8 mt-8 text-center transition-all duration-500 hover:scale-105 hover:bg-[#f8dde4]">
              <TbBrandMysql className="mx-auto text-2xl text-[#f472b6]" />
              <h3>MySQL</h3>
            </div>
          </div>
        </div>
        <div className="p-5 bg-white rounded-3xl shadow-sm transition-all duration-500 hover:scale-100 hover:bg-[#fef7f9] hover:shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#f472b6] rounded-2xl text-white text-3xl">
              <FaWrench />
            </div>

            <span className="text-[#51253be4] font-bold mt-2 mb-1 text-xl">
              DevOps & Tools
            </span>
          </div>
          <div className="grid grid-cols-2 items-center">
            <div className="bg-[#fceaef] p-5 rounded-3xl mr-8 mb-8 mt-8 text-center transition-all duration-500 hover:scale-105 hover:bg-[#f8dde4]">
              <FaAws className="mx-auto text-2xl text-[#f472b6]" />
              <h3>AWS</h3>
            </div>
            <div className="bg-[#fceaef] p-5 rounded-3xl mr-8 mb-8 mt-8 text-center transition-all duration-500 hover:scale-105 hover:bg-[#f8dde4]">
              <FaDocker className="mx-auto text-2xl text-[#f472b6]" />
              <h3>Docker</h3>
            </div>
            <div className="bg-[#fceaef] p-5 rounded-3xl mr-8 mb-8  text-center transition-all duration-500 hover:scale-105 hover:bg-[#f8dde4]">
              <IoIosGitBranch className="mx-auto text-2xl text-[#f472b6]" />
              <h3>Git</h3>
            </div>
            <div className="bg-[#fceaef] p-5 rounded-3xl mr-8 mb-8 text-center transition-all duration-500 hover:scale-105 hover:bg-[#f8dde4]">
              <SiJest className="mx-auto text-2xl text-[#f472b6]" />
              <h3>Jest/Testing</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-7 text-2xl text-center text-[#51253be4] font-bold">
        Other Technologies
      </div>
      <div className="flex items-center justify-center">
        <div className="p-3 text-center text-[#f472b6] bg-[#ffe0f0] shadow-sm m-3 rounded-3xl transition-all hover:shadow-2xl">
          Redux
        </div>
        <div className="p-3 text-center text-[#f472b6] bg-[#ffe0f0] shadow-sm m-3 rounded-3xl transition-all hover:shadow-2xl">
          REST APIs
        </div>
        <div className="p-3 text-center text-[#f472b6] bg-[#ffe0f0]  shadow-sm m-3 rounded-3xl transition-all hover:shadow-2xl">
          WebSockets
        </div>
        <div className="p-3 text-center text-[#f472b6] bg-[#ffe0f0]  shadow-sm m-3 rounded-3xl transition-all hover:shadow-2xl">
          Redis
        </div>
        <div className="p-3 text-center text-[#f472b6] bg-[#ffe0f0] shadow-sm m-3 rounded-3xl transition-all hover:shadow-2xl">
          Stripe
        </div>
        <div className="p-3 text-center text-[#f472b6] bg-[#ffe0f0] shadow-sm m-3 rounded-3xl transition-all hover:shadow-2xl">
          Agile/Scrum
        </div>
      </div>
    </div>
  );
};

export default Skills;
