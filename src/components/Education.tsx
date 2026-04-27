import "./styles/Career.css";

const Education = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>D.Y. Patil School of Engineering & Management, Kolhapur</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Currently pursuing Bachelor of Technology in Computer Science and
              Engineering with a CGPA of 7.76/10.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary (12th)</h4>
                <h5>Vivekanand College, Kolhapur</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed higher secondary education with 66.83% aggregate.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary School (10th)</h4>
                <h5>Radhabai Shinde English Medium School, Kolhapur</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed secondary education with 91.20% aggregate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
