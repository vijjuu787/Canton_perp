import { useState } from "react";

export const OpenPositionsTable = () => {
  // Positions state
  const [positions, setPositions] = useState([
    {
      id: 1,
      pair: "CC-USDC",
      side: "Long",
      size: 150.0,
      entry: "$40.23",
      current: "$42.34",
      liq: "$35.20",
      margin: "$603.45",
      pnlUsd: "+$316.50",
      pnlPercent: "+52.44%",
    },
    {
      id: 2,
      pair: "SBC-USDC",
      side: "Short",
      size: 500.0,
      entry: "$8.79",
      current: "$8.45",
      liq: "$10.55",
      margin: "$439.50",
      pnlUsd: "+$170.00",
      pnlPercent: "+38.68%",
    },
    {
      id: 3,
      pair: "SBC-USDC",
      side: "Short",
      size: 500.0,
      entry: "$8.79",
      current: "$8.45",
      liq: "$10.55",
      margin: "$439.50",
      pnlUsd: "+$170.00",
      pnlPercent: "+38.68%",
    },
  ]);

  // Handle closing a position
  const handleClose = (id: any) => {
    setPositions((prev) => prev.filter((pos) => pos.id !== id));
  };

  if (positions.length === 0) {
    return <div className="placeholder">No open positions</div>;
  }

  return (
    <table className="positions-table">
      <thead>
        <tr>
          <th>Pair</th>
          <th>Side</th>
          <th>Size</th>
          <th>Entry Price</th>
          <th>Current Price</th>
          <th>Liq. Price</th>
          <th>Margin</th>
          <th>P&amp;L (USDC)</th>
          <th>P&amp;L (%)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {positions.map((pos) => (
          <tr key={pos.id}>
            <td>{pos.pair}</td>
            <td>
              <span
                className={`side-badge ${
                  pos.side === "Long" ? "long" : "short"
                }`}
              >
                {pos.side}
              </span>
            </td>
            <td>{pos.size}</td>
            <td>{pos.entry}</td>
            <td>{pos.current}</td>
            <td>{pos.liq}</td>
            <td>{pos.margin}</td>
            <td className="pnl-usd">{pos.pnlUsd}</td>
            <td className="pnl-percent">{pos.pnlPercent}</td>
            <td>
              <button className="close-btn" onClick={() => handleClose(pos.id)}>
                Close
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
