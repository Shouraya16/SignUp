import React from 'react'
import person from '../assets/SignIn/person.png'
import Lock from '../assets/SignIn/lock.png'
import google from '../assets/SignIn/google-symbol.png'
import github from '../assets/SignIn/github-logo.png'

function SignUp() {
  return (
    <div>
        <div className='w-full h-screen flex flex-col items-center justify-center '>
          
          <div id='OuterBox' className="w-custom h-custom bg-[#022c3d] bg-opacity-50 p-5 rounded-lg shadow-lg flex items-center justify-center">
            <div id='formBox' className=' items-center justify-center flex font-poppins'>
              <form className='w-full'>
                <h1 className='text-2xl text-[#D6FFF6] mb-5 text-center'>Login</h1>

                <div id='Username' className='flex items-center border-b border-gray-200 py-2'>
                  <input type='text' placeholder='Username' required  className='appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none'/>
                  <img src={person} alt='Person' className="h-6 w-auto"/>
                </div>

                <div id='Password' className='flex items-center border-b border-gray-200 py-2 my-4'>
                  <input type="password" placeholder='Password' required className='appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none'/>
                  <img src={Lock} alt='lock' className="h-6 w-auto"/>
                </div>

                <div id='RemFor' className="flex items-center justify-between my-4">
                  <label className="text-white flex items-center">
                    <input type="checkbox" className="mr-2" />
                      Remember me
                  </label>
                  <a href="#" className='text-cyan-400 hover:text-cyan-600'>Forgot password?</a>
                </div>

                <button type='submit' className='w-full px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded'>Login</button>
                <p className="mt-4 text-center text-white">Don't have an account? <a href="#" className='text-cyan-400 hover:text-cyan-600'>Register here</a></p>
              </form>
            </div>
          </div>
          <div className='my-4'>
            <p>-------------------------------OR-------------------------------</p>
          </div>
          <div id="google" className='w-custom cursor-pointer bg-slate-100 hover:bg-neutral-200 h-8 items-center flex rounded-md px-3 justify-center my-1'>
            <img src={google} alt="" className='h-5' />
            <h1 className='text-black mx-4'>Login with Gmail</h1>
          </div>

          <div id="github" className='w-custom cursor-pointer bg-black hover:bg-gray-900 h-8 items-center flex rounded-md px-3 justify-center my-1'>
            <img src={github} alt="" className='h-5' />
            <h1 className='text-[#D6FFF6] mx-4'>Login with GitHub</h1>
          </div>
        </div>
    </div>
  )
}

export default SignUp