import React from 'react'

function Info() {
  return (
    <div className='text-white p-4 flex flex-col lg:flex-row lg:justify-between lg:items-center'>
        <div className='flex-1 order-2 lg:order-1'>
            <div className='text-center lg:text-left'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mt-30 lg:ml-50 lg:flex'>Hi, I'm</h1>
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold mb-0 lg:mt-8 lg:ml-50 lg:leading-loose'>Nikhil Kalkhuria</h1>
                <p className='text-base lg:text-lg mb-2 lg:ml-50 lg:leading-none text-[#b0adad]'>Frontend Developer</p>
            </div>
            <div className='flex justify-center lg:justify-start space-x-4 lg:space-x-6 lg:ml-50 mt-8 lg:mt-16'>
              <button onClick={() => window.open('https://github.com/nanu003')}>
                 <img className='h-10 lg:h-12' src='/public/git.png' />
              </button>
              <button onClick={() => window.open('https://www.linkedin.com/in/nikhil-kalkhuria-960381253/')}>
                 <img className='h-10 lg:h-12' src='/public/linkdin.png' />
              </button>
            </div>
        </div>
        
       <div className='flex-1 order-1 lg:order-2 mb-6 lg:h-50 lg:mb-30'>
         <div className='flex justify-center items-center lg:pr-10'>
            <img className='h-64 md:h-80 lg:h-146.5 object-cover lg:mr-30' src='/public/mee.png' alt='Profile'/>
        </div>
       </div>
    </div>
  )
}

export default Info