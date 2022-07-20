import React from 'react';
import Mail from '@material-ui/icons/MailOutlineRounded';
import './index.scss';

export default function ContactCard({ title, email }) {
  return (
    <div className="container-md">
      <div className="contact-wrapper">
        <div className="tittle-page">
          <h1>{title}</h1>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="card">
              <div className="card-body-contact">
                <span className="contact-item">
                  <Mail /> {email}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
