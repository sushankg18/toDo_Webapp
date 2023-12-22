import React from 'react'
import '../styles/Header.css'
const Header = () => {
  return (
    <div className='header'>
      <h1>To-Do Application</h1>
      <div className='header-right'>
        <p>Looking for mobile app ?</p>
        <button> Download for Android</button>
      </div>
    </div>
  )
}

export default Header
