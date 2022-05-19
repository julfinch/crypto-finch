import React from 'react'
import './ContactStyles.css'
import contactBg from "../../assets/contact-bg.png";

const Contact = () => {
  return (
    <div className='contact'  style={{backgroundImage: `url("${contactBg}")`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}}>
      <div className='container'>
        <div className='form-container'>
          <form>
            <h1><span>Contact</span> Us</h1>
            <div>
                <label>Name</label>
                <input type="text" placeholder='Enter your name' />
            </div>
            <div>
                <label>Email</label>
                <input type="email" placeholder='Enter your email' />
            </div>
            <div>
                <label>Message</label>
                <textarea rows='10' placeholder='Message Us!' />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact