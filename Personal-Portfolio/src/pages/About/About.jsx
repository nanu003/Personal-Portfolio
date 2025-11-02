
import PortfolioLayout from '../../components/PortfolioLayout'

function About() {
  return (
    <>
      <PortfolioLayout />
      <div className='text-white'>

        <div className='max-w-6xl mx-auto px-6 py-12'>
          
          <div className='text-center mb-16'>
            <div className='inline-block border-2 border-gray-400 rounded-xl px-8 py-3 bg-gray-800/50 backdrop-blur-sm'>
              <h1 className='text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent'>
                ABOUT ME
              </h1>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row justify-center items-center gap-12 mb-20'>
            <div className='flex-shrink-0'>
              <div className='rounded-full border-4 border-gray-400 p-3 bg-gradient-to-r from-pink-500 to-purple-600 shadow-2xl'>
                <img 
                  src={import.meta.env.BASE_URL + 'pic.png'} 
                  className='rounded-full h-80 w-80 object-cover border-4 border-white shadow-lg' 
                  alt='Nikhil Kalkhuria Profile'
                />
              </div>
            </div>

            <div className='flex-1 max-w-2xl'>
              <div className='bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 shadow-xl'>
                <h2 className='text-3xl font-bold text-pink-400 mb-4'>Hello, I'm Nikhil Kalkhuria</h2>
                <p className='text-lg leading-relaxed text-gray-300 mb-6'>
                  Welcome to my portfolio! I'm a dedicated individual with a passion for computer science and artificial intelligence. 
                  Currently pursuing a BTech in Computer Science and AI at ABESIT.
                </p>
                <p className='text-lg leading-relaxed text-gray-300'>
                  With experience in HTML5, CSS, JavaScript, and React.js, I'm a motivated learner seeking opportunities to 
                  expand my knowledge and connect with people who share the same mindset, enthusiasm, and curiosity.
                </p>
              </div>
            </div>
          </div>

          <div className='mb-16'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4'>
                MY JOURNEY
              </h2>
              <div className='w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full'></div>
            </div>      

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto'>

              <div>
                <h3 className='text-2xl font-bold text-center mb-8 text-blue-400'>EDUCATIONAL JOURNEY</h3>
                <div className='relative'>

                  <div className='absolute left-32 top-0 w-1 h-full bg-gradient-to-b from-gray-400 via-gray-600 to-gray-400 rounded-full'></div>

                  <div className='space-y-16 ml-48'>
         
                    <div className='relative flex items-center'>
                      <div className='absolute -left-40 text-pink-400 font-bold text-xl bg-gray-800 px-3 py-1 rounded-lg border border-pink-400'>
                        2019
                      </div>
                      <div className='absolute -left-18 w-8 h-8 bg-pink-500 border-4 border-white rounded-full shadow-lg z-10'></div>
                      <div className='bg-gradient-to-r from-gray-800 to-gray-700 border-l-4 border-pink-500 rounded-xl p-6 shadow-xl ml-4 hover:shadow-2xl transition-shadow duration-300'>
                        <h3 className='text-2xl font-bold text-pink-400 mb-2'>10th Grade</h3>
                        <p className='text-gray-300 text-lg'>G.B.S.S.S No-1, C-Block, Yamuna Vihar Delhi</p>
                      </div>
                    </div>

                    <div className='relative flex items-center'>
                      <div className='absolute -left-40 text-purple-400 font-bold text-xl bg-gray-800 px-3 py-1 rounded-lg border border-purple-400'>
                        2021
                      </div>
                      <div className='absolute -left-18 w-8 h-8 bg-purple-500 border-4 border-white rounded-full shadow-lg z-10'></div>
                      <div className='bg-gradient-to-r from-gray-800 to-gray-700 border-l-4 border-purple-500 rounded-xl p-6 shadow-xl ml-4 hover:shadow-2xl transition-shadow duration-300'>
                        <h3 className='text-2xl font-bold text-purple-400 mb-2'>12th Grade</h3>
                        <p className='text-gray-300 text-lg'>G.B.S.S.S No-1, C-Block, Yamuna Vihar Delhi</p>
                      </div>
                    </div>

                    <div className='relative flex items-center'>
                      <div className='absolute -left-40 text-blue-400 font-bold text-xl bg-gray-800 px-3 py-1 rounded-lg border border-blue-400'>
                        2026
                      </div>
                      <div className='absolute -left-18 w-8 h-8 bg-blue-500 border-4 border-white rounded-full shadow-lg z-10'></div>
                      <div className='bg-gradient-to-r from-gray-800 to-gray-700 border-l-4 border-blue-500 rounded-xl p-6 shadow-xl ml-4 hover:shadow-2xl transition-shadow duration-300'>
                        <h3 className='text-2xl font-bold text-blue-400 mb-2'>B.Tech in Computer Science (AI)</h3>
                        <p className='text-gray-300 text-lg'>ABESIT - Expected Graduation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-2xl font-bold text-center mb-8 text-green-400'>CERTIFICATIONS</h3>
                <div className='relative'>

                  <div className='absolute left-32 top-0 w-1 h-full bg-gradient-to-b from-gray-400 via-gray-600 to-gray-400 rounded-full'></div>

                  <div className='space-y-16 ml-48'>
          
                    <div className='relative flex items-center'>
                      <div className='absolute -left-40 text-green-400 font-bold text-xl bg-gray-800 px-3 py-1 rounded-lg border border-green-400'>
                        2025
                      </div>
                      <div className='absolute -left-18 w-8 h-8 bg-green-500 border-4 border-white rounded-full shadow-lg z-10'></div>
                      <div className='bg-gradient-to-r from-gray-800 to-gray-700 border-l-4 border-green-500 rounded-xl p-6 shadow-xl ml-4 hover:shadow-2xl transition-shadow duration-300'>
                        <h3 className='text-2xl font-bold text-green-400 mb-2'>Certified AI Foundations Associate</h3>
                        <p className='text-gray-300 text-lg'>Oracle Cloud Infrastructure</p>
                      </div>
                    </div>
        
                    <div className='relative flex items-center'>
                      <div className='absolute -left-40 text-yellow-400 font-bold text-xl bg-gray-800 px-3 py-1 rounded-lg border border-yellow-400'>
                        2024
                      </div>
                      <div className='absolute -left-18 w-8 h-8 bg-yellow-500 border-4 border-white rounded-full shadow-lg z-10'></div>
                      <div className='bg-gradient-to-r from-gray-800 to-gray-700 border-l-4 border-yellow-500 rounded-xl p-6 shadow-xl ml-4 hover:shadow-2xl transition-shadow duration-300'>
                        <h3 className='text-2xl font-bold text-yellow-400 mb-2'>JAVA Programming</h3>
                        <p className='text-gray-300 text-lg'>Softpro India Computer Technologies (P)Ltd</p>
                      </div>
                    </div>

                    <div className='relative flex items-center'>
                      <div className='absolute -left-40 text-purple-400 font-bold text-xl bg-gray-800 px-3 py-1 rounded-lg border border-purple-400'>
                        2025
                      </div>
                      <div className='absolute -left-18 w-8 h-8 bg-purple-500 border-4 border-white rounded-full shadow-lg z-10'></div>
                      <div className='bg-gradient-to-r from-gray-800 to-gray-700 border-l-4 border-purple-500 rounded-xl p-6 shadow-xl ml-4 hover:shadow-2xl transition-shadow duration-300'>
                        <h3 className='text-2xl font-bold text-purple-400 mb-2'>Deep Learning</h3>
                        <p className='text-gray-300 text-lg'>Introduction to Deep Learning - Infosys</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
