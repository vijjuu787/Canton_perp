import React from "react";
import { X } from "lucide-react";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectModel: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  // ✅ Use React.MouseEvent (not imported)
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
          <button className="connect-option">📧 Log in with Email</button>

          <div className="or-divider">
            <span>OR</span>
          </div>

          <button className="connect-option">💼 Default Wallet</button>
          <button className="connect-option">🌐 WalletConnect</button>
          <button className="connect-option">⬛ OKX Wallet</button>
          <button className="connect-option">🔵 Coinbase Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default ConnectModel;
