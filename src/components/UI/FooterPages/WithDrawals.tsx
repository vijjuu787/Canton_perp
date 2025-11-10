import { useState } from "react";

export const Withdrawal = () => {
  const [orders] = useState([
    {
      id: 1,
      pair: "CC-USDC",
      side: "Long",
      price: "$40.23",
      amount: 150.0,
      status: "Filled",
      time: "2024-10-28 09:12:34",
    },
    {
      id: 2,
      pair: "CBTC-USDC",
      side: "Short",
      price: "$68,000.00",
      amount: 0.3,
      status: "Filled",
      time: "2024-10-28 08:45:21",
    },
    {
      id: 3,
      pair: "SBC-USDC",
      side: "Long",
      price: "$8.12",
      amount: 200,
      status: "Cancelled",
      time: "2024-10-27 16:23:11",
    },
  ]);
  if (orders.length === 0) {
    return <div className="placeholder">No Diposite data</div>;
  }
  return (
    <table className="positions-table">
      <thead>
        <tr>
          <th>Coin</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Time</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.pair}</td>
            <td>{order.price}</td>
            <td>{order.amount}</td>
            <td>
              <span
                className={`side-badge ${
                  order.side === "Long" ? "long" : "short"
                }`}
              >
                {order.status}
              </span>
            </td>
            <td>{order.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
