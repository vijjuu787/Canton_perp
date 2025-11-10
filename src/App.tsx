import { AppLayout } from "./components/layout/Applayout";
import "./App.css";
import { TradeProvider } from "./Context/TradeContext";
const App = () => {
  return (
    <>
      <TradeProvider>
        <AppLayout />
      </TradeProvider>
    </>
  );
};

export default App;
