// PositionsContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { useTrade } from "./TradeContext"; // 👈 import your existing TradeContext

type Position = {
  id: number;
  pair: string;
  side: string;
  size: number;
  entry: string;
  current: string;
  liq: string;
  margin: string;
  pnlUsd: string;
  pnlPercent: string;
};

type PositionsContextType = {
  positions: Position[];
  handleClose: (id: number) => void;
  addPosition: (pos: Position) => void;
};

const PositionsContext = createContext<PositionsContextType | undefined>(
  undefined
);

export function PositionsProvider({ children }: { children: React.ReactNode }) {
  const [positions, setPositions] = useState<Position[]>([]);
  const { tradeData } = useTrade(); // 👈 use trade data from context

  // ✅ Add new position automatically when tradeData changes
  useEffect(() => {
    if (tradeData.price || tradeData.amount) {
      const newPosition: Position = {
        id: positions.length + 1,
        pair: "CC-USDC",
        side: "Long",
        size: parseFloat(tradeData.amount),
        entry: `$${tradeData.price}`,
        current: `$${tradeData.price}`,
        liq: "$35.00",
        margin: `$${(parseFloat(tradeData.amount) * 4).toFixed(2)}`,
        pnlUsd: "+$0.00",
        pnlPercent: "+0.00%",
      };

      setPositions((prev) => [...prev, newPosition]);
      console.log("✅ New Position Added:", newPosition);
    }
  }, [tradeData]); // 👈 Runs whenever tradeData changes

  const handleClose = (id: number) => {
    setPositions((prev) => prev.filter((pos) => pos.id !== id));
  };

  const addPosition = (pos: Position) => {
    setPositions((prev) => [...prev, pos]);
  };

  return (
    <PositionsContext.Provider value={{ positions, handleClose, addPosition }}>
      {children}
    </PositionsContext.Provider>
  );
}

// ✅ Custom Hook
export function usePositions() {
  const context = useContext(PositionsContext);
  if (!context) {
    throw new Error("usePositions must be used within a PositionsProvider");
  }
  return context;
}
