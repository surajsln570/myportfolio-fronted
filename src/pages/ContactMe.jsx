import React from 'react'
import Navigation from '../components/Navigation'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactMe() {
  return (
    <div className='m-0 p-0 relative'>
        <Navigation />
        <div className='flex flex-col md:flex-row justify-between md:mt-[7%] mt-[15%] p-3'>
          <div className='text-center md:text-left'>
              <h1 className='text-3xl font-bold'>Contact Me</h1>
              <p className='text-lg'> Feel free to reach out via email or social media</p>
          </div>
          <div className='p-3 flex flex-col items-center'>
            <a className='text-xl z-10 flex items-center gap-2 hover:scale-110' href="https://wa.me/919453622570">
              {/* WhatsApp SVG Logo */}
              <FontAwesomeIcon icon={['fab', 'whatsapp']} size="2x" className="text-green-500" />
            </a>
            <p>Contact on whatsapp</p>
            {/* Call option */}
            <a
              className='text-xl hover:scale-110 z-10 flex items-center gap-2 mt-2'
              href="tel:+919453622570"
              rel="noopener noreferrer"
              target="_self"
            >
              Call me: +91 9453622570
            </a>
          </div>
        </div>
    </div>
  )
}
