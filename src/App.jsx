import { useState } from "react";
import PersonalInfo from "./components/personalInfo/PersonalInfo";
import EducationInfo from "./components/education/EducationInfo";
import ExperienceInfo from "./components/experience/ExperienceInfo";
import Resume from "./components/Resume";
import "./styles/App.css";
import DisplayForms from "./components/DisplayForms";

function App() {
  // example data for rwsume htat will be updated from user input using hooks
  const resumeData = {
    personalInfo: {
      name: "Joe Hawthorne",
      email: "joeh@gmail.com",
      phone: "(913)-784-4959",
      address: "Lexington, Kentucky",
    },
    educationInfo: {
      institution: "Kentucky State University",
      degree: "Bachelors in Business",
      startDate: "08/2018",
      endDate: "05/2022",
      location: "Frankfort, Kentucky",
    },
    experienceInfo: {
      company: "Kentucky Co.",
      position: "Senior Supervisor",
      startDate: "10/2022",
      endDate: "present",
      location: "Lexington, Kentucky",
      desc: "Oversee daily operations, managing and developing a team of employees, communicating performance feedback and company objectives, ensuring compliance with policies and procedures, and serving as a liaison between staff and upper management to achieve organizational goals.",
    },
  };

  // hook for personal details object that will update everytime "save" is clicked
  const [personalInfo, setPersonalInfo] = useState(resumeData.personalInfo);

  // hook now uses an array to store the forms that may be used later
  const [educationInfo, setEducationInfo] = useState([
    resumeData.educationInfo,
  ]);

  const [experienceInfo, setExperienceInfo] = useState([
    resumeData.experienceInfo,
  ]);

  //brings in personalInfo object from PersonalInfo.jsx and updates state variable
  const handlePersonalInfoSave = (personalInfo) => {
    setPersonalInfo(personalInfo);
  };

  // find the form that needs to be updated using index, then create new array with that form updated
  const handleEducationInfoSave = (index, updatedEducation) => {
    setEducationInfo((prev) =>
      prev.map((edu, i) => (i === index ? updatedEducation : edu))
    );
  };

  const handleExperienceInfoSave = (index, updatedExperience) => {
    setExperienceInfo((prev) =>
      prev.map((exp, i) => (i === index ? updatedExperience : exp))
    );
  };

  // update hooks to be empty after delete is clicked which will also updat the resume content
  const handlePersonalInfoDelete = () => {
    setPersonalInfo("");
  };

  // search through current array and find the array to be deleted by the index, then make new array without it
  const handleEducationInfoDelete = (index) => {
    // prevent deleting if one form exists
    if (educationInfo.length == 1) {
      return;
    }
    setEducationInfo((prev) => prev.filter((_, i) => i !== index));
  };

  const handleExperienceInfoDelete = (index) => {
    if (experienceInfo.length == 1) {
      return;
    }
    setExperienceInfo((prev) => prev.filter((_, i) => i !== index));
  };

  // create a new EducationInfo by taking the current one and setting its props to be empty
  function addNewEducationForm() {
    setEducationInfo((prev) => [
      ...prev,
      { institution: "", degree: "", startDate: "", endDate: "", location: "" },
    ]);
  }

  function addNewExperienceForm() {
    setExperienceInfo((prev) => [
      ...prev,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        desc: "",
      },
    ]);
  }

  return (
    <div className="app">
      <DisplayForms>
        <PersonalInfo
          onClickSave={(personalInfo) => handlePersonalInfoSave(personalInfo)} // pass function to grab personal data from user
          onClickDelete={handlePersonalInfoDelete} // run when delete is clicked in PersonalInfo,jsx
          personalInfo={personalInfo} // pass example info to display in input element as placeholder
        ></PersonalInfo>
        {/* now uses the array of forms to render education form content */}
        {educationInfo.map((edu, index) => (
          <EducationInfo
            key={index}
            onClickSave={(educationInfo) =>
              handleEducationInfoSave(index, educationInfo)
            }
            onClickDelete={() => handleEducationInfoDelete(index)}
            educationInfo={edu}
            addNewForm={addNewEducationForm}
          ></EducationInfo>
        ))}
        {experienceInfo.map((exp, index) => (
          <ExperienceInfo
            key={index}
            onClickSave={(experienceInfo) =>
              handleExperienceInfoSave(index, experienceInfo)
            }
            onClickDelete={() => handleExperienceInfoDelete(index)}
            experienceInfo={exp}
            addNewForm={addNewExperienceForm}
          ></ExperienceInfo>
        ))}
      </DisplayForms>
      <Resume // pass the three hooks to be grouped in Resume.jsx as named props
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
      ></Resume>
    </div>
  );
}

export default App;
