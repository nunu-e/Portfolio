import { useEffect, useState } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 shadow-sm backdrop-blur-md"
          : "bg-[#fef7f9]-transparent"
      }`}
    >
      <nav className="flex justify-between items-center p-8 ">
        <div>
          <h1 className="text-3xl text-[#f472b6] font-bold transition-transform duration-500 hover:scale-110">
            ELBETHEL AMBACHEW
          </h1>
        </div>
        <div className="flex items-center gap-7">
          <a
            href="#home"
            className="cursor-pointer p-2 rounded-2xl  hover:text-[#f472b6] transition-all duration-200 hover:scale-100 hover:bg-[#fce7f3]"
          >
            Home
          </a>
          <a
            href="#about"
            className="cursor-pointer p-2 rounded-2xl  hover:text-[#f472b6] transition-all duration-200 hover:scale-100 hover:bg-[#fce7f3]"
          >
            About
          </a>
          <a
            href="#experience"
            className="cursor-pointer p-2 rounded-2xl hover:text-[#f472b6] transition-all duration-200 hover:scale-100 hover:bg-[#fce7f3]"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="cursor-pointer p-2 rounded-2xl hover:text-[#f472b6] transition-all duration-200 hover:scale-100 hover:bg-[#fce7f3]"
          >
            Skills
          </a>
          <a
            href="#project"
            className="cursor-pointer p-2 rounded-2xl hover:text-[#f472b6] transition-all duration-200 hover:scale-100 hover:bg-[#fce7f3]"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="cursor-pointer p-2 rounded-2xl hover:text-[#f472b6] transition-all duration-200 hover:scale-100 hover:bg-[#fce7f3]"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
