import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Bachelor’s Degree",
    years: "2016 - 2021",
    content:
      "Obtained a B.S. in Computer Science at California State University, Sacramento.",
  },
  
];

const experienceData = [
  {
    id: 1,
    title: "VxWorks Engineer (Wind River Fall Internship)",
    years: "Oct. 2021 - Dec 2021",
    content:
      "Developed, maintained, and enhanced Docker image build and test pipelines.",
  },
  {
    id: 2,
    title: "Full Stack Developer (Contract)",
    years: "Sept. 2020 - May 2021",
    content:
      "Implemented internal web application for Delta Hand Pies using LAMP stack with Laravel framework. Designed features to reduce time and effort for the staff by 50%",
  },
  {
    id: 3,
    title: "Head Server",
    years: "2011 - 2016",
    content:
      "Managed customer experience in the food service industry. Initiated and delegated end-to-end operations of the dining room.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
