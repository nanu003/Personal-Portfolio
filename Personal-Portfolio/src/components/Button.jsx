import React from 'react'

function Button({ children, onClick, isActive }) {
  return (
    <button 
      className={`btn hover:bg-pink-900 text-white font-bold py-1 px-2 rounded-4xl ${
        isActive ? 'bg-pink-900 ring-2 ring-pink-400' : ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button