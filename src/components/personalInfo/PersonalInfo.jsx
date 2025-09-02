import { useState } from "react";

function PersonalInfo() {
  return (
    <div className="personal-form">
      <h2>Personal Infromation</h2>
      <form className="personal-info">
        <div className="input-section">
          <label className="personal-input-label">
            Name:
            <input type="name" id="name" name="name" required />
          </label>
        </div>
        <div className="input-section">
          <label className="personal-input-label">
            Email:
            <input type="email" id="email" name="email" required />
          </label>
        </div>
        <div className="input-section">
          <label className="personal-input-label">
            Phone:
            <input type="number" id="phone" name="phone" required />
          </label>
        </div>
        <div className="input-section">
          <label className="personal-input-label">
            Address:
            <input type="name" id="address" name="address" required />
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

export default PersonalInfo;
