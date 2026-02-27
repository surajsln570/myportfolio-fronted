import React from 'react'
import Navigation from '../components/Navigation'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { serviceSignup } from '../services/services.jsx'

export default function Signup() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let newFormValue = { ...form }
    newFormValue[name] = value;
    setForm(newFormValue);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await serviceSignup(form);
      if (result.success) {
        alert(result.message)
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='m-0 p-0'>
      <Navigation />
      <div className='m-0 p-0 flex justify-center items-center md:mt-[40px] mt-[65px]'>
        <form
          onSubmit={handleSubmit}
          className='m-0 p-[4%] mx-auto rounded-lg w-[60vw] bg-white shadow-[0_0_10px_purple] '
          action={'/signup'} method='POST'
        >
          <h1 className='text-4xl text-center mb-4'>Register/Signup Here</h1>
          <div className='m-0 p-0 flex justify-between w-[96%] md:w-[50vw]'>
            <div className='m-0 p-0 mb-4 w-[50%]'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='firstName'>First Name</label>
              <input
                className='shadow-[0_0_2px] appearance-none rounded md:w-[24vw] w-[99%] bg-gray-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                id='firstName'
                name='firstName'
                placeholder='First Name'
                onChange={handleChange}
                value={form.firstName}
              />
            </div>
            <div className='m-0 p-0 mb-4 w-[50%] relative'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='lastName'>Last Name</label>
              <input
                className='shadow-[0_0_2px] appearance-none rounded md:w-[24vw] w-[99%] absolute right-0 bg-gray-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                id='lastName'
                name='lastName'
                placeholder='Last Name'
                onChange={handleChange}
                value={form.lastName}
              />
            </div>
          </div>
          <div className='m-0 p-0 w-[96%] mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='mobile'>Mobile Number</label>
            <input
              className='shadow-[0_0_2px] appearance-none rounded w-full md:w-[50vw] bg-gray-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='number'
              id='mobile'
              name='mobile'
              placeholder='Mobile Number'
              onChange={handleChange}
              value={form.mobile}
            />
          </div>
          <div className='m-0 p-0 w-[96%] mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
            <input
              className='shadow-[0_0_2px] appearance-none rounded w-full md:w-[50vw] bg-gray-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              onChange={handleChange}
              value={form.email}
            />
          </div>
          <div className='m-0 p-0 w-[96%] mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2 mt-4' htmlFor='password'>Password</label>
            <input
              className='shadow-[0_0_2px] appearance-none rounded bg-gray-200 w-full md:w-[50vw] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password'
              onChange={handleChange}
              value={form.password}
            />
          </div>
          <div className='m-0 p-0 w-[96%] mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2 mt-4' htmlFor='confirmPassword'>Confirm Password</label>
            <input
              className='shadow-[0_0_2px] appearance-none rounded bg-gray-200 w-full md:w-[50vw] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              placeholder='Confirm Password'
              onChange={handleChange}
              value={form.confirmPassword}
            />
          </div>
          <div className='m-0 p-0 mb-4'>
            <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer'
              type='submit' value={'Signup'} />
          </div>
          <p className='text-center text-gray-500 text-xs'>Already have an account? <Link to='/login' className='text-blue-500 hover:text-blue-800'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}
