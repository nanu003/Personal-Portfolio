import React, { useState } from 'react'
import PortfolioLayout from '../../components/PortfolioLayout'
const BASE_URL = import.meta.env.BASE_URL;

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'AI Notes Summarizer',
      description: 'Developed a full-stack web app that summarizes notes from PDFs or handwritten inputs using AI',
      image: BASE_URL + 'pdf.png',
      technologies: ["React.js", "Tailwind CSS", "Python (Flask)", "LLaMA", "OCR (Tesseract)"],
      details: {
        overview: 'A comprehensive note-taking and summarization application that leverages artificial intelligence to process and summarize content from various sources including PDFs and handwritten notes.',
        features: [
          'PDF text extraction and processing',
          'Handwritten text recognition using OCR',
          'Integrated Meta’s LLaM model to generate concise summaries with adjustable lengths.',
          'User-friendly web interface',
          'Export functionality for summaries'
        ],
        technologies: ["React.js", "Tailwind CSS", "Python (Flask)", "LLaMA", "OCR (Tesseract)"],
        challenges: 'Implementing accurate OCR for handwritten text and optimizing AI summarization for different content types.',
      }
    },
    {
      id: 2,
      title: 'Currency Converter',
      description: 'A simple and intuitive currency converter application',
      image: BASE_URL + 'money.png',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      details: {
        overview: 'A modern, responsive portfolio website showcasing my skills, projects, and professional journey with elegant animations and clean design.',
        features: [
          'Responsive design for all devices',
          'Smooth animations and transitions',
          'Interactive navigation',
          'Professional project showcase',
          'Contact form integration'
        ],
        technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'CSS3', 'HTML5'],
        challenges: 'Creating smooth animations while maintaining performance and ensuring cross-browser compatibility.',
      }
    },
    {
      id: 3,
      title: 'Crypto Dashboard',
      description: 'A comprehensive cryptocurrency dashboard application with real-time data and analytics',
      image: BASE_URL + 'crypto.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      details: {
        overview: 'A full-featured cryptocurrency dashboard designed for users to track and analyze their crypto investments efficiently.',
        features: [
          'User authentication and authorization',
          'Real-time price tracking',
          'Portfolio management',
          'Market analysis tools',
          'Real-time notifications'
        ],
        technologies: ['React', 'Node.js', 'MongoDB'],
        challenges: 'Implementing real-time collaboration features and ensuring data consistency across multiple users.',
      }
    }
  ]

  const openProjectDetails = (project) => {
    setSelectedProject(project)
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
  }

  return (
    <>
    <PortfolioLayout />

    <div>
         <div className='max-w-6xl mx-auto px-6 py-6'>
          
          <div className='text-center mb-16'>
            <div className='inline-block border-2 border-gray-400 rounded-2xl px-12 py-4 bg-gray-800/60 backdrop-blur-lg shadow-2xl'>
              <h1 className='text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent tracking-wide'>
                PROJECTS
              </h1>
            </div>
          </div>
        </div>

        <div>
          <div className='max-w-7xl mx-auto px-6 pb-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {projects.map((project) => (
                <div key={project.id} className='bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl p-4 border border-gray-600/50 shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 hover:border-pink-400/50 hover:transform hover:scale-[1.02]'>
                  <img src={project.image} alt={project.title} className='w-full h-36 object-cover rounded-xl mb-3' />
                  <h3 className='text-2xl font-bold text-pink-400 mb-2'>{project.title}</h3>
                  <p className='text-gray-300 mb-4'>{project.description}</p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className='px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300'>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => openProjectDetails(project)}
                    className='text-pink-400 hover:text-pink-300 hover:underline transition-colors duration-300'
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedProject && (
          <div className='fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4' onClick={closeProjectDetails}>
            <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-600' onClick={(e) => e.stopPropagation()}>
              <div className='flex justify-between items-start mb-6'>
                <h2 className='text-4xl font-bold text-pink-400'>{selectedProject.title}</h2>
                <button 
                  onClick={closeProjectDetails}
                  className='text-gray-400 hover:text-white text-2xl font-bold transition-colors duration-300'
                >
                  ×
                </button>
              </div>
              
              <img src={selectedProject.image} alt={selectedProject.title} className='w-full h-64 object-cover rounded-xl mb-6' />
              
              <div className='space-y-6'>
                <div>
                  <h3 className='text-2xl font-bold text-purple-400 mb-3'>Overview</h3>
                  <p className='text-gray-300 leading-relaxed'>{selectedProject.details.overview}</p>
                </div>
                
                <div>
                  <h3 className='text-2xl font-bold text-blue-400 mb-3'>Key Features</h3>
                  <ul className='space-y-2'>
                    {selectedProject.details.features.map((feature, index) => (
                      <li key={index} className='text-gray-300 flex items-start'>
                        <span className='text-green-400 mr-2'>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className='text-2xl font-bold text-green-400 mb-3'>Technologies Used</h3>
                  <div className='flex flex-wrap gap-3'>
                    {selectedProject.details.technologies.map((tech, index) => (
                      <span key={index} className='px-4 py-2 bg-gray-700/50 rounded-full text-gray-300 font-medium'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className='text-2xl font-bold text-yellow-400 mb-3'>Challenges & Solutions</h3>
                  <p className='text-gray-300 leading-relaxed'>{selectedProject.details.challenges}</p>
                </div>
                
                
              </div>
            </div>
          </div>
        )}
    </div>
    </>
  )
}

export default Projects
