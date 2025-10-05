import React, { useState } from 'react'
import PortfolioLayout from "../../components/PortfolioLayout"

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault() 
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
    <PortfolioLayout />

    <div>
      <div className='max-w-6xl mx-auto px-6 py-6'>

        <div className='text-center mb-10'>
          <div className='inline-block border-2 border-gray-400 rounded-2xl px-12 py-4 bg-gray-800/60 backdrop-blur-lg shadow-2xl'>
            <h1 className='text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent tracking-wide'>
              CONTACT ME
            </h1>
          </div>
          <p className='text-xl text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed'>
            Let's connect! I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>

          <div className='bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-600/50 shadow-2xl'>
            <h2 className='text-3xl font-bold text-pink-400 mb-6'>Send me a message</h2>
            
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-2'>
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300'
                  placeholder='Enter your full name'
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-2'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300'
                  placeholder='your.email@example.com'
                />
              </div>

              <div>
                <label htmlFor='subject' className='block text-sm font-medium text-gray-300 mb-2'>
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300'
                  placeholder='What would you like to discuss?'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 resize-none'
                  placeholder='Tell me about your project, idea, or just say hello!'
                />
              </div>

              <button
                type='submit'
                className='w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-800 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-pink-500/25'
              >
                Send Message
              </button>
            </form>
          </div>

          <div className='space-y-8'>

            <div className='bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-600/50 shadow-2xl'>
              <h2 className='text-3xl font-bold text-purple-400 mb-6'>Get in touch</h2>
              
              <div className='space-y-6'>
                <div className='flex items-center'>
                  <div className='w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mr-4'>
                    <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-200'>Email</h3>
                    <p className='text-gray-400'>nikhilkalkhudia@gmail.com</p>
                  </div>
                </div>

                <div className='flex items-center'>
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center mr-4'>
                    <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-200'>Location</h3>
                    <p className='text-gray-400'>Delhi, India</p>
                  </div>
                </div>

                <div className='flex items-center'>
                  <div className='w-12 h-12 bg-gradient-to-r from-green-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4'>
                    <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-200'>Response Time</h3>
                    <p className='text-gray-400'>Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-600/50 shadow-2xl'>
              <h2 className='text-3xl font-bold text-blue-400 mb-6'>Connect with me</h2>
              
              <div className='grid grid-cols-2 gap-4'>
                <a
                  href='https://github.com/nanu003'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700/70 transition-all duration-300 hover:scale-105 group'
                >
                  <svg className='w-6 h-6 text-gray-300 group-hover:text-white mr-3' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                  </svg>
                  <span className='text-gray-300 group-hover:text-white font-medium'>GitHub</span>
                </a>

                <a
                  href='https://www.linkedin.com/in/nikhil-kalkhuria-960381253/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700/70 transition-all duration-300 hover:scale-105 group'
                >
                  <svg className='w-6 h-6 text-gray-300 group-hover:text-white mr-3' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                  </svg>
                  <span className='text-gray-300 group-hover:text-white font-medium'>LinkedIn</span>
                </a>

                <a
                  href='https://x.com/NIKHILKALKHURI1'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700/70 transition-all duration-300 hover:scale-105 group'
                >
                  <svg className='w-6 h-6 text-gray-300 group-hover:text-white mr-3' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'/>
                  </svg>
                  <span className='text-gray-300 group-hover:text-white font-medium'>Twitter</span>
                </a>

                <a
                  href='mailto:nikhilkalkhudia@gmail.com'
                  className='flex items-center justify-center p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700/70 transition-all duration-300 hover:scale-105 group'
                >
                  <svg className='w-6 h-6 text-gray-300 group-hover:text-white mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                  <span className='text-gray-300 group-hover:text-white font-medium'>Email</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Contact