import React from 'react';

const QRSidePanel = ({ show, onClose, qrSrc }) => {
  if (!show) return null;

  const src = qrSrc || '/qr.png';

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100vh',
      width: '320px',
      maxWidth: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.2)',
      padding: '1.5rem',
      zIndex: 2000,
      overflowY: 'auto'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <h2 style={{ margin: 0, color: '#bf0000' }}>Scan to Pay</h2>
          <p style={{ margin: '0.4rem 0 0', color: '#333', fontSize: '0.95rem' }}>Open your UPI app and scan this QR code.</p>
        </div>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.4rem',
            cursor: 'pointer',
            color: '#666'
          }}
        >
          ×
        </button>
      </div>

      <div style={{ textAlign: 'center' }}>
        <img
          src={src}
          alt="Payment QR Code"
          style={{ width: '100%', maxWidth: '280px', height: 'auto', borderRadius: '16px', border: '1px solid rgba(0, 0, 0, 0.08)' }}
        />
      </div>
    </div>
  );
};

export default QRSidePanel;
