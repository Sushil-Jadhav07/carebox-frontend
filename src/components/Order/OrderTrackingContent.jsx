import React from "react";
import OrderTrackingStep from "./OrderTrackingStep";
import ProductDetails from "./ProductDetails";

const orderTrackingData = [
  {
    id: 1,
    status: "Order Confirmed",
    date: "01 Oct 2024",
  },
  {
    id: 2,
    status: "Shipment Prepared",
    date: "01 Oct 2024",
  },
  {
    id: 3,
    status: "Delivery In Progress",
    date: "01 Oct 2024",
  },
  {
    id: 4,
    status: "Order Delivered",
    date: "01 Oct 2024",
  },
];

const OrderTrackingContent = () => {
  return (
    <section>
      <div className="cs-section-height"></div>
      <div className="cs-order-track-wrap">
        <div className="container">
          <div className="row">
            <ProductDetails />
            <div className="col-lg-8">
              <div className="cs-logi-order-trackign-content">
                <div className="cs-logi-order-track">
                  {orderTrackingData.map((step, index) => (
                    <OrderTrackingStep
                      key={step.id}
                      status={step.status}
                      date={step.date}
                      isLast={index === orderTrackingData.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs-section-height"></div>
    </section>
  );
};

export default OrderTrackingContent;
