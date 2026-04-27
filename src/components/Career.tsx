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
                <h4>Web Developer Intern</h4>
                <h5>Labmentix (Remote)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed 7+ full-stack applications with end-to-end
              implementation including frontend, backend, and database
              integration. Built REST APIs using Node.js and Express, ensuring
              efficient data flow and scalable architecture.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
