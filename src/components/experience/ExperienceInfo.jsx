import { useState } from "react";

function ExperienceInfo() {
  return (
    <div className="exp-form">
      <h2>Prior Experience</h2>
      <form className="experience-info">
        <div className="input-section">
          <label className="experience-input-label">
            Company Name:
            <input type="text" id="company-name" required />
          </label>
        </div>
        <div className="input-section">
          <label className="experience-input-label">
            Position:
            <input type="text" id="position" required />
          </label>
        </div>
        <div className="input-section">
          <div className="date-inputs">
            <label className="experience-input-label date-label">
              Start Date:
              <input type="text" id="date" required />
            </label>
            <label className="experience-input-label date-label">
              End Date:
              <input type="text" id="date" required />
            </label>
          </div>
        </div>
        <div className="input-section">
          <label className="experience-input-label">
            Location:
            <input type="text" id="location" required />
          </label>
        </div>
        <div className="input-section">
          <label className="experience-input-label">
            Description:
            <textarea id="description" required />
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

export default ExperienceInfo;
