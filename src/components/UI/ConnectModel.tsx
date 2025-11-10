import React from "react";
import { X } from "lucide-react";
import Logo from "../../assets/Logo.png";
import Zoro from "../../assets/Zoro Logo.png";
import ZoroLogo from "../../assets/Zoro Logo 1.png";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectModel: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={handleContentClick}>
        <div className="modal-header">
          <h3>Connect</h3>
          <X className="close-icon" onClick={onClose} />
        </div>

        <div className="connect-options">
          <button className="connect-option">
            <img src={Logo} alt="cypherock" className="vijay" />
          </button>

          <button className="connect-option">
            <img src={ZoroLogo} alt="Zorologo" className="vijay2" />
            <img src={Zoro} alt="cypherock" className="vijay3" />
          </button>
          {/* <button className="connect-option"> WalletConnect</button>
          <button className="connect-option">⬛ OKX Wallet</button>
          <button className="connect-option">🔵 Coinbase Wallet</button> */}
        </div>
      </div>
    </div>
  );
};

export default ConnectModel;
