import React from 'react'
import { assets } from '../assets/assets'
import { FaServicestack } from "react-icons/fa";
import { Link } from "react-router-dom"

import { FaHome, FaInfoCircle, FaUserMd, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full text-gray-800 border-2 border-transparent rounded-xl bg-clip-padding' style={{borderImage:'linear-gradient(90deg, #3b82f6, #22c55e, #ec4899) 1'}}>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-8 my-6 mt-12 text-sm p-4'>

        {/* Left Section */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-700 leading-7 text-sm'>
            Hingoli City Hospital is a trusted healthcare center committed to providing quality medical 
            With a focus on patient care, safety, and accurate diagnosis, it delivers reliable treatment for all age groups.
Hingoli City Hospital stands as a dependable choice for comprehensive and compassionate healthcare..
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className='text-2xl font-semibold mb-2'>COMPANY</p>
          <div className='w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-4'></div>
          <ul className='flex flex-col gap-3 text-gray-700'>
            {[
              {icon:<FaHome className='text-blue-500'/>,label:'Home', link:'/'},
              {icon:<FaInfoCircle className='text-purple-500'/>,label:'About Us', link:'/about'},
              {icon:<FaUserMd className='text-green-500'/>,label:'Doctors', link:'/doctors'},
              {icon:<FaPhoneAlt className='text-orange-500'/>,label:'Contact Us', link:'/contact'},
              {icon:<FaServicestack className='text-cyan-500'/>, label:'Services', link:'/services'}
            ].map((item,i)=> (
              <li key={i}>
                <Link to={item.link} className='flex items-center gap-3 cursor-pointer transition-all duration-300 hover:text-blue-500 hover:translate-x-2 hover:scale-105 group'>
                  <span className='text-lg group-hover:rotate-12 transition-all duration-300'>{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <p className='text-2xl font-semibold mb-2'>GET IN TOUCH</p>
          <div className='w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mb-4'></div>
          <ul className='flex flex-col gap-3 text-gray-700'>
            <li className='flex items-center gap-3 hover:text-green-500 transition-all duration-300'>
              <FaPhoneAlt className="text-lg text-orange-500" /> +91 98765 43210
            </li>
            <li className='flex items-center gap-3 hover:text-green-500 transition-all duration-300'>
              <FaEnvelope className="text-lg text-pink-500" /> info@hingolicityhospital.com
            </li>
            <li className='flex items-center gap-3 hover:text-green-500 transition-all duration-300'>
              <FaMapMarkerAlt className="text-lg text-red-500" /> Hingoli, Maharashtra
            </li>
          </ul>
        </div>

      </div>

      {/* Social Icons Ultra Animation (Colorful) */}
      <div className='flex justify-center gap-8 py-3'>
        {[
          {Icon:FaFacebook, color:'text-blue-600'},
          {Icon:FaInstagram, color:'text-pink-500'},
          {Icon:FaTwitter, color:'text-sky-500'},
          {Icon:FaLinkedin, color:'text-blue-700'}
        ].map(({Icon, color}, i) => (
          <Icon key={i}
            className={`text-2xl ${color} cursor-pointer transition-all duration-500 ease-in-out hover:scale-125 hover:-translate-y-2 hover:drop-shadow-xl animate-[float_3s_ease-in-out_infinite]`}
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>

      {/* Bottom */}
      <div className='border-t border-gray-300'>
        <p className='py-3 text-base text-center text-gray-500 tracking-wide hover:text-gray-700 transition-all duration-300'>
          © 2026 Hingoli City Hospital ✨ Crafted with Care | All Rights Reserved 🔒
        </p>
      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  )
}

export default Footer