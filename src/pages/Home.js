import React from 'react'
import logo from '../images/mylogo.webp'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <img src={logo} alt='home logo' />
    </div>
  )
}

export default Home