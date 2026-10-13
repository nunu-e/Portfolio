import { TbBuildingArch } from "react-icons/tb";

const experiences = [
  {
    title: "Mobile App Development Intern",
    organization: "CREAVERS Service P.L.C",
    location: "Addis Ababa, Ethiopia",
    dates: "July 2026 – September 2026",
    type: "Internship",
    responsibilities: [
      "Developed Flutter/Dart mobile features for a service marketplace connecting customers with service providers, including customer and provider journeys, role selection, and provider onboarding.",
      "Implemented user authentication flows and integrated app screens with ASP.NET Core REST APIs backed by PostgreSQL.",
      "Collaborated with backend developers to integrate and validate REST API endpoints against frontend requirements.",
      "Used Git and GitHub for collaborative development and version control.",
    ],
  },
  {
    title: "Software Development Intern",
    organization: "Addis Ababa University",
    location: "Addis Ababa, Ethiopia",
    dates: "July 2026 – September 2026",
    type: "Internship",
    responsibilities: [
      "Developed components of the Safe Exam Browser (SEB) client for the AAU Exam Management System using C#, .NET 8, and WPF.",
      "Integrated WebView2 to host the web-based examination platform within a controlled fullscreen Windows examination environment and implemented invigilator controls.",
      "Worked on desktop-client integration with platform authentication and REST APIs, along with local development configuration.",
      "Troubleshot build, dependency, UI, and runtime issues while collaborating through Git and GitHub.",
    ],
  },
  {
    title: "AI Mastery Training",
    organization: "Kifiya AI Mastery Training Program",
    type: "Training",
    description:
      "Training focused on machine learning engineering, data engineering, and financial analysis, with an emphasis on understanding data-driven applications.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-surface px-6 py-20 sm:px-10 lg:px-16"
    >
      <div data-aos="fade-up" data-aos-offset="60">
        <h2 className="mb-5 text-center text-4xl font-bold text-primary">
          Experience
        </h2>
        <div className="mx-auto mb-10 h-1 w-20 rounded-full bg-accent" />
      </div>
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-12">
        <div className="absolute bottom-0 left-1/2 top-0 hidden w-0.5 -translate-x-1/2 bg-border md:block" />
        {experiences.map((experience, index) => (
          <article
            key={experience.title}
            className={`relative z-10 rounded-3xl border border-border bg-card p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-accent hover:shadow-lg sm:p-8 ${
              index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
            }`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-offset="60"
          >
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 text-sm font-semibold text-accent-strong">
              <TbBuildingArch aria-hidden="true" />
              {experience.type}
            </span>
            <h3 className="mb-2 text-xl font-bold text-primary sm:text-2xl">
              {experience.title}
            </h3>
            <p className="mb-1 font-semibold text-accent-strong">
              {experience.organization}
            </p>
            {experience.location && (
              <p className="mb-1 text-secondary">{experience.location}</p>
            )}
            {experience.dates && (
              <p className="mb-4 text-sm font-medium text-secondary">
                {experience.dates}
              </p>
            )}
            {experience.responsibilities ? (
              <ul className="list-disc space-y-2 pl-5 leading-relaxed marker:text-accent text-primary">
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            ) : (
              <p className="leading-relaxed text-primary">
                {experience.description}
              </p>
            )}
            <span
              aria-hidden="true"
              className={`absolute top-8 hidden h-4 w-4 rounded-full border-4 border-accent bg-card md:block ${
                index % 2 === 0 ? "-right-8" : "-left-8"
              }`}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
