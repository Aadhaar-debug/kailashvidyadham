import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import photo22 from '../assets/images/photo (22).jpeg'
import Popup from '../components/Popup';
import "./Contact.css"

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_88qgzcb";    // Service ID
const EMAILJS_TEMPLATE_ID = "template_zutdekc";   // Template ID
const EMAILJS_PUBLIC_KEY = "pEg0lOxyUihV_deAI";  // Public Key

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState({ show: false, message: '', type: '' });
  const [selectedService, setSelectedService] = useState('');

  const closePopup = () => {
    setPopup({ show: false, message: '', type: '' });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (!selectedService) {
      setPopup({
        show: true,
        type: 'error',
        message: 'Please select a service type'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      const templateParams = {
        to_email: 'kailashvidyadham@gmail.com',
        from_name: form.current.user_name.value,
        user_email: form.current.user_email.value,
        user_phone: form.current.user_phone.value,
        service_type: selectedService,
        preferred_date: form.current.preferred_date.value || 'Not specified',
        message: form.current.message.value
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (result.status === 200) {
        setPopup({
          show: true,
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.'
        });
        form.current.reset();
        setSelectedService('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setPopup({
        show: true,
        type: 'error',
        message: 'Failed to send message. Please try again later or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mothercontainer">
      <h1 className="page-title" style={{color:'gold'}}>Contact Us</h1>
      
      <div className="contactcontain">
        <div className="contactphoto">
          <img src={photo22} alt="Temple Contact" />
        </div>
        <div className="contacttext">
          <h2 style={{color: 'gold', marginBottom: '1.5rem'}}>Send a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="user_name" 
                placeholder="Enter your name"
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="user_phone" 
                placeholder="Enter your phone number"
                required 
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="user_email" 
                placeholder="Enter your email"
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Type</label>
              <select 
                id="service" 
                name="service_type" 
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
              >
                <option value="" disabled>Select a service</option>
                <option value="puja">Puja Services</option>
                <option value="consultation">Priest Consultation</option>
                <option value="event">Event Booking</option>
                <option value="education">Vedic Education</option>
                <option value="donation">Donations & Seva</option>
                <option value="other">Other Enquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">Preferred Date (if applicable)</label>
              <input 
                type="date" 
                id="date" 
                name="preferred_date" 
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Enter your message or specific requirements" 
                rows="4"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>

      <div className="contactothertext">
        <div className="temple-timings">
          <h3 style={{color: 'gold'}}>Temple Timings</h3>
          <p>Morning Aarti: 5:30 AM - 7:00 AM</p>
          <p>Temple Hours: 6:00 AM - 9:00 PM</p>
          <p>Evening Aarti: 6:30 PM - 7:30 PM</p>
        </div>
        
        <div className="contact-info">
          <h3 style={{color: 'gold', marginBottom: '1rem'}}>Contact Information</h3>
          <p>Phone: +91-9419362813</p>
          <p>Email: kailashvidyadham@gmail.com</p>
          <p>Address: QRHQ+3JG, Upper Chinore, Jammu, Jammu and Kashmir, 180013</p>
        </div>

        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" style={{ width: '30px', height: '30px' }} />
          </a>
        </div>
      </div>

      {popup.show && (
        <Popup
          message={popup.message}
          type={popup.type}
          onClose={closePopup}
        />
      )}
    </div>
  )
}

export default Contact
