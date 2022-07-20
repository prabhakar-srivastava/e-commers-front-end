import React ,{useRef} from 'react'
import './contact.css'
// import Emailjs from 'emailjs'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault()
      emailjs.sendForm('service_74tj0xn', 'template_6fdj0ch', form.current, 'yb6W_qr4MKMScmXZX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })

      e.target.reset()
    }

  return (
    <div className='container-contact' >
        <form 
        ref={form} 
        onSubmit={sendEmail} 
        className='form'>
          <h1>Contact</h1>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='submit'>Send Message</button>

        </form>

    </div>
  )
}

export default Contact