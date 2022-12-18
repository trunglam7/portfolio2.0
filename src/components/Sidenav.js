import React from 'react'
import {SiFrontendmentor, SiGithub, SiLinkedin} from 'react-icons/si'
import './Sidenav.css'

const Sidenav = ({toggleNav}) => {
  return (
        <nav className={toggleNav ? "side-nav-active" : "side-nav-hidden"}>
            <a href='https://www.frontendmentor.io/profile/trunglam7' target='_blank' rel="noreferrer"><SiFrontendmentor size={30} />
              <div className='btn-label'>Frontend Mentor</div>
            </a>
            <a href='https://github.com/trunglam7' target='_blank' rel="noreferrer"><SiGithub size={30}/>
              <div className='btn-label'>Github</div>
            </a>
            <a href='https://www.linkedin.com/in/trung-lam-8190a0177/' target='_blank' rel="noreferrer"><SiLinkedin size={30} />
              <div className='btn-label'>Linkedin</div>
            </a>
        </nav>
  )
}

export default Sidenav