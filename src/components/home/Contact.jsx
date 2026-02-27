import React, { useState } from 'react'
import Col from '../Col'
import Row from '../Row'
import { Link } from 'react-router-dom'
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
    const handleChange = async (e) => {
        const { name, value } = e.target;
        let newForm = { ...formData }
        newForm[name] = value;
        setFormData(newForm);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
            setFormData({
        name: '',
        email: '',
        message: ''
    })
            window.open(`https://wa.me/919453622570?text=${text}`);
        } catch (error) {
            console.log('error in handleSubmit', error)
        }
    }

    return (
        <Col id='contact' className='items-center mt-10 bg-gradient-to-b from-background1 to-background2'>
            <h1 className="text-3xl font-bold mb-10">Get In Touch</h1>
            <Row className='w-full flex-col md:flex-row'>
                <Col className={'w-full'}>
                    <h3 className='text-2xl font-bold'>Contact Information</h3>
                    <Link to={'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMSckKMwsDSRRZKBKpTpKtjgHjNBdDNxlbPDSVftGvdPGLVlzLWHcXfGgHXMQljVTQxWMhV'}>
                        <Row>
                            <MdEmail />
                            <span>surajsln570@gmail.com</span>
                        </Row>
                    </Link>
                    <Link to={'https://www.linkedin.com/in/suraj-singh-44baa937a/'}>
                        <Row>
                            <IoLogoLinkedin />
                            <span>Linkedin Profile</span>
                        </Row>
                    </Link>
                    <Link to={'https://github.com/surajsln570'}>
                        <Row>
                            <FaGithub />
                            <span>Github Profile</span>
                        </Row>
                    </Link>
                    <Link to={'tel:+919453622570'}>
                    <Row>
                        <FaPhoneVolume />
                        <span>+919453622570</span>
                    </Row>
                    </Link>
                </Col>
                <form onSubmit={handleSubmit} className='w-full'>
                    <Col className={'w-full'}>
                        <Input name='name' label='Name' type='text' value={formData.name} onChange={handleChange} />
                        <Input name='email' label='Email' type='email' value={formData.email} onChange={handleChange} />
                        <div className="flex flex-col mb-4">
                            <label className="mb-1 font-medium text-gray-700">
                                Message
                            </label>
                            <textarea className='bg-white border border-gray-300 bg-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' name='message' value={formData.message} onChange={handleChange} />
                        </div>
                        <Button type='submit' variant='primary'>Send Message</Button>
                    </Col>
                </form>
            </Row>
        </Col >
    )
}
