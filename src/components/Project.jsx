import { createElement } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Moodbuddy from "../assets/Screenshot 2026-06-02 110152.png";
import Campustrade from "../assets/Screenshot 2026-07-01 224024.png";
import EloraRestaurant from "../assets/Screenshot 2026-07-01 224234.png";
import FlappyBird from "../assets/Screenshot 2026-07-01 230326.png";
import Creavers from "../assets/Creavers.jpg";
import Ems from "../assets/EMS.png";
import FraudDetectionIllustration from "../assets/fraud-detection-illustration.svg";
import ComplaintRagIllustration from "../assets/complaint-rag-illustration.svg";

const projects = [
  {
    title: "Flappy Bird",
    image: FlappyBird,
    imageAlt: "Flappy Bird project screenshot",
    imageFrameClass: "bg-[#78c2e8] p-2 sm:p-3",
    description:
      "A desktop recreation of the classic Flappy Bird game developed using C++, OpenGL, and GLUT. Players control the bird by navigating through a series of obstacles while avoiding collisions. The project demonstrates computer graphics concepts, real-time rendering, animation, collision detection, and event-driven programming.",
    technologies: ["C++", "OpenGL", "GLUT"],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/nunu-e/flappy_bird.git",
        Icon: FaGithub,
      },
    ],
  },
  {
    title: "MoodBuddy",
    image: Moodbuddy,
    imageAlt: "MoodBuddy project screenshot",
    imageFrameClass: "bg-[#fff8f8] p-0",
    description:
      "A simple, friendly web application designed to help users track and reflect on their emotional wellbeing. It allows people to record their mood each day, add a short journal note, and visualize how their emotions change over time. The goal is to make self reflection easy, consistent, and personal.",
    technologies: ["React", "NodeJs", "MongoDb"],
    links: [
      {
        label: "Live Demo",
        href: "https://moodbuddyapp.netlify.app/",
        Icon: FaExternalLinkAlt,
      },
      {
        label: "Frontend Code",
        href: "https://github.com/nunu-e/mood-buddy-frontend.git",
        Icon: FaGithub,
      },
      {
        label: "Backend Code",
        href: "https://github.com/nunu-e/mood-buddy-backend.git",
        Icon: FaGithub,
      },
    ],
  },
  {
    title: "Elora Restaurant Management System",
    image: EloraRestaurant,
    imageAlt: "Elora Restaurant Management System project screenshot",
    imageFrameClass: "bg-[#101c20] p-0",
    description:
      "A full-stack restaurant management web application designed to simplify restaurant operations and enhance the customer experience. Users can browse the menu, place food orders, reserve tables, rate meals, and securely manage their accounts. An admin dashboard allows administrators to manage menu items, customer orders, and reservations through an intuitive interface.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/BethlehemFetene/Elora-restaurant.git",
        Icon: FaGithub,
      },
    ],
  },
  {
    title: "Campus Trade",
    image: Campustrade,
    imageAlt: "Campus Trade project screenshot",
    imageFrameClass: "bg-[#1268e8] p-0",
    description:
      "A simple, practical web platform designed to help students buy, sell, and exchange goods within their campus community. It allows users to list items, browse available products, and connect with other students through real-time messaging. The goal is to create a convenient and secure marketplace where campus members can trade easily, communicate instantly, and manage their transactions in a smooth and reliable way.",
    technologies: ["React", "NodeJs", "MongoDb"],
    links: [
      {
        label: "Live Demo",
        href: "https://campus-trade-frontend.netlify.app/",
        Icon: FaExternalLinkAlt,
      },
      {
        label: "Frontend Code",
        href: "https://github.com/nunu-e/campus-trade-frontend.git",
        Icon: FaGithub,
      },
      {
        label: "Backend Code",
        href: "https://github.com/nunu-e/campus-trade-backend.git",
        Icon: FaGithub,
      },
    ],
  },
  {
    title: "Creavers Marketplace",
    image: Creavers,
    imageAlt: "Creavers Marketplace mobile onboarding screen",
    imageFrameClass: "bg-[#f0edf4] p-2 sm:p-3",
    description:
      "Built features for a cross-role marketplace application, including authentication, customer/provider roles, provider onboarding, and workflow screens using Flutter. Connected the Flutter client to an ASP.NET Core REST API backed by PostgreSQL to support data exchange between customer and provider roles.",
    technologies: ["Flutter", "Dart", "ASP.NET Core", "PostgreSQL", "REST APIs"],
    links: [],
  },
  {
    title: "AAU Exam Management System (EMS)",
    image: Ems,
    imageAlt: "AAU Exam Management System administrator dashboard",
    imageFrameClass: "bg-[#f7f7f7] p-0",
    description:
      "Contributed to a team-built university examination platform supporting student and staff management, authentication, examination sessions, grading, and email/OTP workflows. Developed components of the Windows Safe Exam Browser client, including WebView2 integration, a fullscreen examination environment, and invigilator controls.",
    technologies: [
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "C#",
      ".NET 8",
      "WPF",
      "WebView2",
      "Docker",
      "REST APIs",
    ],
    links: [],
  },
  {
    title: "Fraud Detection & Explainability",
    image: FraudDetectionIllustration,
    imageAlt:
      "Concept diagram of transaction signals flowing into a fraud risk model, not an application screenshot",
    isPlaceholder: true,
    description:
      "Analyzed e-commerce and credit-card transactions through data cleaning, geolocation and behavioral feature engineering, and stratified evaluation. Compared logistic regression with a tuned Random Forest, addressed class imbalance with SMOTE on training data, and used SHAP to examine feature importance and individual predictions.",
    technologies: [
      "Python",
      "Pandas",
      "scikit-learn",
      "imbalanced-learn",
      "SHAP",
      "Jupyter",
    ],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/nunu-e/fraud-detection",
        Icon: FaGithub,
      },
    ],
  },
  {
    title: "CrediTrust Complaint Analysis RAG Chatbot",
    image: ComplaintRagIllustration,
    imageAlt:
      "Concept diagram of complaint retrieval grounding an AI-generated answer, not an application screenshot",
    isPlaceholder: true,
    description:
      "Built a command-line complaint analysis prototype that prepares CFPB complaint narratives, creates sentence-transformer embeddings, retrieves relevant records from ChromaDB, and uses FLAN-T5 to generate answers grounded in the retrieved context. Responses include source metadata such as company and issue.",
    technologies: [
      "Python",
      "Pandas",
      "Sentence Transformers",
      "Hugging Face Transformers",
      "ChromaDB",
    ],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/nunu-e/rag-complaint-chatbot",
        Icon: FaGithub,
      },
    ],
  },
];

