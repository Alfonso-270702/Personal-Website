import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function PortfolioCard({ data }) {
  let portfolioData = data;

  return (
    <div className="container-md">
      <section className="portfolio-wrapper">
        <div className="justify-content">
          <h1>Portfolio</h1>
        </div>

        <div className="container">
          <div className="row">
            {portfolioData.map((item, index) => (
              <div className="col-sm-6" key={index}>
                <div className="card">
                  <div className="card-body">
                    <div className="slide-container">
                      <Slide
                        easing="ease"
                        autoplay={false}
                        arrows={item.image.length > 1 && true}
                      >
                        {item.image.map((img, index) => (
                          <img key={index} src={img} alt={item.name} />
                        ))}
                      </Slide>
                    </div>
                    <div className="warapper-desc">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <span className="card-text">Role: {item?.role}</span>
                      <p className="card-text">Tech Stack: {item?.stack}</p>
                      <div>
                        <Link
                          to={{ pathname: item.demo }}
                          target="_blank"
                          rel="noopener"
                          className="demo-link"
                        >
                          {item.demo ===
                          "https://nestacademy.id/events/detail/studyjam-quality-assurance-engineer?eventId=7"
                            ? "https://nestacademy.id/"
                            : item.demo}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="justify-content see-more">
            <button className="btn btn-outline">
              <div className="d-flex align-items-center position">
                <Link
                   to={{
                    pathname: "https://github.com/Alfonso-270702",
                  }}
                  target="_blank"
                  rel="noopener"
                  className="link-more"
                >
                  See More
                </Link>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
