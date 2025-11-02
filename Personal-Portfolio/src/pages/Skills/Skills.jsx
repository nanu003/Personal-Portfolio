import React from 'react'
import PortfolioLayout from '../../components/PortfolioLayout'

function Skills() {
  return (
    <>
    <PortfolioLayout />
    <div>
         <div className='max-w-6xl mx-auto px-6 py-12'>
          
          <div className='text-center mb-20'>
            <div className='inline-block border-2 border-gray-400 rounded-2xl px-12 py-4 bg-gray-800/60 backdrop-blur-lg shadow-2xl'>
              <h1 className='text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent tracking-wide'>
                TECHNICAL SKILLS
              </h1>
            </div>
            <p className='text-xl text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed'>
              Proficient in modern technologies and frameworks
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto'>

            <div className='group'>
              <div className='bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl p-10 border border-gray-600/50 shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 hover:border-pink-400/50 hover:transform hover:scale-[1.02]'>
                <div className='flex items-center mb-8'>
                  <div className='w-3 h-3 bg-pink-400 rounded-full mr-4'></div>
                  <h2 className='text-3xl font-bold text-pink-400 tracking-wide'>Programming Languages</h2>
                </div>
                <div className='grid grid-cols-1 gap-6'>
                  <div className='flex items-center p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300'>
                    <img src={import.meta.env.BASE_URL + 'java.png'} alt='Java' className='w-10 h-10 mr-4 rounded-lg' />
                    <div>
                      <span className='text-xl font-semibold text-gray-200'>Java</span>
                      <p className='text-sm text-gray-400'>Object-oriented programming, Data Structures</p>
                    </div>
                  </div>
                  <div className='flex items-center p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300'>
                    <img src={import.meta.env.BASE_URL + 'python.png'} alt='Python' className='w-10 h-10 mr-4 rounded-lg' />
                    <div>
                      <span className='text-xl font-semibold text-gray-200'>Python</span>
                      <p className='text-sm text-gray-400'>Automation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='group'>
              <div className='bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl p-10 border border-gray-600/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:border-purple-400/50 hover:transform hover:scale-[1.02]'>
                <div className='flex items-center mb-8'>
                  <div className='w-3 h-3 bg-purple-400 rounded-full mr-4'></div>
                  <h2 className='text-3xl font-bold text-purple-400 tracking-wide'>Web Development</h2>
                </div>
                <div className='grid grid-cols-1 gap-4'>
                  <div className='flex items-center p-3 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300'>
                    <img src={import.meta.env.BASE_URL + 'react.png'} alt='React.js' className='w-8 h-8 mr-3 rounded-lg' />
                    <span className='text-lg font-medium text-gray-200'>React.js</span>
                  </div>
                  <div className='flex items-center p-3 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300'>
                    <img src={import.meta.env.BASE_URL + 'html.png'} alt='HTML5' className='w-8 h-8 mr-3 rounded-lg' />
                    <span className='text-lg font-medium text-gray-200'>HTML5</span>
                  </div>
                  <div className='flex items-center p-3 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300'>
                    <img src={import.meta.env.BASE_URL + 'css.png'} alt='CSS3' className='w-8 h-8 mr-3 rounded-lg' />
                    <span className='text-lg font-medium text-gray-200'>CSS3</span>
                  </div>
                  <div className='flex items-center p-3 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300'>
                    <img src={import.meta.env.BASE_URL + 'tail.png'} alt='Tailwind CSS' className='w-8 h-8 mr-3 rounded-lg' />
                    <span className='text-lg font-medium text-gray-200'>Tailwind CSS</span>
                  </div>
                  <div className='flex items-center p-3 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300'>
                    <img src={import.meta.env.BASE_URL + 'js.png'} alt='JavaScript' className='w-8 h-8 mr-3 rounded-lg' />
                    <span className='text-lg font-medium text-gray-200'>JavaScript</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='group'>
              <div className='bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl p-10 border border-gray-600/50 shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:border-green-400/50 hover:transform hover:scale-[1.02]'>
                <div className='flex items-center mb-8'>
                  <div className='w-3 h-3 bg-green-400 rounded-full mr-4'></div>
                  <h2 className='text-3xl font-bold text-green-400 tracking-wide'>Tools & Development</h2>
                </div>
                <div className='grid grid-cols-1 gap-6'>
                  <div className='flex items-center p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300'>
                    <img src={import.meta.env.BASE_URL + 'git.png'} alt='Git' className='w-10 h-10 mr-4 rounded-lg' />
                    <div>
                      <span className='text-xl font-semibold text-gray-200'>Git & GitHub</span>
                      <p className='text-sm text-gray-400'>Version control, collaboration</p>
                    </div>
                  </div>
                  <div className='flex items-center p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300'>
                    <img src={import.meta.env.BASE_URL + 'vscode.png'} alt='VS Code' className='w-10 h-10 mr-4 rounded-lg' />
                    <div>
                      <span className='text-xl font-semibold text-gray-200'>VS Code</span>
                      <p className='text-sm text-gray-400'>Integrated development environment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='group'>
              <div className='bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl p-10 border border-gray-600/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:border-blue-400/50 hover:transform hover:scale-[1.02]'>
                <div className='flex items-center mb-8'>
                  <div className='w-3 h-3 bg-blue-400 rounded-full mr-4'></div>
                  <h2 className='text-3xl font-bold text-blue-400 tracking-wide'>Core Concepts</h2>
                </div>
                <div className='grid grid-cols-1 gap-6'>
                  <div className='p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300'>
                    <span className='text-xl font-semibold text-gray-200 block mb-2'>Object-Oriented Programming</span>
                    <p className='text-sm text-gray-400'>Encapsulation, Inheritance, Polymorphism, Abstraction</p>
                  </div>
                  <div className='p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300'>
                    <span className='text-xl font-semibold text-gray-200 block mb-2'>Data Structures & Algorithms</span>
                    <p className='text-sm text-gray-400'>Problem solving, optimization, complexity analysis</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='mt-16 text-center'>
            <div className='bg-gradient-to-r from-gray-800/60 to-gray-700/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-600/30 max-w-4xl mx-auto'>
              <h3 className='text-2xl font-bold text-gray-200 mb-6'>Additional Technologies</h3>
              <div className='flex flex-wrap justify-center gap-4'>
                <span className='px-4 py-2 bg-gray-700/50 rounded-full text-gray-300 text-sm font-medium'>MongoDB</span>
                <span className='px-4 py-2 bg-gray-700/50 rounded-full text-gray-300 text-sm font-medium'>REST APIs</span>
                <span className='px-4 py-2 bg-gray-700/50 rounded-full text-gray-300 text-sm font-medium'>Responsive Design</span>
              </div>
            </div>
          </div>
         </div>
    </div>
    </>
  )
}

export default Skills
