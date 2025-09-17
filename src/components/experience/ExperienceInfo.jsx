import { useState } from "react";

function ExperienceInfo({ onClickSave, experienceInfo }) {
  const [companyValue, setCompanyValue] = useState(experienceInfo.company);
  const [positonValue, setPositionValue] = useState(experienceInfo.position);
  const [startDateValue, setStartDateValue] = useState(
    experienceInfo.startDate
  );
  const [endDateValue, setEndDateValue] = useState(experienceInfo.endDate);
  const [locationValue, setLocationValue] = useState(experienceInfo.location);
  const [descValue, setDescValue] = useState(experienceInfo.desc);

  function handleSaveClick() {
    const experienceInfo = {
      company: companyValue,
      position: positonValue,
      startDate: startDateValue,
      endDate: endDateValue,
      location: locationValue,
      desc: descValue,
    };
    onClickSave(experienceInfo);
  }

  return (
    <div className="exp-form">
      <h2>Prior Experience</h2>
      <form className="experience-info">
        <div className="input-section">
          <label className="experience-input-label">
            Company Name:
            <input
              type="text"
              id="company-name"
              value={companyValue}
              onChange={(event) => setCompanyValue(event.target.value)}
              required
            />
          </label>
        </div>
        <div className="input-section">
          <label className="experience-input-label">
            Position:
            <input
              type="text"
              id="position"
              value={positonValue}
              onChange={(event) => setPositionValue(event.target.value)}
              required
            />
          </label>
        </div>
        <div className="input-section">
          <div className="date-inputs">
            <label className="experience-input-label date-label">
              Start Date:
              <input
                type="text"
                id="date"
                value={startDateValue}
                onChange={(event) => setStartDateValue(event.target.value)}
                required
              />
            </label>
            <label className="experience-input-label date-label">
              End Date:
              <input
                type="text"
                id="date"
                value={endDateValue}
                onChange={(event) => setEndDateValue(event.target.value)}
                required
              />
            </label>
          </div>
        </div>
        <div className="input-section">
          <label className="experience-input-label">
            Location:
            <input
              type="text"
              id="location"
              value={locationValue}
              onChange={(event) => setLocationValue(event.target.value)}
              required
            />
          </label>
        </div>
        <div className="input-section">
          <label className="experience-input-label">
            Description:
            <textarea
              id="description"
              value={descValue}
              onChange={(event) => setDescValue(event.target.value)}
              required
            />
          </label>
        </div>
        <div className="buttons">
          <button className="delete" type="button">
            Delete
          </button>
          <button className="cancel" type="button">
            Cancel
          </button>
          <button onClick={handleSaveClick} className="save" type="button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExperienceInfo;
