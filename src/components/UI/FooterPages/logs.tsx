import React from "react";

export interface Position {
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
}

interface PositionRowProps {
  pos: Position;
  onClose: (id: number) => void;
}

export const PositionRow: React.FC<PositionRowProps> = ({ pos, onClose }) => {
  return (
    <tr>
      <td>{pos.pair}</td>
      <td>
        <span
          className={`side-badge ${pos.side === "Long" ? "long" : "short"}`}
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
        <button className="close-btn" onClick={() => onClose(pos.id)}>
          Close
        </button>
      </td>
    </tr>
  );
};
