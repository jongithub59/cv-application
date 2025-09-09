import { useState } from "react";

function PersonalInfo({ onClickSave, onClickCancel }) {
  //hooks to track what is inputted into each box
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [addressValue, setAddressValue] = useState("");

  // put all data into an object when save is clicked for use in App.jsx and Resume.jsx through the props function
  function handleSaveClick() {
    const personalInfo = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      address: addressValue,
    };
    onClickSave(personalInfo);
  }

  return (
    <div className="personal-form">
      <h2>Personal Infromation</h2>
      <form className="personal-info">
        <div className="input-section">
          <label className="personal-input-label">
            Name:
            <input
              type="name"
              value={nameValue} // set value to the state hook
              onChange={(event) => setNameValue(event.target.value)} //updates state for each value when a key is pressed
              id="name"
              name="name"
              required
            />
          </label>
        </div>
        <div className="input-section">
          <label className="personal-input-label">
            Email:
            <input
              type="email"
              value={emailValue}
              onChange={(event) => setEmailValue(event.target.value)}
              id="email"
              name="email"
              required
            />
          </label>
        </div>
        <div className="input-section">
          <label className="personal-input-label">
            Phone:
            <input
              type="number"
              value={phoneValue}
              onChange={(event) => setPhoneValue(event.target.value)}
              id="phone"
              name="phone"
              required
            />
          </label>
        </div>
        <div className="input-section">
          <label className="personal-input-label">
            Address:
            <input
              type="name"
              value={addressValue}
              onChange={(event) => setAddressValue(event.target.value)}
              id="address"
              name="address"
              required
            />
          </label>
        </div>
        <div className="buttons">
          <button onClick={onClickCancel} className="cancel" type="button">
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

export default PersonalInfo;
