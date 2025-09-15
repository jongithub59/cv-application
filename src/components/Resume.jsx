function Resume(props) {
  return (
    <div className="resume-container">
      {console.log(props)}
      <div className="resume-header">
        <div className="resume-name">
          <h2>{props.personalInfo.name}</h2>
        </div>
        <div className="resume-contact-info">
          <div className="resume-email">{props.personalInfo.email}</div>
          <div className="resume-phone">{props.personalInfo.phone}</div>
          <div className="resume-address">{props.personalInfo.address}</div>
        </div>
      </div>
      <div className="resume-education-section resume-section">
        <h3 className="section-header">Education</h3>
        <div className="resume-education">
          <div className="resume-edu-group">
            <div className="resume-edu-date">
              {props.educationInfo.startDate} - {props.educationInfo.endDate}
            </div>
            <div className="resume-edu-location">
              {props.educationInfo.location}
            </div>
          </div>
          <div className="resume-edu-group">
            <div className="resume-school">
              <strong>{props.educationInfo.institution}</strong>
            </div>
            <div className="resume-degree">{props.educationInfo.degree}</div>
          </div>
        </div>
      </div>
      <div className="resume-experience-section resume-section">
        <h3 className="section-header">Prior Experience</h3>
        <div className="resume-experience">
          <div className="resume-exp-group">
            <div className="resume-exp-date">10/2022 - present</div>
            <div className="resume-exp-location">Lexington, Kentucky</div>
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
