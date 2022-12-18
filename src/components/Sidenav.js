import React from 'react'
import {SiFrontendmentor, SiGithub, SiLinkedin} from 'react-icons/si'
import './Sidenav.css'

const Sidenav = ({toggleNav}) => {
  return (
        <nav className={toggleNav ? "side-nav-active" : "side-nav-hidden"}>
            <button onClick={() => window.open('https://www.frontendmentor.io/profile/trunglam7')}><SiFrontendmentor size={30}/>
              <div className='btn-label'>Frontend Mentor</div>
            </button>
            <button onClick={() => window.open('https://github.com/trunglam7')}><SiGithub size={30}/>
              <div className='btn-label'>Github</div>
            </button>
            <button onClick={() => window.open('https://www.linkedin.com/in/trung-lam-8190a0177/')}><SiLinkedin size={30} />
              <div className='btn-label'>Linkedin</div>
            </button>
        </nav>
  )
}

export default Sidenav