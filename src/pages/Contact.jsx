import photo22 from '../assets/images/photo (22).jpeg'
import "./Contact.css"

const Contact = () => {
  return (
    <div className="mothercontainer">
      <h1 className="page-title" style={{color:'gold'}}>Contact Us</h1>
      
      <div className="contactcontain">
        <div className="contactphoto">
          <img src={photo22} alt="Temple Contact" />
        </div>
        <div className="contacttext">
          <h2 style={{color: 'gold', marginBottom: '1.5rem'}}>Send a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="Enter your phone number" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Type</label>
              <select id="service" name="service">
                <option value="">Select a service</option>
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
                name="date" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Enter your message or specific requirements" 
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
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
          <p>Email: akhandbharat@gmail.com</p>
          <p>Address: QRHQ+3JG, Upper Chinore, Jammu, Jammu and Kashmir, 180013</p>
        </div>

        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" style={{ width: '30px', height: '30px' }} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
