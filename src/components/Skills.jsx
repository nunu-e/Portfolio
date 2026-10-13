import { createElement } from "react";
import {
  FaBrain,
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaDocker,
  FaExchangeAlt,
  FaMobileAlt,
  FaServer,
  FaUsers,
  FaVial,
  FaChartLine,
} from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import {
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiReact,
} from "react-icons/si";
import { TbBrandJavascript, TbBrandMysql, TbWorld } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

const categories = [
  {
    title: "Frontend Development",
    description: "Building responsive, interactive user interfaces.",
    Icon: FaCode,
    skills: [
      ["React", SiReact],
      ["JavaScript", TbBrandJavascript],
      ["HTML5", SiHtml5],
      ["CSS3", TbWorld],
      ["Tailwind CSS", RiTailwindCssFill],
    ],
  },
  {
    title: "Backend Development",
    description:
      "Building application logic, APIs, and server-side functionality.",
    Icon: FaServer,
    skills: [
      ["Node.js", FaNodeJs],
      ["Express.js", SiExpress],
      ["C#", FaCode],
      ["ASP.NET Core", FaServer],
      ["REST APIs", FaExchangeAlt],
    ],
  },
  {
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications.",
    Icon: FaMobileAlt,
    skills: [
      ["Flutter", SiFlutter],
      ["Dart", SiDart],
      ["Firebase", SiFirebase],
    ],
  },
  {
    title: "Databases",
    Icon: FaDatabase,
    skills: [
      ["PostgreSQL", SiPostgresql],
      ["MySQL", TbBrandMysql],
      ["MongoDB", SiMongodb],
    ],
  },
  {
    title: "AI & Machine Learning",
    Icon: FaBrain,
    skills: [
      ["Python", SiPython],
      ["Machine Learning", FaBrain],
      ["Data Analysis", FaChartLine],
    ],
  },
  {
    title: "Tools & Engineering Practices",
    Icon: FaVial,
    skills: [
      ["Git", SiGit],
      ["GitHub", SiGithub],
      ["Docker", FaDocker],
      ["API Testing", FaExchangeAlt],
      ["Software Testing", FaCheckCircle],
      ["Agile/Scrum", FaUsers],
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-page px-6 py-20 sm:px-10 lg:px-16">
      <div data-aos="fade-up" data-aos-offset="60">
        <h2 className="mb-5 text-center text-4xl font-bold text-primary">
          Skills
        </h2>
        <div className="mx-auto mb-10 h-1 w-20 rounded-full bg-accent" />
      </div>
      <p className="mx-auto mb-10 max-w-3xl text-center leading-relaxed text-secondary">
        Technologies and tools I use to build applications, develop backend
        systems, and explore intelligent solutions.
      </p>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map(({ title, description, Icon, skills }, index) => (
          <article
            key={title}
            className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-accent hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay={(index % 3) * 35}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-xl bg-accent p-3 text-2xl text-ink transition-transform duration-200 group-hover:-translate-y-0.5">
                {createElement(Icon, { "aria-hidden": true })}
              </span>
              <div>
                <p className="text-sm font-semibold tracking-widest text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-bold text-primary">{title}</h3>
              </div>
            </div>
            {description && (
              <p className="mb-4 text-sm leading-relaxed text-secondary">
                {description}
              </p>
            )}
            <ul className="flex flex-wrap gap-2">
              {skills.map(([name, SkillIcon]) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-2 text-sm font-medium text-primary"
                >
                  {createElement(SkillIcon, {
                    className: "shrink-0 text-accent-strong",
                    "aria-hidden": true,
                  })}
                  {name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
