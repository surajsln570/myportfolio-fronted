import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { serviceLogin } from '../services/services';

export default function Login() {
  const [form, setForm] = useState({
      email: '',
      password: ''
    });
  
    let [usersData, setUsersData] = useState([]);
  
    const handleChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      let newFormValue = {...form}
      newFormValue[name] = value;
      setForm(newFormValue);
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = await serviceLogin(form)
      if(data.success){
        alert('Loggedin successfully');
        window.location.reload();
      }else {
        alert(data.message);
      }
    }

  return (
    <div className=''>
      <Navigation />
      <div className='m-0 p-0 flex flex-col my-auto   justify-center gap-4 w-full h-[93vh] '>
        <form 
        className='max-w-md mx-auto rounded-lg w-full m-10 md:w-[50vw] bg-white p-8 shadow-[0_0_10px_purple]'
        action={'/login'} method='POST'
        onSubmit={handleSubmit}
        >
          <h1 className='text-4xl text-center'>Login Page</h1> 
            <div className='mb-4'> 
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>Username</label>
                <input 
                className='shadow-[0_0_2px] appearance-none rounded w-full bg-gray-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                type='text' 
                id='username' 
                placeholder='Enter your username' 
                name='email'
                onChange={handleChange}
                value={form.email}
                />      
            </div>
            <div className='mb-4'>
                <label 
                className='block text-gray-700 text-sm font-bold mb-2 mt-4' 
                htmlFor='password'>Password</label>
                <input 
                className='shadow-[0_0_2px] appearance-none rounded bg-gray-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                type='password' 
                id='password' 
                placeholder='Enter your password'
                name='password'
                onChange={handleChange}
                value={form.password}
                /> 
            </div>
            <div className='mb-4'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Login</button>
            </div>
            <p className='text-center text-gray-500 text-xs'>Don't have an account? <Link to='/signup' className='text-blue-500 hover:text-blue-800'>Sign up</Link></p>
            <p className='text-center text-gray-500 text-xs mt-2'>Forgot your password? <Link to='/reset-password' className='text-blue-500 hover:text-blue-800'>Reset it</Link></p>
        </form> 
      </div>
    </div>
  )
}
