import React from "react";
import WorkCard from "./WorkExpereince/WorkCard";

import "./WorkExperience.css";

import bodywork from "./images/bodywork.png";
import waggy from "./images/waggyapp.png";
import sidekick from "./images/strengthsidekick.png";

const WorkExpereince = () => {
  return (
    <div className="workexpmain" id="workexp">
      <div className="title">
        <h2>Work Experience</h2>
        <span className="line"></span>
      </div>
      <div className="container">
        <WorkCard
          title="Bodywork By Steph"
          image={bodywork}
          position="Front End Developer"
          date="June 2023 - August 2023"
          githubLink="https://github.com/bethjm/massage_website"
          description="In close collaboration with the client and the UX designer, a mobile-first approach was employed to align the website's visual design with the brand identity and effectively communicate the client's distinctive offerings. The development process utilized React.js and React Router, leveraging reusable components to enhance code maintainability and scalability. Additionally, two custom APIs were created to seamlessly integrate dynamic content into the website's framework."
          skills={[
            "React.js",
            "JavaScript",
            "React Router",
            "Custom API",
            "Mobile First",
            "Reusable Carousel",
            "Reusable Accordion",
            "CSS",
            "UX Design Collaboration",
          ]}
          webLink="https://bodyworkbystephanie.netlify.app/"
        />

        <WorkCard
          title="WaggyTail Animal Rescue"
          image={waggy}
          position="Freelance iOS and Android App Developer"
          date="Sept 2023 - Current"
          githubLink="https://github.com/bethjm/WaggyTailsApp"
          description="Utilized Agile Project Management to collaborate with designers and pet experts to educate potential adopters about cat and dog care with interactive quizzes, promoting responsible pet ownership
        In process of deploying the mobile app to app stores like Apple App Store and Google Play Store"
          skills={[
            "React Native",
            "Quiz Algorithm",
            "Andriod Studio",
            "xCode Studio",
            "Reusable Quiz Component",
            "StyleSheets",
            "JavaScript",
            "React Navigation",
            "React Hooks",
          ]}
          webLink={"https://waggyadoptquiz.netlify.app/"}
        />
        <WorkCard
          title="Strength SideKick"
          image={sidekick}
          position="Full Stack React Native Developer"
          date="November 2023- Current"
          githubLink="https://github.com/bethjm/exercise_app_frontend"
          description="A Javascript algorithm tailors workouts based on user-specific goals, experience levels, and available equipment. The algorithm separately creates a warm up and a workout and cross references one another to eliminate repeat exercise. Reps and sets are also determined by the algorithm based on the users goals."
          skills={[
            "React Native",
            "AsyncStorage",
            "Django",
            "RESTFul Routes",
            "PostgreSQL",
            "StyleSheets",
            "Gunicorn",
            "Custom JSON API",
            "React Native Web",
          ]}
          webLink={"https://strengthsidekick.netlify.app/"}
        />
      </div>
    </div>
  );
};

export default WorkExpereince;
