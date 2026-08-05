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
        <div className="popup-header">
          <h2>Pay securely via UPI</h2>
          <p className="popup-subtitle">Scan the QR code or tap the button to open your UPI app and complete payment.</p>
        </div>
        <div className="popup-body">
          {qrSrc && (
            <div className="popup-qr">
              <img src={qrSrc} alt="Payment QR code" />
            </div>
          )}
          <div className="popup-info">
            {message && <p className="popup-message">{message}</p>}
            <div className="popup-details">
              <div className="popup-detail-item">
                <span>UPI ID</span>
                <strong>{displayUpi}</strong>
              </div>
              {upiAmount && (
                <div className="popup-detail-item">
                  <span>Amount</span>
                  <strong>₹{Number(upiAmount).toFixed(2)}</strong>
                </div>
              )}
            </div>
            <div className="popup-actions">
              <a className="popup-upi-btn" href={upiHref} onClick={openUpiApp}>Pay via UPI</a>
            </div>
            <p className="popup-note">Do not refresh the page while completing payment. Use the QR code or UPI button above.</p>
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