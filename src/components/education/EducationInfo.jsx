import { useState } from "react";

function EducationInfo({
  onClickSave,
  onClickDelete,
  educationInfo,
  addNewForm,
}) {
  const [institutionValue, setInstitutionValue] = useState(
    educationInfo.institution
  );
  const [degreeValue, setDegreeValue] = useState(educationInfo.degree);
  const [startDateValue, setStartDateValue] = useState(educationInfo.startDate);
  const [endDateValue, setEndDateValue] = useState(educationInfo.endDate);
  const [locationValue, setLocationValue] = useState(educationInfo.location);

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

  function handleDelete() {
    setInstitutionValue("");
    setDegreeValue("");
    setStartDateValue("");
    setEndDateValue("");
    setLocationValue("");
    onClickDelete();
  }

  function handleAddNew() {
    addNewForm();
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
          <button onClick={handleDelete} className="delete" type="button">
            Delete
          </button>
          <button onClick={handleAddNew} className="add-new" type="button">
            + Education
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
