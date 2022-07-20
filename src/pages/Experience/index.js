import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./index.scss";
import WorkIcon from "@material-ui/icons/Work";

export default function Experience() {
  return (
    <div className="container-md">
      <section className="experience-wrapper">
        <div className="title-text position">Work Experience</div>

        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: "#38b6ff", color: "#ffffff" }}
            contentArrowStyle={{ borderRight: "7px solid  #38b6ff" }}
            date="January 2021 - Present"
            iconStyle={{ background: "#1abc9c", color: "#ffffff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">at CROWDE</h4>
            <p>
              Created a Menu that is Easily Accessible and Useable for
              Collecting Funds by Developed Apps for Company Funding, Controlled
              Frontend Team for Super Lender apps, Toni CMS, and Marketing site,
              Revamped existing code from class component into functional
              component
            </p>
            <p>
              Building Superlender, AgSales, Toni CMS, and Marketing site Web
              App.
            </p>
            <p>
              Tech Stacks: React JS, Redux, JavaScript, HTML, CSS, SCSS, Next
              JS, React Bootstrap, Git, etc.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </div>
  );
}
