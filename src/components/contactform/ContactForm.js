import React from 'react'
import './ContactForm.css'
function ContactForm() {
  return (
    <div className='form-container'>
    <h1>Send a message to us!</h1>
    <form action="">
    <input placeholder='Name' />
    <input placeholder='Email' />
    <input placeholder='Subject' />
    <textarea placeholder='Message' rows="4" />
    <button>Send Message</button>
    </form>
    </div>
  )
}

export default ContactForm