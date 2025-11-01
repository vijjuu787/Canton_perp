import React from "react";
import BuySelUpperPart from "../UI/BuySelUpperPart";
import { BuySellScrolling } from "../UI/BuySellScrolling";

const BuySell: React.FC = () => {
  return (
    <main className="buy-sell">
      <BuySelUpperPart />
      <BuySellScrolling />
    </main>
  );
};

export default BuySell;
