import { useState } from "react";
import PersonalInfo from "./components/personalInfo/PersonalInfo";
import EducationInfo from "./components/education/EducationInfo";
import ExperienceInfo from "./components/experience/ExperienceInfo";
import Resume from "./components/Resume";
import "./styles/App.css";
import DisplayForms from "./components/DisplayForms";

function App() {
  // example data for initial value of state hook, will need to expand for rest of reeume data
  const examplePersonalInfo = {
    personalInfo: {
      name: "Joe Hawthorne",
      email: "joeh@gmail.com",
      phone: "913-784-4959",
      address: "Lexington, Kentucky",
    },
  };

  // hook for personal details object that will update everytime "save" is clicked
  const [personalInfo, setPersonalInfo] = useState(
    examplePersonalInfo.personalInfo
  );

  //brings in personalInfo object from PersonalInfo.jsx and updates state variable
  const handlePersonalInfoSave = (personalInfo) => {
    setPersonalInfo(personalInfo);
    console.log(personalInfo);
  };

  return (
    <div className="app">
      <DisplayForms>
        <PersonalInfo
          onClickCancel={() => console.log("cancel")}
          onClickSave={(personalInfo) => handlePersonalInfoSave(personalInfo)} // pass function to grab personal data from user
        ></PersonalInfo>
        <EducationInfo></EducationInfo>
        <ExperienceInfo></ExperienceInfo>
      </DisplayForms>
      <Resume {...personalInfo}></Resume>
    </div>
  );
}

export default App;
