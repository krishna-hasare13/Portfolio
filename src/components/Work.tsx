import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub } from "react-icons/fa6";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "MentorSpace",
    category: "Real-Time Mentorship Platform",
    tools: "React, Node.js, Express, MongoDB, WebRTC, Socket.io",
    github: "https://github.com/krishna-hasare13/Mentorspace",
    image: "/images/mentorspace.png",
  },
  {
    name: "IntelliAssess",
    category: "AI-Powered Credit Risk & Appraisal",
    tools: "React, Node.js, Python, AI/ML, MongoDB",
    github: "https://github.com/krishna-hasare13/IntelliAssess",
    image: "/images/IntelliAssess.png",
  },
  {
    name: "Voice Phishing Detection",
    category: "AI/ML Security Project",
    tools: "Python, BERT, NLP, Speech-to-Text, ML Pipeline",
    github: "https://github.com/krishna-hasare13/voice-phishing-detection",
    image: "/images/voice phishing.png",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
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
                  href={project.github}
                  target="_blank"
                  className="work-link-btn"
                  data-cursor="disable"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
