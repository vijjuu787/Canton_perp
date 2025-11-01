import { useState } from "react";

export const OpenOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      pair: "CC-USDC",
      type: "Limit",
      side: "Long",
      price: "$42.50",
      amount: "50.0",
      filled: "0%",
      time: "10:34:22",
    },
    {
      id: 2,
      pair: "CBTC-USDC",
      type: "Limit",
      side: "Short",
      price: "$67,500.00",
      amount: "0.5",
      filled: "0%",
      time: "10:31:15",
    },
  ]);

  // Handle cancel button
  const handleClose = (id: any) => {
    setOrders((prev) => prev.filter((pos) => pos.id !== id));
  };

  if (orders.length === 0) {
    return <div className="placeholder">No open orders</div>;
  }

  return (
    <table className="positions-table">
      <thead>
        <tr>
          <th>Pair</th>
          <th>Type</th>
          <th>Side</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Filled</th>
          <th>Time</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.pair}</td>
            <td>{order.type}</td>
            <td>
              <span
                className={`side-badge ${
                  order.side === "Long" ? "long" : "short"
                }`}
              >
                {order.side}
              </span>
            </td>
            <td>{order.price}</td>
            <td>{order.amount}</td>
            <td>{order.filled}</td>
            <td>{order.time}</td>
            <td>
              <button
                className="close-btn"
                onClick={() => handleClose(order.id)}
              >
                Close
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
