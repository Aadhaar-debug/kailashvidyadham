import React from 'react';
import './Popup.css';

const Popup = ({ message, type, onClose, qrSrc, upiId, upiAmount, upiLink }) => {
  const displayUpi = upiId || '9149539088@ibl';

  const formatAmount = (amount) => {
    const num = Number(amount);
    return Number.isFinite(num) ? num.toFixed(2) : '';
  };

  const formattedAmount = formatAmount(upiAmount);

  const buildHref = () => {
    if (upiLink) return upiLink;
    const amountParam = formattedAmount ? `&am=${encodeURIComponent(formattedAmount)}` : '';
    return `upi://pay?pa=${encodeURIComponent(displayUpi)}&pn=${encodeURIComponent('SWAMI DIVYANAND')}&tn=${encodeURIComponent('Payment')}${amountParam}&cu=INR`;
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
        <button className="popup-close" onClick={onClose} aria-label="Close popup">
          &times;
        </button>
        <div className="popup-header">
          <h2>Pay securely via UPI</h2>
          <p className="popup-subtitle">Scan the QR code or tap to pay directly from your phone.</p>
        </div>
        <div className="popup-body">
          {qrSrc && (
            <div className="popup-qr">
              <img src={qrSrc} alt="Payment QR code" />
            </div>
          )}
          <div className="popup-info">
            {message && <p className="popup-message">{message}</p>}
            
            <div className="popup-actions popup-app-grid">
              <a
                className="popup-app-btn gpay"
                href={buildAppLink('gpay')}
                title="Open in GPay"
                aria-label="Open in GPay"
                onClick={(e) => openApp(e, buildAppLink('gpay'))}
              >
                <img src="/gpay.svg" alt="Google Pay" className="popup-app-logo-img" />
              </a>
              <a
                className="popup-app-btn phonepe"
                href={buildAppLink('phonepe')}
                title="Open in PhonePe"
                aria-label="Open in PhonePe"
                onClick={(e) => openApp(e, buildAppLink('phonepe'))}
              >
                <img src="/phonepe.svg" alt="PhonePe" className="popup-app-logo-img" />
              </a>
              <a
                className="popup-app-btn paytm"
                href={buildAppLink('paytm')}
                title="Open in Paytm"
                aria-label="Open in Paytm"
                onClick={(e) => openApp(e, buildAppLink('paytm'))}
              >
                <img src="/paytm.svg" alt="Paytm" className="popup-app-logo-img" />
              </a>
            </div>

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
            
            <p className="popup-note">Do not refresh the page while completing payment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;