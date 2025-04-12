const Contact = () => {
  return (
    <div style={{ backgroundColor: 'rgb(191,0,0)', color: 'white', padding: '20px', textAlign: 'center' }}>
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
    </div>
  )
}

export default Contact
