import React from 'react';
import './Popup.css';

const Popup = ({ message, type, onClose, qrSrc, upiId, upiAmount, upiLink }) => {
  const displayUpi = upiId || '91495390088@ibl';

  // Allow an explicit upiLink to be provided per-page; otherwise build from props
  const buildHref = () => {
    if (upiLink) return upiLink;
    const amountParam = upiAmount ? `&am=${encodeURIComponent(upiAmount)}` : '';
    return `upi://pay?pa=${encodeURIComponent(displayUpi)}&pn=${encodeURIComponent('Kailash Vidya Dham')}&tn=${encodeURIComponent('Payment')}${amountParam}&cu=INR`;
  };

  const openUpiApp = (event) => {
    event.preventDefault();
    const upiHref = buildHref();
    window.location.href = upiHref;
  };

  const upiHref = buildHref();

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className={`popup-content ${type}`} onClick={e => e.stopPropagation()}>
        <div className="popup-body">
          {qrSrc && (
            <div className="popup-qr">
              <img src={qrSrc} alt="Payment QR" />
            </div>
          )}
          <div className="popup-info">
            {message && <p className="popup-message">{message}</p>}
            <p className="popup-upi">UPI ID: <strong>{displayUpi}</strong></p>
            <div className="popup-actions">
              <a className="popup-upi-btn" href={upiHref} onClick={openUpiApp}>Pay via UPI</a>
            </div>
          </div>
        </div>
        <button className="popup-close" onClick={onClose} aria-label="Close popup">
          ×
        </button>
      </div>
    </div>
  );
};

export default Popup;