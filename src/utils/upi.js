export function buildUpiLink(upiId, amount, payeeName = 'SWAMI DIVYANAND', note = 'Payment') {
  // amount expected as number (rupees). Build UPI deep-link with &am param formatted as decimal (two places).
  const pa = encodeURIComponent(upiId);
  const pn = encodeURIComponent(payeeName);
  const tn = encodeURIComponent(note);
  let amParam = '';
  if (typeof amount !== 'undefined' && amount !== null && amount !== '') {
    const num = Number(amount) || 0;
    // format with two decimal places (UPI apps accept decimal rupees)
    const formatted = num.toFixed(2);
    amParam = `&am=${encodeURIComponent(formatted)}`;
  }
  return `upi://pay?pa=${pa}&pn=${pn}&tn=${tn}${amParam}&cu=INR`;
}
