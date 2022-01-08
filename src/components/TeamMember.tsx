import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Image from "react-bootstrap/Image";

export default function TeamMember(props) {
  return (
    <div className="col-xl-3 col-sm-6 mb-5">
      <div className="bg-white rounded shadow-sm py-5 px-4">
        <Image
          src="https://bootstrapious.com/i/snippets/sn-team/teacher-2.jpg"
          alt=""
          width="400"
          className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
        />
        <h5 className="mb-0">{props.member.Name}</h5>
        <span className="small text-uppercase text-muted">{props.role}</span>
        <ul className="social mb-0 list-inline mt-3">
          <li className="list-inline-item">
            <a href="#" className="social-link">
              <i className="fa fa-facebook-f"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="social-link">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="social-link">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="social-link">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
