import Button from "../../theme/Button";
import BuySellButtons from "../../theme/BuySellButton";
import LeverageSlider from "../../theme/Slider";

export const Market = () => {
  return (
    <div className="panel-content">
      <div className="order-type-container">Amount(CC)</div>
      <Button field="amount" />
      <LeverageSlider />
      <div className="order-type-container">Take profit(USDC)</div>
      <Button />
      <div className="order-type-container">Stop Loss(USDC)</div>
      <Button />
      <BuySellButtons />
    </div>
  );
};
