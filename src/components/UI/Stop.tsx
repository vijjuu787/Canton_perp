import Button from "../../theme/Button";
import BuySellButtons from "../../theme/BuySellButton";
import LeverageSlider from "../../theme/Slider";

export const Stop = () => {
  return (
    <div className="panel-content">
      <div className="order-type-container">Stop Price(USDC)</div>
      <Button />
      <div className="order-type-container"> limit price(CC)</div>
      <Button />
      <div className="order-type-container"> Amount(CC)</div>
      <Button />
      <LeverageSlider />
      <BuySellButtons />
    </div>
  );
};
