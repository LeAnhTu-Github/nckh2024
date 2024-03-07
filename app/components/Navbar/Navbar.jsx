import React from 'react'
import NavInfo from './NavInfo'
import Navbox from './Navbox'

const Navbar = () => {
  return (
    <div className="w-full h-[250px] flex gap-4">
        <NavInfo/>
        <Navbox />
    </div>
  )
}

export default Navbar
