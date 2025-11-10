import { useState } from "react";

export default function StopInpercentage() {
  const [value, setValue] = useState(0);

  return (
    <div className="leverage-container">
      <div className="leverage-header">
        <span className="label">Stop Amount</span>
        <span className="value">{value}%</span>
      </div>

      <div className="slider-wrapper">
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="leverage-slider"
          style={{
            background: `linear-gradient(to right, #070711 ${value}%, #d1d1d1 ${value}%)`,
          }}
        />
      </div>
      <div className="slider-labels">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  );
}
