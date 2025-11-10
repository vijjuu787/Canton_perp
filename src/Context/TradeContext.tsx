import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

type TradeData = {
  price: string;
  amount: string;
  leverage: string;
  takeProfit?: string;
  stopLoss?: string;
};

type TradeContextType = {
  tradeData: TradeData;
  setTradeData: React.Dispatch<React.SetStateAction<TradeData>>;
  tradeSide: "Buy" | "Sell" | null;
  setTradeSide: React.Dispatch<React.SetStateAction<"Buy" | "Sell" | null>>;
  tradeExcuted?: boolean;
  setTradeExecuted?: React.Dispatch<React.SetStateAction<boolean>>;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

// ✅ Context setup
const TradeContext = createContext<TradeContextType | undefined>(undefined);

export function TradeProvider({ children }: { children: ReactNode }) {
  // ✅ Plain state only (no localStorage)
  const [tradeData, setTradeData] = useState<TradeData>({
    price: "",
    amount: "",
    leverage: "",
    takeProfit: "",
    stopLoss: "",
  });

  const [tradeSide, setTradeSide] = useState<"Buy" | "Sell" | null>(null);
  const [tradeExcuted, setTradeExecuted] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("Limit");

  return (
    <TradeContext.Provider
      value={{
        tradeData,
        setTradeData,
        tradeSide,
        setTradeSide,
        tradeExcuted,
        setTradeExecuted,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </TradeContext.Provider>
  );
}

// ✅ custom hook (recommended way to use context)
export function useTrade() {
  const context = useContext(TradeContext);
  if (!context) {
    throw new Error("useTrade must be used within a TradeProvider");
  }
  return context;
}
