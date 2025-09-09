function Resume(personalInfo, educationInfo, experienceInfo) {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <div className="resume-name">
          <h2>{personalInfo.name}</h2>
        </div>
        <div className="resume-contact-info">
          <div className="resume-email">{personalInfo.email}</div>
          <div className="resume-phone">{personalInfo.phone}</div>
          <div className="resume-address">{personalInfo.address}</div>
        </div>
      </div>
      <div className="resume-education-section resume-section">
        <h3 className="section-header">Education</h3>
        <div className="resume-education">
          <div className="resume-edu-group">
            <div className="resume-edu-date">2018-2022</div>
            <div className="resume-edu-location">Kentucky</div>
          </div>
          <div className="resume-edu-group">
            <div className="resume-school">
              <strong>Kentucky State University</strong>
            </div>
            <div className="resume-degree">Bachelors in Business</div>
          </div>
        </div>
      </div>
      <div className="resume-experience-section resume-section">
        <h3 className="section-header">Prior Experience</h3>
        <div className="resume-experience">
          <div className="resume-exp-group">
            <div className="resume-exp-date">2022-present</div>
            <div className="resume-exp-location">Kentucky</div>
          </div>
          <div className="resume-exp-group">
            <div className="resume-company-name">
              <strong>Kentucky Co.</strong>
            </div>
            <div className="resume-exp-postiton">Senior Supervisor</div>
            <div className="resume-exp-desc">
              Manage large teams to efficiently achieve the company's goals
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
