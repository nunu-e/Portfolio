import { createElement } from "react";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { VscCode } from "react-icons/vsc";
import { TbBulb } from "react-icons/tb";

const values = [
  {
    title: "Clean Code",
    description:
      "Writing readable, maintainable code with a focus on clarity, structure, and reliability.",
    Icon: VscCode,
  },
  {
    title: "Problem Solving",
    description:
      "Breaking down complex problems and building practical solutions through thoughtful engineering.",
    Icon: MdOutlineRocketLaunch,
  },
  {
    title: "Continuous Learning",
    description:
      "Exploring new technologies, strengthening fundamentals, and applying learning through hands-on projects.",
    Icon: TbBulb,
  },
  {
    title: "Collaboration",
    description:
      "Working with others, sharing ideas, and contributing to effective team solutions.",
    Icon: IoPeopleOutline,
  },
];

const About = () => {
  return (
    <section id="about" className="bg-surface px-6 py-20 sm:px-10 lg:px-16">
      <div data-aos="fade-up" data-aos-offset="60">
        <h2 className="mb-5 text-center text-4xl font-bold text-primary">
          About Me
        </h2>
        <div className="mx-auto mb-10 h-1 w-20 rounded-full bg-accent" />
      </div>
      <div
        className="mx-auto mb-12 max-w-5xl rounded-3xl bg-card p-6 leading-relaxed text-primary shadow-sm sm:p-10"
        data-aos="fade-up"
        data-aos-offset="60"
      >
        <p className="mb-4">
          I&apos;m Elbethel Ambachew, a Computer Science student at Addis Ababa
          University with a strong interest in software engineering and building
          practical, reliable applications.
        </p>
        <p className="mb-4">
          I&apos;ve worked on projects involving mobile application development,
          backend systems, and database design, gaining hands-on experience
          turning ideas into functional software. I&apos;m particularly
          interested in understanding how different parts of a system work
          together, from user-facing interfaces to the backend logic that powers
          them.
        </p>
        <p>
          I&apos;m continuously strengthening my engineering skills while
          exploring how AI and machine learning can solve meaningful,
          real-world problems.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
        {values.map(({ title, description, Icon }, index) => (
          <article
            key={title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-accent hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay={index * 35}
          >
            <div className="mb-3 inline-flex rounded-lg bg-surface p-2 text-2xl text-accent-strong">
              {createElement(Icon, { "aria-hidden": true })}
            </div>
            <h3 className="mb-2 font-bold text-primary">{title}</h3>
            <p className="leading-relaxed text-secondary">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
