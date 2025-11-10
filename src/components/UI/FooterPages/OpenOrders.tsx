import { useEffect, useRef, useState } from "react";
import { useTrade } from "../../../Context/TradeContext";
import { OpenHistory } from "./OrderHistory";

export const OpenOrders = () => {
  const { tradeData, tradeSide, tradeExcuted, setTradeExecuted } = useTrade(); // ✅ combined into single destructure
  const effectRan = useRef(false);
  const { activeTab } = useTrade();

  const [orders, setOrders] = useState<any[]>([
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

  useEffect(() => {
    if (!effectRan.current) {
      effectRan.current = true;
      return;
    }
    effectRan.current = false;

    if ((tradeData.price || tradeData.amount) && activeTab == "Limit") {
      const newOrder = {
        id: orders.length + 1,
        pair: "CC-USDC",
        type: "Limit",
        side: tradeSide === "Buy" ? "Long" : "Short",
        price: `${tradeData.price}`,
        amount: Number(tradeData.amount || 0),
        filled: "0%",
        time: new Date().toLocaleTimeString(),
      };

      setOrders((prev) => [...prev, newOrder]);
      console.log(" New Order Added:", newOrder);

      setTimeout(() => {
        <OpenHistory />;
        setOrders((prev) => prev.filter((o) => o.id !== newOrder.id));
        console.log("Order Deleted:", newOrder.id);
      }, 4000);

      // Reset execution flag
      setTradeExecuted && setTradeExecuted(false);
    }
  }, [tradeExcuted]);

  // ✅ Handle Close Button
  const handleClose = (id: number) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
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
