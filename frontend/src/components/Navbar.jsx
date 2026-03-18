import React, { useContext, useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`sticky top-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-white shadow-lg' : 'bg-white/70 backdrop-blur-md'}
      border-b-2`}
      style={{
        borderImage: 'linear-gradient(90deg,#3b82f6,#22c55e,#ec4899) 1'
      }}
    >

      <div className='flex items-center justify-between text-sm py-4 px-6'>

        {/* Logo */}
        <img
          onClick={() => navigate('/')}
          className='w-44 cursor-pointer'
          src={assets.logo}
          alt=""
        />

        {/* Desktop Menu */}
        <ul className='md:flex items-center gap-7 font-medium hidden'>

          {[
            { path: '/', label: 'HOME' },
            { path: '/doctors', label: 'ALL DOCTORS' },
            { path: '/about', label: 'ABOUT' },
            { path: '/services', label: 'SERVICES' },
            { path: '/contact', label: 'CONTACT' }
          ].map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) => isActive ? "group active" : "group"}
            >
              <li className='py-1 transition-all duration-300 
                             group-hover:text-primary 
                             group-hover:scale-105'>
                {item.label}
              </li>

              {/* UNDERLINE WITH SPACE */}
              <hr className='h-0.5 bg-primary w-0 
                             mt-2
                             group-hover:w-3/5 
                             transition-all duration-300 
                             group-[.active]:w-3/5' />
            </NavLink>
          ))}

        </ul>

        {/* Right Section */}
        <div className='flex items-center gap-4'>

          {token && userData ? (
            <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={userData.image} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />

              <div className='absolute top-0 right-0 pt-14 hidden group-hover:block z-20'>
                <div className='min-w-48 bg-white rounded shadow-lg flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className='bg-gradient-to-r from-blue-500 to-pink-500
                         text-white px-8 py-3 rounded-full
                         hidden md:block
                         hover:scale-105 transition-all duration-300'>
              Create account
            </button>
          )}

          {/* Mobile Button */}
          <img
            onClick={() => setShowMenu(true)}
            className='w-6 md:hidden cursor-pointer'
            src={assets.menu_icon}
            alt=""
          />

        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'}
                      right-0 top-0 bottom-0 z-50 
                      overflow-hidden bg-white 
                      transition-all duration-300`}>

        <div className='flex items-center justify-between px-5 py-6'>
          <img src={assets.logo} className='w-36' alt="" />
          <img
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            className='w-7 cursor-pointer'
            alt=""
          />
        </div>

        <ul className='flex flex-col items-center gap-6 mt-5 text-lg font-medium'>
          <NavLink onClick={() => setShowMenu(false)} to='/'><p>HOME</p></NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p>ALL DOCTORS</p></NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/about'><p>ABOUT</p></NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/services'><p>SERVICES</p></NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/contact'><p>CONTACT</p></NavLink>
        </ul>

      </div>

    </div>
  )
}

export default Navbar
