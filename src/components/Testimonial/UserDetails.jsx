import React from "react";

const UserDetails = ({ user, onClick }) => {
  return (
    <div
      className="cs-user-single home1-testi-sc"
      onClick={onClick}
      role="button"
      tabIndex={0}
      style={{ cursor: "pointer" }}
    >
      <div className="cs-user-img">
        <img src={user.image} alt={user.name} />
      </div>
      <div className="cs-user-info">
        <h6>
          <span>—</span> {user.name}
        </h6>
        <p>{user.role}</p>
      </div>
    </div>
  );
};

export default UserDetails;
