import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className="bg-[#fef7f9] text-center pt-32">
      <div className="text-[#9a597b] mb-7">WELCOME TO MY PORTFOLIO</div>
      <h1 className="text-[#f472b6] font-bold text-6xl mb-4">
        Full Stack Developer
      </h1>
      <h1 className="text-[#51253be4] font-bold text-6xl mb-8">
        Building Digital Experiences
      </h1>
      <div className="text-[#9a597b] text-xl ">
        I create elegant, performant web applications with modern technologies.
      </div>
      <div className="text-[#9a597b] text-xl mb-8">
        Passionate about clean code, user experience, and continuous learning.
      </div>
      <a href="#project">
        <button className="text-white p-5 transition-all duration-200 rounded-full bg-[#f472b6] m-8 hover:scale-110">
          View My Work
        </button>
      </a>
      <a href="#contact">
        <button className="text-[#f472b6] border-2  transition-all duration-200 hover:scale-110 rounded-full border-[#f472b6] p-5 hover:bg-[#f472b6] hover:text-white">
          Get in touch
        </button>
      </a>

      <div className="flex justify-center gap-8 text-[#c95c94] text-2xl">
        <a
          href="https://github.com/nunu-e"
          target="_blank"
          className="rounded-full bg-[#fceaef] p-3 transition-all duration-200 hover:bg-[#f472b6] hover:text-white"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/elbethel-ambachew-amare"
          target="_blank"
          className="rounded-full bg-[#fceaef] p-3 transition-all duration-200 hover:bg-[#f472b6] hover:text-white"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=elbethelambachew2@gmail.com"
          target="_blank"
          className="rounded-full bg-[#fceaef] p-3 transition-all duration-200 hover:bg-[#f472b6] hover:text-white"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Home;
