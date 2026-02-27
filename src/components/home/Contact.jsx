import React, { useState } from 'react'
import Col from '../Col'
import Row from '../Row'
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub, FaPhoneVolume } from "react-icons/fa6";
import Input from '../UI/Input';
import Button from '../UI/Button';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919453622570?text=${text}`, "_blank");

    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <Col id='contact'
      className='items-center py-16 px-6 
                 bg-gradient-to-b from-background1 via-white to-background2'>

      <h1 className="text-4xl font-bold mb-14 text-center 
                     bg-gradient-to-r from-primary to-purple-500 
                     bg-clip-text text-transparent">
        Get In Touch
      </h1>

      <Row className='w-full max-w-6xl flex-col md:flex-row gap-12'>

        {/* Contact Info Card */}
        <Col className='w-full md:w-1/2 
                        bg-white/40 backdrop-blur-lg 
                        p-8 rounded-2xl shadow-xl 
                        border border-white/20'>

          <h3 className='text-2xl font-bold mb-6'>Contact Information</h3>

          <div className='space-y-5'>

            <a href="mailto:surajsln570@gmail.com" target="_blank">
              <Row className='items-center gap-4 hover:text-primary transition cursor-pointer'>
                <div className='bg-primary/10 p-3 rounded-full text-primary text-xl'>
                  <MdEmail />
                </div>
                <span className='font-medium'>surajsln570@gmail.com</span>
              </Row>
            </a>

            <a href="https://www.linkedin.com/in/suraj-singh-44baa937a/" target="_blank">
              <Row className='items-center gap-4 hover:text-primary transition cursor-pointer'>
                <div className='bg-primary/10 p-3 rounded-full text-primary text-xl'>
                  <IoLogoLinkedin />
                </div>
                <span className='font-medium'>LinkedIn Profile</span>
              </Row>
            </a>

            <a href="https://github.com/surajsln570" target="_blank">
              <Row className='items-center gap-4 hover:text-primary transition cursor-pointer'>
                <div className='bg-primary/10 p-3 rounded-full text-primary text-xl'>
                  <FaGithub />
                </div>
                <span className='font-medium'>GitHub Profile</span>
              </Row>
            </a>

            <a href="tel:+919453622570">
              <Row className='items-center gap-4 hover:text-primary transition cursor-pointer'>
                <div className='bg-primary/10 p-3 rounded-full text-primary text-xl'>
                  <FaPhoneVolume />
                </div>
                <span className='font-medium'>+91 94536 22570</span>
              </Row>
            </a>

          </div>
        </Col>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}
          className='w-full md:w-1/2 
                     bg-white/40 backdrop-blur-lg 
                     p-8 rounded-2xl shadow-xl 
                     border border-white/20'>

          <Col className='w-full space-y-5'>

            <Input
              name='name'
              label='Name'
              type='text'
              value={formData.name}
              onChange={handleChange}
            />

            <Input
              name='email'
              label='Email'
              type='email'
              value={formData.email}
              onChange={handleChange}
            />

            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">
                Message
              </label>
              <textarea
                name='message'
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className='bg-white/70 border border-gray-300 
                           px-4 py-3 rounded-xl 
                           focus:outline-none focus:ring-2 
                           focus:ring-primary transition'
              />
            </div>

            <Button
              type='submit'
              variant='primary'
              className='py-3 rounded-xl shadow-lg hover:scale-105 transition'>
              Send Message
            </Button>

          </Col>

        </form>

      </Row>
    </Col>
  )
}