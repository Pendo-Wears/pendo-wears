import React, { Suspense } from "react";
import OrderConfirmation from "./OrderConfirmation";

const OrderConfimationPage = () => {
  return (
    <Suspense fallback={<div>Loading status...</div>}>
      <OrderConfirmation />
    </Suspense>
  );
};

export default OrderConfimationPage;
