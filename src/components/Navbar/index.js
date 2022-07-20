import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../images";
import DownloadIcon from "@material-ui/icons/CloudDownloadOutlined";
import "./index.scss";

export default function Header() {
  return (
    <div className="container-md header-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to={"/"}>
          <img src={Logo} alt="Anur Al Hadyd" className="logo" />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#targetModal-item"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="modal-item modal fade"
          id="targetModal-item"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="targetModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content bg-white border-0">
              <div className="modal-header border-0">
                <a href="/" className="modal-title" id="targetModalLabel">
                  <img className="logo" src={Logo} alt="Anur Al Hadyd" />
                </a>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div data-bs-dismiss="modal" className="modal-body">
                <ul className="navbar-nav responsive me-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav-link active"
                      className="nav-link"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav-link active"
                      className="nav-link"
                      to="experience"
                    >
                      Experience
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav-link active"
                      className="nav-link"
                      to="education"
                    >
                      Education
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav-link active"
                      className="nav-link"
                      to="portfolio"
                    >
                      Portfolio
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="nav-link active"
                      className="nav-link"
                      to="contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={{
                        pathname:
                          "https://drive.google.com/file/d/1EyuJx6l3iYRKOffAcGyRsez8uCnIUgXl/view",
                      }}
                      className="nav-link"
                      target="_blank"
                      rel="noopener"
                    >
                      Resume
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink
                activeClassName="nav-link active"
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="nav-link active"
                className="nav-link"
                to="experience"
              >
                Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="nav-link active"
                className="nav-link"
                to="education"
              >
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="nav-link active"
                className="nav-link"
                to="portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="nav-link active"
                className="nav-link"
                to="contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="gap-3">
            <Link
              to={{
                pathname:
                  "https://drive.google.com/file/d/1EyuJx6l3iYRKOffAcGyRsez8uCnIUgXl/view",
              }}
              className="nav-link"
              target="_blank"
              rel="noopener"
            >
              <button className="btn btn-outline">
                <div className="d-flex align-items-center">
                  {" "}
                  <DownloadIcon className="download-icon" /> Resume
                </div>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
