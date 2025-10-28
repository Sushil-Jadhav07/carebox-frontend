import React from "react";
import { Link } from "react-router-dom";

const clients = [
  "HasExpress",
  "XpoExpress",
  "FedExpress",
  "DaaExpress",
  "TheExpress",
  "UpsExpress",
  "HubExpress",
  "ForestExpress",
];

const ClientArea = () => {
  return (
    <section>
      <div className="cs-section-height"></div>
      <div className="cs-client-brand-wrapper">
        <div className="cs-client-container">
          <div className="container">
            <div className="row">
              {clients.map((client, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="cs-client-card">
                    <h6>
                      <Link to="#">{client}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cs-section-height"></div>
    </section>
  );
};

export default ClientArea;
