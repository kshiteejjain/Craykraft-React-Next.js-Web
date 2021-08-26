import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.svg'
import { useState } from 'react'

export default function Navbar() {

const [isActive, setActive] = useState(false);
const [isHumburger, setHumburger] = useState(false);
const openMenu = () => {
  setActive(!isActive);
  setHumburger(!isHumburger);
}

const closeMenu = () => {
  setActive(!isActive);
  setHumburger(!isHumburger);
}

  let humburger = 'menu-bar';
  if (isHumburger) {
    humburger += ' open';
  }

    return (
        <>  
          <header>
            <div className="container flex">
              <h1 className="logo"> <Image src={logo} alt="Craykraft Pictures" /> </h1>
              <div className={humburger} onClick={openMenu}> <span className="line1"></span> <span></span> <span className="line3"></span> </div>
                    <nav className={isActive ? "show" : null}>
                    <Link href="/"><a onClick={closeMenu}>Home</a></Link>
                    <Link href="#About"><a onClick={closeMenu}>About Us</a></Link>
                    <Link href="#Expertise"><a onClick={closeMenu}>Services</a></Link>
                    <Link href="#Portfolio"><a onClick={closeMenu}>Portfolio</a></Link>
                    <Link href="#Team"><a onClick={closeMenu}>Our Team</a></Link>
                    <Link href="#Footer"><a>Contact Us</a></Link>
                  </nav>
                
              
            </div>
          </header>
          
    
        </>
      )
}