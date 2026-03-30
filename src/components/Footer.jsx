import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa]   border-t border-t-[#ffc5e3] ">
      <div className="grid grid-cols-3 p-12 gap-10 border-b border-b-[#ffc5e3]">
        <div>
          <h2 className="text-[#f472b6] font-bold text-2xl mb-4">
            ELBETHEL AMBACHEW
          </h2>
          <p className="text-[#9a597b]">
            Building digital experiences with passion and precision. Let's
            create something amazing together.
          </p>
        </div>
        <div className="text-center">
          <h1 className=" text-[#f472b6] font-bold text-2xl mb-4 ">
            Quick Links
          </h1>
          <div className="flex flex-col gap-7">
            <span className="text-[#9a597b] ">Home</span>
            <span className="text-[#9a597b] ">About</span>
            <span className="text-[#9a597b] ]">Experience</span>
            <span className="text-[#9a597b] ">Skills</span>
            <span className="text-[#9a597b] ">Projects</span>
            <span className="text-[#9a597b] ">Contact</span>
          </div>
        </div>
        <div>
          <h1 className=" text-[#f472b6] font-bold text-2xl mb-4 ">
            Connect With
          </h1>
          <div className="flex gap-8 text-[#c95c94] text-2xl">
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
      </div>
      <div className="flex justify-center items-center gap-2 text-[#9a597b] p-5">
        <FaRegCopyright />
        <span>2026 Elbethel Ambachew</span>
      </div>
    </footer>
  );
};

export default Footer;
