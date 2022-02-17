import React from "react";
import TrackVisibility from "react-on-screen";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Hung",
  avatarImage: "/images/myAvatar.png",
  content:
    "Hi. I am Hung Truong, a new Computer Science graduate from Sacramento, CA. I have experience working with Agile methodologies and enjoy learning new things, especially new tech. As a developer, I love making things and seeing it come to life."
};

const progressData = [
  {
    id: 1,
    title: "Java",
    percantage: 80,
    progressColor: "#00ffff",
  },
  {
    id: 2,
    title: "HTML5/CSS3/VanillaJS",
    percantage: 70,
    progressColor: "#ff4c60",
  },
  {
    id: 3,
    title: "PHP",
    percantage: 65,
    progressColor: "#FFD15C",
  },
  {
    id: 4,
    title: "Laravel",
    percantage: 70,
    progressColor: "#00ffff",
  },
  {
    id: 5,
    title: "React",
    percantage: 60,
    progressColor: "#ff4c60",
  },
  {
    id: 6,
    title: "Agile Development",
    percantage: 80,
    progressColor: "#FFD15C",
  },

];



function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={"myAvatar.png"} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="https://docs.google.com/file/d/1TTz3ZTYLMX2go8wc-j0LmtBHScdwYzSE/view" target="_blank" className="btn btn-default">
                      Resume
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        
      </div>
    </section>
  );
}

export default About;
