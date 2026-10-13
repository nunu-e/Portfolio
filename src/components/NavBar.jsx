import { useEffect, useState } from "react";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Projects", "project"],
  ["Contact", "contact"],
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              Math.abs(first.boundingClientRect.top - window.innerHeight * 0.4) -
              Math.abs(second.boundingClientRect.top - window.innerHeight * 0.4),
          );

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );

    links.forEach(([, id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-[background-color,box-shadow] duration-200 ${
        isScrolled
          ? "bg-page/95 shadow-sm backdrop-blur-md"
          : "bg-page/90"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-3 sm:flex-row sm:px-8 sm:py-4"
      >
        <a
          href="#home"
          className="shrink-0 text-xl font-bold text-accent-strong transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong sm:text-2xl"
        >
          ELBETHEL AMBACHEW
        </a>
        <div className="flex w-full max-w-full flex-wrap items-center justify-center gap-1 sm:w-auto sm:gap-2">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
              className={`rounded-xl px-2 py-2 text-sm transition-colors duration-200 hover:bg-hover hover:text-accent-strong active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent-strong sm:px-3 ${
                activeSection === id ? "bg-hover text-accent-strong" : "text-primary"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
