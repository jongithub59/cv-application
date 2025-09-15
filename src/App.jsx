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
      phone: "913-784-4959",
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
      company: "Kentuck Co.",
      position: "Senior Supervisor",
      startDate: "10/2022",
      endDate: "present",
      location: "Lexington, Kentucky",
      desc: "Oversee daily operations, managing and developing a team of employees, communicating performance feedback and company objectives, ensuring compliance with policies and procedures, and serving as a liaison between staff and upper management to achieve organizational goals.",
    },
  };

  // hook for personal details object that will update everytime "save" is clicked
  const [personalInfo, setPersonalInfo] = useState(resumeData.personalInfo);

  const [educationInfo, setEducationInfo] = useState(resumeData.educationInfo);

  const [experienceInfo, setExperienceInfo] = useState(
    resumeData.experienceInfo
  );

  //brings in personalInfo object from PersonalInfo.jsx and updates state variable
  const handlePersonalInfoSave = (personalInfo) => {
    setPersonalInfo(personalInfo);
    console.log(personalInfo);
  };

  const handleEducationInfoSave = (educationInfo) => {
    setEducationInfo(educationInfo);
    console.log(educationInfo);
  };

  const handleExperienceInfoSave = (experienceInfo) => {
    setExperienceInfo(experienceInfo);
    console.log(experienceInfo);
  };

  return (
    <div className="app">
      <DisplayForms>
        <PersonalInfo
          onClickCancel={() => console.log("cancel")}
          onClickSave={(personalInfo) => handlePersonalInfoSave(personalInfo)} // pass function to grab personal data from user
        ></PersonalInfo>
        <EducationInfo
          onClickSave={(educationInfo) =>
            handleEducationInfoSave(educationInfo)
          }
        ></EducationInfo>
        <ExperienceInfo
          onClickSave={(experienceInfo) =>
            handleExperienceInfoSave(experienceInfo)
          }
        ></ExperienceInfo>
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
