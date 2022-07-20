import React from "react";
import { Alfonso, Github, Linkedin } from "../../images";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Hero({ title, desc }) {
  return (
    <div className="container-md hero-wrapper">
      <section className="mx-auto d-flex flex-lg-row flex-column hero">
        <div
          className="
            left-column
            d-flex
            flex-lg-grow-1 flex-column
            align-items-lg-start
            text-lg-start
            align-items-center
            text-center
          "
        >
          <h1 className="title-text-big">
            {title}
            <br className="d-lg-block d-none" />
          </h1>
          <h2 className="text-caption">{desc}</h2>
          <div>
            <div
              className="
                mx-auto
                d-flex
                flex-lg-row flex-column
                justify-content-center
              "
            >
              <div className="item-section row d-flex justify-content-start mb-4">
                <div className="w-auto">
                  <div className="h-100 text-start">
                    <Link
                      to={{
                        pathname:
                          "https://www.linkedin.com/in/alfonso-sirait-226b871b4/",
                      }}
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        className="icon-hero"
                        src={Linkedin}
                        alt="linkedin"
                      />
                    </Link>
                  </div>
                </div>
                <div className="w-auto">
                  <div className="h-100 text-start">
                    <Link
                      to={{ pathname: "https://github.com/Alfonso-270702" }}
                      target="_blank"
                      rel="noopener"
                    >
                      <img className="icon-hero" src={Github} alt="github" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column text-center d-flex justify-content-right pe-0">
          <img
            id="img-fluid"
            className="h-auto mw-100 profile-photo"
            src={Alfonso}
            alt="profile"
          />
        </div>
      </section>
    </div>
  );
}
