import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Profile from "../assets/Elbethel.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-page px-6 pt-28 pb-16 text-primary sm:px-10 sm:pt-32 lg:px-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="text-center lg:text-left" data-aos="fade-right">
          <div className="mb-4 font-semibold tracking-[0.2em] text-secondary">
            Hi, I&apos;m
          </div>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
            Elbethel Ambachew
          </h1>
          <h2 className="mb-6 text-2xl font-semibold text-accent sm:text-3xl">
            Software Engineer / Aspiring AI Engineer
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-secondary lg:mx-0">
            I build practical and user-focused applications, working with modern
            web and mobile technologies. I&apos;m passionate about solving
            real-world problems and continuously learning, with a growing
            interest in AI and machine learning.
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#project"
              className="rounded-full bg-accent px-6 py-3 font-semibold text-ink transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-strong"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-accent px-6 py-3 font-semibold text-accent-strong transition-[background-color,transform,color] duration-200 hover:-translate-y-0.5 hover:bg-accent-strong hover:text-ink active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-strong"
            >
              Get in touch
            </a>
          </div>
          <div className="flex justify-center gap-4 text-2xl text-secondary lg:justify-start">
            <a
              href="https://github.com/nunu-e"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-full bg-surface p-3 transition-colors duration-200 hover:bg-accent-strong hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/elbethel-ambachew-amare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-full bg-surface p-3 transition-colors duration-200 hover:bg-accent-strong hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=elbethelambachew2@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Elbethel"
              className="rounded-full bg-surface p-3 transition-colors duration-200 hover:bg-accent-strong hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div
          className="relative mx-auto w-full max-w-[15rem] sm:max-w-[17rem] lg:max-w-[19rem]"
          data-aos="fade-left"
          data-aos-offset="60"
        >
          <img
            src={Profile}
            alt="Elbethel Ambachew"
            className="h-auto w-full rounded-[2.25rem] border border-border object-contain shadow-xl"
          />
          <div className="absolute -bottom-4 -right-3 rounded-2xl bg-card px-5 py-3 text-center text-sm text-secondary shadow-lg sm:-right-5">
            <span className="block font-bold text-accent-strong">3+ Years</span>
            Experience
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
