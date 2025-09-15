import { useState } from "react";

function EducationInfo({ onClickSave }) {
  const [institutionValue, setInstitutionValue] = useState("");
  const [degreeValue, setDegreeValue] = useState("");
  const [startDateValue, setStartDateValue] = useState("");
  const [endDateValue, setEndDateValue] = useState("");
  const [locationValue, setLocationValue] = useState("");

  function handleSaveClick() {
    const educationInfo = {
      institution: institutionValue,
      degree: degreeValue,
      startDate: startDateValue,
      endDate: endDateValue,
      location: locationValue,
    };
    onClickSave(educationInfo);
  }

  return (
    <div className="ed-form">
      <h2>Education</h2>
      <form className="education-info">
        <div className="input-section">
          <label className="experience-input-label">
            Institution:
            <input
              type="text"
              id="school-name"
              value={institutionValue}
              onChange={(event) => setInstitutionValue(event.target.value)}
              required
            />
          </label>
        </div>
        <div className="input-section">
          <label className="experience-input-label">
            Degree:
            <input
              type="text"
              id="degree"
              value={degreeValue}
              onChange={(event) => setDegreeValue(event.target.value)}
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

export default EducationInfo;
