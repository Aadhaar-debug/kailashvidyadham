import React from 'react';
import './Popup.css';

const Popup = ({ message, type, onClose, qrSrc, upiId, upiAmount, upiLink }) => {
  const displayUpi = upiId || '91495390088@ibl';

  const formatAmount = (amount) => {
    const num = Number(amount);
    return Number.isFinite(num) ? num.toFixed(2) : '';
  };

  const formattedAmount = formatAmount(upiAmount);

  const buildHref = () => {
    if (upiLink) return upiLink;
    const amountParam = formattedAmount ? `&am=${encodeURIComponent(formattedAmount)}` : '';
    return `upi://pay?pa=${encodeURIComponent(displayUpi)}&pn=${encodeURIComponent('Kailash Vidya Dham')}&tn=${encodeURIComponent('Payment')}${amountParam}&cu=INR`;
  };

  const buildAppLink = (app) => {
    const amountParam = formattedAmount ? `&am=${encodeURIComponent(formattedAmount)}` : '';
    const pa = encodeURIComponent(displayUpi);
    const pn = encodeURIComponent('SWAMI DIVYANAND');
    const mc = '0000';
    const mode = '02';
    const purpose = '00';

    if (app === 'gpay') {
      return `gpay://upi/pay?pa=${pa}&pn=${pn}&mc=${mc}&mode=${mode}&purpose=${purpose}${amountParam}&cu=INR`;
    }
    if (app === 'phonepe') {
      return `phonepe://pay?pa=${pa}&pn=${pn}&mc=${mc}&mode=${mode}&purpose=${purpose}${amountParam}&cu=INR`;
    }
    if (app === 'paytm') {
      return `paytmmp://pay?pa=${pa}&pn=${pn}&mc=${mc}&mode=${mode}&purpose=${purpose}${amountParam}&cu=INR`;
    }
    return buildHref();
  };

  const openApp = (event, href) => {
    event.preventDefault();
    window.location.href = href;
  };

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
            <div className="popup-actions popup-app-grid">
              <a
                className="popup-app-btn gpay"
                href={buildAppLink('gpay')}
                onClick={(e) => openApp(e, buildAppLink('gpay'))}
              >
                GPay
              </a>
              <a
                className="popup-app-btn phonepe"
                href={buildAppLink('phonepe')}
                onClick={(e) => openApp(e, buildAppLink('phonepe'))}
              >
                PhonePe
              </a>
              <a
                className="popup-app-btn paytm"
                href={buildAppLink('paytm')}
                onClick={(e) => openApp(e, buildAppLink('paytm'))}
              >
                Paytm
              </a>
            </div>
            <p className="popup-note">Do not refresh the page while completing payment. Use the QR code or a payments app above.</p>
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