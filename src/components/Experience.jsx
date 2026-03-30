import { TbBuildingArch } from "react-icons/tb";

const Experience = () => {
  return (
    <div id="experience" className="bg-[#fef7f9] pt-32 pb-5">
      <div data-aos="fade-up" data-aos-offset="40">
        <h1 className="text-center text-[#51253be4] font-bold text-4xl mb-6 ">
          Experience
        </h1>
        <div className="w-20 h-1 bg-[#f472b6] mx-auto mb-10 rounded-2xl"></div>
      </div>
      <div className="relative grid grid-cols-2 gap-6 m-12">
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#f7c7df] rounded-2xl shadow-sm transform -translate-x-1/2"></div>

        <div className="p-6 rounded-4xl bg-white col-start-1 row-start-1 relative z-10 mx-auto">
          <h2 className="text-2xl font-bold text-[#51253be4] mb-2">
            Full Stack Developer
          </h2>
          <div className="inline-flex items-center gap-2 text-[#f472b6] mb-3">
            <TbBuildingArch />
            <span>Freelance</span>
          </div>
          <div className="text-[#51253be4] mb-5">May 2025 - PRESENT </div>
          <ul className="list-disc marker:text-[#f472b6] p-6">
            <li>Designed and developed responsive web applications</li>
            <li>
              implemented frontend and backend logic using modern web
              technologies while following clean code and software engineering
              principles.
            </li>
          </ul>
          <div className="absolute top-1/2 -right-5 w-4 h-4 border-4 border-[#f472b6] rounded-full bg-white transform  translate-y-[-50%]"></div>
        </div>
        <div className="p-6 rounded-4xl bg-white col-start-2 shadow-sm row-start-2 relative z-10">
          <h2 className="text-2xl font-bold text-[#51253be4] mb-2">
            {" "}
            Software Developer
          </h2>
          <div className="inline-flex items-center gap-2 text-[#f472b6] mb-3">
            <TbBuildingArch />
            <span>Personal & Academic Projects</span>
          </div>
          <div className="text-[#51253be4] mb-5">October 2025 - present </div>
          <ul className="list-disc marker:text-[#f472b6] p-6">
            <li>Build Library Management System using C++ based on DSA</li>
            <li>Build Student Grading System using Java Gui</li>
          </ul>
          <div className="absolute top-1/2 -left-5 w-4 h-4 border-4 border-[#f472b6] rounded-full bg-white transform  translate-y-[-50%]"></div>
        </div>
        <div className="p-6 rounded-4xl bg-white col-start-1 shadow-sm row-start-3 relative z-10">
          <h2 className="text-2xl font-bold text-[#51253be4] mb-2">
            {" "}
            Web Application Developer{" "}
          </h2>
          <div className="inline-flex items-center gap-2 text-[#f472b6] mb-3">
            <TbBuildingArch />
            <span>MoodBuddy Project</span>
          </div>
          <div className="text-[#51253be4] mb-5">
            November 2025 - November 2025{" "}
          </div>
          <ul className="list-disc marker:text-[#f472b6] p-6">
            <li>
              Developed a mental-wellness application with focus on UI/UX design
            </li>
            <li>effective data handling to enhance user experience.</li>
          </ul>
          <div className="absolute top-1/2 -right-5 w-4 h-4 border-4 border-[#f472b6] rounded-full bg-white transform  translate-y-[-50%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
