import { useState } from "react";

function EducationInfo() {
  return (
    <div className="ed-form">
      <h2>Education</h2>
      <form className="education-info">
        <div className="input-section">
          <label className="experience-input-label">
            Institution:
            <input type="text" id="school-name" required />
          </label>
        </div>
        <div className="input-section">
          <label className="experience-input-label">
            Degree:
            <input type="text" id="degree" required />
          </label>
        </div>
        <div className="input-section">
          <div className="date-inputs">
            <label className="experience-input-label date-label">
              Start Date:
              <input type="date" id="date" required />
            </label>
            <label className="experience-input-label date-label">
              End Date:
              <input type="date" id="date" required />
            </label>
          </div>
        </div>
        <div className="input-section">
          <label className="experience-input-label">
            Location:
            <input type="text" id="location" required />
          </label>
        </div>
        <div className="buttons">
          <button className="delete" type="button">
            Delete
          </button>
          <button className="cancel" type="button">
            Cancel
          </button>
          <button className="save" type="button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EducationInfo;
