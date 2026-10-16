import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web Developer</h4>
                <h5>8Bit Studios (Marketing Agency)</h5>
              </div>
              <h3>June 2026 - Present</h3>
            </div>
            <ul>
              <li>
                Independently designed, built and launched a brand-driven
                agency website on a custom domain (8bitstudios.in), giving the
                client a professional online presence and a channel for lead
                generation.
              </li>
              <li>
                Owned the full delivery cycle, from requirements and UI design
                to deployment, client feedback and handoff, on schedule.
              </li>
            </ul>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Labmentix (Remote)</h5>
              </div>
              <h3>Jan 2026 - June 2026</h3>
            </div>
            <ul>
              <li>
                Shipped 7+ full-stack web applications end-to-end, from
                responsive UI and REST APIs to database design and deployment.
              </li>
              <li>
                Debugged and optimized existing codebases, cutting reported
                bugs by 85% before release.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
