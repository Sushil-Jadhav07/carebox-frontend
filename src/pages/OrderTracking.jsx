import React from "react";
import OrderTrackSearch from "@/components/Order/OrderTrackSearch";
// import OrderTrackingContent from "@/components/Order/OrderTrackingContent";
import BraidcrumbStyleTwo from "@/components/BreadCrumb/BraidcrumbStyleTwo";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

const OrderTracking = () => {
  return (
    <>
      <BreadCrumb title={"Order Tracking"} />
      <OrderTrackSearch />
      {/* <OrderTrackingContent /> */}
    </>
  );
};

export default OrderTracking;
