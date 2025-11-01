import { useState } from "react";

export const Diposite = () => {
  const [orders, setOrders] = useState([]);
  if (orders.length === 0) {
    return <div className="placeholder">No Diposite data</div>;
  }
  return <div>Diposite Page</div>;
};
