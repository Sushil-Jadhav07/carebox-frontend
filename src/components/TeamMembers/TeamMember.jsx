import React from "react";
import { Link } from "react-router-dom";

const TeamMember = ({ member }) => {
  return (
    <div className="cs-member-item">
      <div className="cs-member-img">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="cs-member-item-content">
        <div className="cs-member-info">
          <div className="cs-member-title">
            <h6>{member.name}</h6>
          </div>
          <div className="cs-member-designation">
            <p>{member.role}</p>
          </div>
        </div>
        <div className="cs-member-connect">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.731567 18.4727L18.4678 9.47266L0.731567 0.472656V18.4727Z"
              fill="#D40511"
            />
            <path
              opacity="0.4"
              d="M0.731567 9.47266H18.4678L0.731567 0.472656V9.47266Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="cs-social-contact">
        <ul>
          <li>
            <Link to="#">
              <i className="flaticon-facebook-app-symbol"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="flaticon-linkedin-big-logo"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="flaticon-twitter"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="flaticon-instagram"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamMember;
