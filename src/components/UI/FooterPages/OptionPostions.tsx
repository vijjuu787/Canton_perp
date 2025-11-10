import { useEffect, useRef, useState } from "react";
import { useTrade } from "../../../Context/TradeContext";
import { PositionRow } from "./logs";

export const OpenPositionsTable = () => {
  const { tradeData, tradeSide } = useTrade();
  const { tradeExcuted, setTradeExecuted } = useTrade();
  const { activeTab } = useTrade();

  const effectRan = useRef(false);

  const [positions, setPositions] = useState<any[]>([
    {
      id: 1,
      pair: "CC-USDC",
      side: "Long",
      size: 150.0,
      entry: "$40.23",
      current: "$42.34",
      liq: "$35.20",
      margin: "$603",
      pnlUsd: "+$50.23",
      pnlPercent: "+8.3%",
    },
    {
      id: 2,
      pair: "CC-USDC",
      side: "Long",
      size: 150.0,
      entry: "$40.23",
      current: "$42.34",
      liq: "$35.20",
      margin: "$603",
      pnlUsd: "+$50.23",
      pnlPercent: "+8.3%",
    },
  ]);

  useEffect(() => {
    if (effectRan.current) {
      effectRan.current = false;
      return;
    }
    effectRan.current = true;
    if (tradeData?.amount && activeTab == "Market") {
      const newPosition = {
        id: positions.length + 1,
        pair: "CC-USDC",
        side: tradeSide === "Buy" ? "Long" : "Short",
        size: Number(tradeData.amount || 0),
        entry: "100",
        current: "100",
        liq: "$35.00",
        margin: `$${(Number(tradeData.amount) * 4).toFixed(2)}`,
        pnlUsd: "+$0.00",
        pnlPercent: "+0.00%",
      };

      setPositions((prev) => [...prev, newPosition]);
      console.log("New Position Added:", newPosition);
      <PositionRow
        key={newPosition.id}
        pos={newPosition}
        onClose={handleClose}
      />;
      setTradeExecuted && setTradeExecuted(false);
    }
  }, [tradeExcuted]);

  const handleClose = (id: number) => {
    const updated = positions.filter((pos) => pos.id !== id);
    setPositions(updated);
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
          <PositionRow key={pos.id} pos={pos} onClose={handleClose} />
        ))}
      </tbody>
    </table>
  );
};
