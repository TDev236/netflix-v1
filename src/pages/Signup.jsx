import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import {Link, useNavigate} from 'react-router-dom'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signUp} = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password)
      navigate('/')
    } catch(e){
      console.log(e)
    }
  }
  return (
    <div className='w-full h-screen'>
      <img 
        className='hidden sm:block absolute w-full h-full object-cover'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ebff1e0f-5704-423f-b4c6-94914dabe25b/fee3f628-0ad2-4580-bbb8-3c0abfb69cd7/CO-es-20220509-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[320px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign up</h1>
              <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                <input className='p-3 my-2 bg-gray-700' onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" />
                <input className='p-3 my-2 bg-gray-700' onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                <div>
                  <p><input className='mr-2' type="checkbox"/>Remember Me</p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'><span>Already subscribed a Netflix?</span>{' '}
                  <Link to="/login">
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Signup