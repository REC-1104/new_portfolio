import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Map from './Map'

const Contact = () => {

  const ref = useRef()
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
     e.preventDefault();
     emailjs.sendForm('service_a3xqgoh', 'template_3z0r9lu', ref.current, '_jbjecxvNXQZi7SAC')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });
  }

  return (
    <>
    <div id='contact' className='text-white'>
      <div id="containerC">
        <div id="left">
        <h2 id='flipX' className='w-full text-4xl font-bold m-7 text-[#00df9a]'>Contact.</h2>
        <form ref={ref} onSubmit={handleSubmit}>
        <label for="username">Username: </label>             
    <input type="text" name="name" required placeholder='Enter your name ...' />
    <br />

    <label for="email"> Email: </label>
    <input type="email" name="email" required placeholder='Enter your email ...' />
    <br />
    
    <label for="comments"> Comments: </label>
    <textarea for="comments" rows="4" cols="40" name='message' placeholder='Enter your message ...'></textarea>
    <br />
    
    <button type='submit' id='explore' className='bg-[#00df9a] w-[200px] rounded-md my-6 py-3 text-black mx-auto'>Send</button>
    {
      success && 
      "Your message has been successfully sent. We'll get back to you soon :)"
    }
    </form>
        </div>
        <div id="right">
          <Map />
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact