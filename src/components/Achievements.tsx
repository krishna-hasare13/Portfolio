import "./styles/Career.css";

const Achievements = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Ideathon 2026 – 1st Place</h4>
                <h5>D. Y. Patil School of Engineering & Management</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Secured 1st Place at Ideathon 2026 for pitching IntelliAssess,
              an AI-based credit risk and appraisal solution.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Google Gemini Student Ambassador</h4>
                <h5>Google (2026)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Selected as Google Gemini Student Ambassador, representing and
              promoting Google's AI initiatives on campus.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon – Top 7 / 100+ Teams</h4>
                <h5>St. Joseph's College of Engineering, Chennai</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Ranked Top 7 among 100+ teams in a 24-hour Hackathon by
              developing a real-time Voice Phishing Detection System.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
