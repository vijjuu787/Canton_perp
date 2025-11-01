import { useState } from "react";

export const Withdrawal = () => {
  const [orders, setOrders] = useState([]);
  if (orders.length === 0) {
    return <div className="placeholder">No Withdrawal data</div>;
  }
  return <div> Withdrawal Page</div>;
};
