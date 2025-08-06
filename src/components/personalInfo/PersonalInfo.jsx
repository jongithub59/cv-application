import { useState } from "react";

function PersonalInfo() {
  return (
    <>
      <form className="personal-info">
        <h2>Personal Infromation</h2>
        <label className="personal-input-label">
          Name:
          <input type="name" id="name" name="name" required />
        </label>
        <label className="personal-input-label">
          Email:
          <input type="email" id="email" name="email" required />
        </label>
        <label className="personal-input-label">
          Phone:
          <input type="number" id="phone" name="phone" required />
        </label>
        <label className="personal-input-label">
          Address:
          <input type="name" id="address" name="address" required />
        </label>
      </form>
    </>
  );
}

export default PersonalInfo;
