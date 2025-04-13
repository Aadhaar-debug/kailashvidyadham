import photo22 from '../assets/images/photo (22).jpeg'
import "./Contact.css"

const Contact = () => {
  return (
    <div className="mothercontainer" style={{marginBottom : '-3vh' ,backgroundColor: 'rgb(191,0,0)', color: 'white', padding: '20px', textAlign: 'center'}}>
      <h1 style={{color:'gold' , marginTop:'5vh' , marginBottom:'5vh'}}>Contact Us</h1>
      <p>Phone: +91-9419362813</p>
      <p>Email - akhandbharat@gmail.com</p>
      <p>Address: QRHQ+3JG , Upper Chinore , Jammu, Jammu and Kashmir , 180013</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '5vh', marginTop: '10px' , marginBottom:'5vh'}}> 
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
      <div className="contactcontain">
        <div className="contactphoto">
          <img src={photo22} alt="Contact" />
        </div>
        <div className="contacttext">
          <h2 style={{marginTop:'8vh',}} >Send a Message</h2>
          <form>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" style={{borderRadius:'25px' , width: '90%', padding: '8px' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px' }}>Phone Number:</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" style={{ borderRadius:'25px' ,width: '90%', padding: '8px' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
              <textarea id="message" name="message" placeholder="Enter your message" rows="4" style={{ borderRadius:'25px' ,width: '90%', padding: '8px' }}></textarea>
            </div>
            <button type="submit" style={{ borderRadius:'10px' ,backgroundColor: 'gold', color: 'black', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
