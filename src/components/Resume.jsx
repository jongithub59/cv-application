function Resume(props) {
  return (
    <div className="resume-container">
      {console.log(props.educationInfo[0])}
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
        {/* conditional header that will disappear if there is no content from the education section to display */}
        {!(
          props.educationInfo[0].institution === "" &&
          props.educationInfo[0].degree === "" &&
          props.educationInfo[0].startDate === "" &&
          props.educationInfo[0].endDate === "" &&
          props.educationInfo[0].location === ""
        ) && <h3 className="section-header">Education</h3>}
        {props.educationInfo.map((edu, i) => (
          <div key={i} className="resume-education">
            <div className="resume-edu-group">
              <div className="resume-edu-date">
                {edu.startDate}
                {edu.startDate && edu.endDate && <span> - </span>}
                {edu.endDate}
              </div>
              <div className="resume-edu-location">{edu.location}</div>
            </div>
            <div className="resume-edu-group">
              <div className="resume-school">
                <strong>{edu.institution}</strong>
              </div>
              <div className="resume-degree">{edu.degree}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="resume-experience-section resume-section">
        {props.experienceInfo !== "" && (
          <h3 className="section-header">Prior Experience</h3>
        )}
        {props.experienceInfo.map((exp, i) => (
          <div key={i} className="resume-experience">
            <div className="resume-exp-group">
              <div className="resume-exp-date">
                {exp.startDate}
                {exp.startDate && exp.endDate && <span> - </span>}
                {exp.endDate}
              </div>
              <div className="resume-exp-location">{exp.location}</div>
            </div>
            <div className="resume-exp-group">
              <div className="resume-company-name">
                <strong>{exp.company}</strong>
              </div>
              <div className="resume-exp-postiton">{exp.position}</div>
              <div className="resume-exp-desc">{exp.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume;
