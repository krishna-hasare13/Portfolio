import "./styles/Work.css";
import { useEffect, useRef, useState } from "react";
import WorkImage from "./WorkImage";
import { FaGithub, FaLink } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";



const projects = [
  {
    name: "MentorSpace",
    category: "Real-Time Mentorship Platform",
    tools: "React, Node.js, Express, MongoDB, WebRTC, Socket.io",
    link: "https://github.com/krishna-hasare13/Mentorspace",
    image: "/images/mentorspace.png",
  },
  {
    name: "Cresem",
    category: "AI Credit Intelligence & Risk Assessment Engine",
    tools: "Python, FastAPI, LangChain, LLM APIs",
    link: "https://cresem.asenra.in",
    image: "/images/IntelliAssess.png",
  },
  {
    name: "Voice Phishing Detection",
    category: "AI/ML Security Project",
    tools: "Python, BERT, NLP, Speech-to-Text, ML Pipeline",
    link: "https://github.com/krishna-hasare13/voice-phishing-detection",
    image: "/images/voice phishing.png",
  },
];

const Work = () => {
  const workFlexRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const workFlex = workFlexRef.current;
    if (!workFlex) return;

    setCanScrollLeft(workFlex.scrollLeft > 1);
    setCanScrollRight(
      workFlex.scrollLeft + workFlex.clientWidth < workFlex.scrollWidth - 1,
    );
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);

    return () => window.removeEventListener("resize", updateScrollButtons);
  }, []);

  const scrollProjects = (direction: "left" | "right") => {
    const workFlex = workFlexRef.current;
    if (!workFlex) return;

    workFlex.scrollBy({
      left: direction === "right" ? workFlex.clientWidth : -workFlex.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div
          className="work-flex"
          ref={workFlexRef}
          onScroll={updateScrollButtons}
        >
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
              <div className="work-links">
                <a
                  href={project.link}
                  target="_blank"
                  className="work-link-btn"
                  data-cursor="disable"
                >
                  {project.name === "Cresem" ? <FaLink /> : <FaGithub />} {project.name === "Cresem" ? "Live Link" : "GitHub"}
                </a>
              </div>
            </div>
          ))}
          {canScrollLeft && (
            <button
              className="work-next-btn work-prev-btn"
              type="button"
              onClick={() => scrollProjects("left")}
              aria-label="Show previous project"
            >
              <MdKeyboardArrowRight />
            </button>
          )}
          {canScrollRight && (
            <button
              className="work-next-btn"
              type="button"
              onClick={() => scrollProjects("right")}
              aria-label="Show next project"
            >
              <MdKeyboardArrowRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