const projectOrder = [
  "Campus Trade",
  "Creavers Marketplace",
  "AAU Exam Management System (EMS)",
  "MoodBuddy",
  "Elora Restaurant Management System",
  "Flappy Bird",
  "Fraud Detection & Explainability",
  "CrediTrust Complaint Analysis RAG Chatbot",
];

const orderedProjects = projectOrder
  .map((title) => projects.find((project) => project.title === title))
  .filter(Boolean);

const ProjectCard = ({ project, index }) => (
  <article
    className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-accent hover:shadow-xl"
    data-aos="fade-up"
    data-aos-delay={(index % 2) * 35}
  >
    <div className={`aspect-video overflow-hidden rounded-t-3xl ${project.imageFrameClass ?? "bg-surface p-3 sm:p-4"}`}>
      <img
        src={project.image}
        alt={project.imageAlt}
        className={`h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02] motion-reduce:transform-none ${project.isPlaceholder ? "rounded-xl" : ""}`}
      />
    </div>
    {project.isPlaceholder && (
      <p className="sr-only">Concept illustration, not an application screenshot.</p>
    )}
    <div className="flex flex-1 flex-col p-6 sm:p-8">
      <h3 className="mb-3 text-xl font-bold text-primary">{project.title}</h3>
      <p className="mb-5 leading-relaxed text-secondary">
        {project.description}
      </p>
      <ul className="mb-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-accent"
          >
            {technology}
          </li>
        ))}
      </ul>
      {project.links.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3">
          {project.links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary transition-colors hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-strong"
            >
              {createElement(Icon, { "aria-hidden": true })}
              <span>{label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  </article>
);

const Project = () => {
  return (
    <section id="project" className="bg-page px-6 py-20 sm:px-10 lg:px-16">
      <div data-aos="fade-up" data-aos-offset="60">
        <h2 className="mb-5 text-center text-4xl font-bold text-primary">
          Featured Projects
        </h2>
        <div className="mx-auto mb-10 h-1 w-20 rounded-full bg-accent" />
      </div>
      <p className="mx-auto mb-10 max-w-3xl text-center text-secondary">
        A selection of my recent work and side projects
      </p>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8">
        {orderedProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Project;
