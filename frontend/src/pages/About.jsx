import React from 'react'
import { assets } from '../assets/assets'
import {
  FaBolt,
  FaHandsHelping,
  FaUserCheck,
  FaUserMd,
  FaLaptopMedical,
  FaHeadset
} from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {

  const features = [
    { title: "EFFICIENCY", desc: "Streamlined appointment scheduling.", icon: <FaBolt /> },
    { title: "CONVENIENCE", desc: "Trusted healthcare professionals.", icon: <FaHandsHelping /> },
    { title: "PERSONALIZATION", desc: "Tailored health recommendations.", icon: <FaUserCheck /> },
    { title: "EXPERT DOCTORS", desc: "Highly qualified professionals.", icon: <FaUserMd /> },
    { title: "MODERN TECHNOLOGY", desc: "Advanced medical equipment.", icon: <FaLaptopMedical /> },
    { title: "24/7 SUPPORT", desc: "Emergency assistance anytime.", icon: <FaHeadset /> }
  ];

  return (
    <div className='px-4 md:px-10'>

      {/* Heading Animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center text-3xl pt-10'
      >
        <p className='font-semibold text-gray-800'>
          ABOUT <span className='text-primary'>US</span>
        </p>
        <div className='w-16 h-1 bg-primary mx-auto mt-2 rounded-full'></div>
      </motion.div>

      {/* Main Section Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className='my-12 flex flex-col md:flex-row gap-12 items-center'
      >

        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className='w-full md:max-w-[380px] rounded-xl shadow-lg'
          src={assets.about_image}
          alt="About"
        />

        <div className='flex flex-col gap-6 md:w-2/4 text-sm text-gray-600 leading-7'>

          <p>
            Welcome to Hingoli City Hospital, where your health and well-being are our top priorities.
            We provide quality medical care with compassion and professionalism.
          </p>

          <p>
            Our experienced doctors and healthcare staff work together to deliver accurate diagnosis
            and effective treatment using modern technology.
          </p>

          <div>
            <b className='text-gray-800 text-lg'>Our Vision</b>
            <div className='w-14 h-1 bg-primary mt-2 rounded-full'></div>
          </div>

          <p>
            Our vision is to create a seamless healthcare experience and
            bridge the gap between patients and healthcare providers.
          </p>

        </div>
      </motion.div>

      {/* Why Choose Us */}
      <div className='text-2xl text-center mb-10'>
        <p className='font-semibold text-gray-800'>
          WHY <span className='text-primary'>CHOOSE US</span>
        </p>
        <div className='w-20 h-1 bg-primary mx-auto mt-2 rounded-full'></div>
      </div>

      {/* Cards with Stagger Animation */}
      <div className='grid md:grid-cols-3 gap-8 mb-20'>

        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className='bg-white border rounded-2xl p-8 text-center
                       shadow-md hover:shadow-2xl
                       transition-all duration-300'
          >

            <div className='flex justify-center mb-5'>
              <div className='w-16 h-16 flex items-center justify-center
                              rounded-full bg-primary/10
                              text-primary text-2xl'>
                {item.icon}
              </div>
            </div>

            <b className='text-lg text-gray-800'>
              {item.title}
            </b>

            <p className='mt-3 text-sm text-gray-600'>
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </div>
  )
}

export default About
