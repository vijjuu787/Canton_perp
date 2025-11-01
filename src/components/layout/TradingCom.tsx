import { TradingBar } from "../UI/TradingBar";
import { TradingChart } from "../UI/TradingChart";
export const TradingCom = () => {
  return (
    <main className="trading-com">
      <TradingBar />
      <TradingChart symbol="BTCUSDT" />
    </main>
  );
};
