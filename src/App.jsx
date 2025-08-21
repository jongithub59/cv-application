import { useState } from "react";
import PersonalInfo from "./components/personalInfo/PersonalInfo";
import EducationInfo from "./components/education/EducationInfo";
import ExperienceInfo from "./components/experience/ExperienceInfo";
import "./styles/App.css";

function App() {
  return (
    <>
      <PersonalInfo></PersonalInfo>
      <EducationInfo></EducationInfo>
      <ExperienceInfo></ExperienceInfo>
    </>
  );
}

export default App;
