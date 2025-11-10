import { useEffect, useRef, useState } from "react";
import { useTrade } from "../../../Context/TradeContext"; // ✅ make sure path is correct

export const OpenHistory = () => {
  const { tradeData, tradeSide, tradeExcuted, setTradeExecuted } = useTrade();
  const { activeTab } = useTrade();
  const effectRan = useRef(false);

  // ✅ Orders history data
  const [orders, setOrders] = useState([
    {
      id: 1,
      pair: "CC-USDC",
      type: "Market",
      side: "Long",
      price: "$40.23",
      amount: 150.0,
      status: "Filled",
      time: "2024-10-28 09:12:34",
    },
    {
      id: 2,
      pair: "CBTC-USDC",
      type: "Limit",
      side: "Short",
      price: "$68,000.00",
      amount: 0.3,
      status: "Filled",
      time: "2024-10-28 08:45:21",
    },
    {
      id: 3,
      pair: "SBC-USDC",
      type: "Market",
      side: "Long",
      price: "$8.12",
      amount: 200,
      status: "Cancelled",
      time: "2024-10-27 16:23:11",
    },
  ]);

  // ✅ Effect to add new history entry when trade executes
  useEffect(() => {
    if (effectRan.current) {
      effectRan.current = false;
      return;
    }
    effectRan.current = true;

    const newOrder = {
      id: orders.length + 1,
      pair: "CC-USDC",
      type: activeTab,
      side: tradeSide === "Buy" ? "Long" : "Short",
      price: activeTab === "Market" ? "$100" : `$${tradeData.price}`,
      amount: Number(tradeData.amount || 0),
      status: "Filled",
      time: new Date().toLocaleString(),
    };

    setOrders((prev) => [...prev, newOrder]);
    console.log("✅ New Order Added to History:", newOrder);
  }, []);

  // ✅ If no orders
  if (orders.length === 0) {
    return <div className="placeholder">No History data</div>;
  }

  // ✅ Render Table
  return (
    <table className="positions-table">
      <thead>
        <tr>
          <th>Pair</th>
          <th>Type</th>
          <th>Side</th>
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
            <td>
              <span
                className={`side-badge ${
                  order.status === "Filled"
                    ? "filled"
                    : order.status === "Cancelled"
                    ? "cancelled"
                    : "pending"
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
