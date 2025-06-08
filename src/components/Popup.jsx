import React from 'react';
import './Popup.css';

const Popup = ({ message, type, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className={`popup-content ${type}`} onClick={e => e.stopPropagation()}>
        <p className="popup-message">{message}</p>
        <button className="popup-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup; 