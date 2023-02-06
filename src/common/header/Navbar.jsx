import React from 'react'
import { BiBorderAll } from 'react-icons/bi'
import { BsChevronDown } from 'react-icons/bs'

const Navbar = () => {
  return (
    <>
        <header className="header">
          <div className="container d_flex">
            <div className="categories d_flex">
              <span><BiBorderAll/></span>
              <h4> Categories <BsChevronDown/> </h4>
            </div>

            <div className="navLink">
              <ul className='nav'></ul>
            </div>
          </div>
        </header>
    </>
  )
}

export default Navbar