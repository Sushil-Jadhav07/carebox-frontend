import React from "react";
import { Link } from "react-router-dom";

const clients = [
  "HasExpress",
  "XpoExpress",
  "FedExpress",
  "DaaExpress",
  "TheExpress",
  "UpsExpress",
];

const ClientAreaAbout = () => {
  return (
    <section>
      <div className="cs-client-brand-wrapper style-full-1raw">
        <div className="cs-client-container">
          <div className="container-fluid">
            <div className="row">
              {clients.map((client, index) => (
                <div key={index} className="col-lg-2 col-md-4 col-sm-4">
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
    </section>
  );
};

export default ClientAreaAbout;
