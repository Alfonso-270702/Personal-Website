import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Footer() {
  return (
    <div className="container-md">
      <section className="h-100 w-100 bg-white">
        <div className="footer-wrapper">
          <div className="border-color info-footer">
            <div>
              <hr className="hr" />
            </div>
            <div
              className="
                mx-auto
                d-flex
                flex-column flex-lg-row
                align-items-center
                footer-info-space
                gap-4
                justify-content-center
              "
            >
              <div className="d-flex title-font font-medium align-items-center gap-4 mt-2">
                <p className="text-footer">
                  Created by{" "}
                  <Link to="/" className="link-secondary">
                    Alfonso Hasea Sirait
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
