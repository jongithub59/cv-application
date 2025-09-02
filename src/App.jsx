import { useState } from "react";
import PersonalInfo from "./components/personalInfo/PersonalInfo";
import EducationInfo from "./components/education/EducationInfo";
import ExperienceInfo from "./components/experience/ExperienceInfo";
import Resume from "./components/Resume";
import "./styles/App.css";
import DisplayForms from "./components/DisplayForms";

function App() {
  return (
    <div className="app">
      <DisplayForms>
        <PersonalInfo></PersonalInfo>
        <EducationInfo></EducationInfo>
        <ExperienceInfo></ExperienceInfo>
      </DisplayForms>
      <Resume></Resume>
    </div>
  );
}

export default App;
