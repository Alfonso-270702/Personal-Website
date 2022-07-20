import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./index.scss";
import SchoolIcon from "@material-ui/icons/School";

export default function Education() {
  return (
    <div className="container-md">
      <section className="education-wrapper">
        <div className="title-text position">Education</div>

        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: "#38b6ff", color: "#ffffff" }}
            contentArrowStyle={{ borderRight: "7px solid  #38b6ff" }}
            date="2021 - Present"
            iconStyle={{ background: "#3498db", color: "#ffffff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Information Systems
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              State Polytechnic of Batam
            </h4>
            <p>Cyber Security Engineering major. Employee class</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: "#38b6ff", color: "#ffffff" }}
            contentArrowStyle={{ borderRight: "7px solid  #38b6ff" }}
            date="Apr 2020 - Aug 2020"
            iconStyle={{ background: "#3498db", color: "#ffffff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Fullstack Javascript Immersive
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Hacktiv 8</h4>
            <p>
              Learned technical skill related to Javascript framework backend
              and frontend
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </div>
  );
}
