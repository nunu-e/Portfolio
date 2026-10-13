import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 border-b border-border p-6 sm:grid-cols-2 sm:p-10 lg:grid-cols-3 lg:p-12">
        <div>
          <h2 className="text-accent font-bold text-2xl mb-4">
            ELBETHEL AMBACHEW
          </h2>
          <p className="text-secondary">
            Building digital experiences with passion and precision. Let's
            create something amazing together.
          </p>
        </div>
        <div className="text-left sm:text-center">
          <h1 className=" text-accent font-bold text-2xl mb-4 ">
            Quick Links
          </h1>
          <div className="flex flex-col gap-7">
            <span className="text-secondary ">
              <a
                href="#home"
                className="cursor-pointer rounded-xl p-2 text-secondary transition-colors duration-200 hover:bg-hover hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
              >
                Home
              </a>
            </span>
            <span className="text-secondary ">
              <a
                href="#about"
                className="cursor-pointer rounded-xl p-2 text-secondary transition-colors duration-200 hover:bg-hover hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
              >
                About
              </a>
            </span>
            <span className="text-secondary ">
              <a
                href="#experience"
                className="cursor-pointer rounded-xl p-2 text-secondary transition-colors duration-200 hover:bg-hover hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
              >
                Experience
              </a>
            </span>
            <span className="text-secondary ">
              <a
                href="#skills"
                className="cursor-pointer rounded-xl p-2 text-secondary transition-colors duration-200 hover:bg-hover hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
              >
                Skills
              </a>
            </span>
            <span className="text-secondary ">
              <a
                href="#project"
                className="cursor-pointer rounded-xl p-2 text-secondary transition-colors duration-200 hover:bg-hover hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
              >
                Projects
              </a>
            </span>
            <span className="text-secondary ">
              <a
                href="#contact"
                className="cursor-pointer rounded-xl p-2 text-secondary transition-colors duration-200 hover:bg-hover hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
              >
                Contact
              </a>
            </span>
          </div>
        </div>
        <div>
          <h1 className=" text-accent font-bold text-2xl mb-4 ">
            Connect With
          </h1>
          <div className="flex gap-4 text-secondary text-2xl">
            <a
              href="https://github.com/nunu-e"
              target="_blank"
              aria-label="GitHub profile"
              className="rounded-full bg-page p-3 text-secondary transition-colors duration-200 hover:bg-accent-strong hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/elbethel-ambachew-amare"
              target="_blank"
              aria-label="LinkedIn profile"
              className="rounded-full bg-page p-3 text-secondary transition-colors duration-200 hover:bg-accent-strong hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=elbethelambachew2@gmail.com"
              target="_blank"
              aria-label="Email Elbethel"
              className="rounded-full bg-page p-3 text-secondary transition-colors duration-200 hover:bg-accent-strong hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 text-secondary p-5">
        <FaRegCopyright />
        <span>2026 Elbethel Ambachew</span>
      </div>
    </footer>
  );
};

export default Footer;
