import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaBuilding } from "react-icons/fa"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_xyizci8',
      'template_1qv6yik',
      form.current,
      'jNDN5hUo2KZOKgKhw'
    )
    .then(() => {
      alert("Message Sent Successfully 🚀")
      form.current.reset()
    })
    .catch((error) => {
      alert("Failed to send ❌")
      console.log(error.text)
    })
  }

  return (
    <div className="px-6 md:px-16 lg:px-24">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl pt-12 text-gray-700 font-semibold"
      >
        <p>
          CONTACT <span className="text-black">US</span>
        </p>
        <div className="w-14 h-1 bg-black mx-auto mt-2"></div>
      </motion.div>

      {/* Main Section */}
      <div className="my-14 grid md:grid-cols-2 gap-12 items-start">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            className="w-full rounded-2xl shadow-lg"
            src={assets.contact_image}
            alt="Contact"
          />
        </motion.div>

        {/* Info + Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >

          {/* OUR OFFICE (UNCHANGED) */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-3 mb-4">
              <FaBuilding className="text-2xl text-blue-600" />
              <h2 className="font-semibold text-lg text-gray-700">
                OUR OFFICE
              </h2>
            </div>

            <div className="flex items-start gap-3 text-gray-600 mb-2">
              <FaMapMarkerAlt className="text-red-500 mt-1" />
              <p>B-1, Railway Station Road, Hingoli, Maharashtra</p>
            </div>

            <div className="flex items-center gap-3 text-gray-600 mb-2">
              <FaPhone className="text-green-600" />
              <p>+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <FaEnvelope className="text-purple-600" />
              <p>info@hingolicityhospital.com</p>
            </div>

          </div>

          {/* SEND MESSAGE (UPDATED WITH EMAILJS) */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-3 mb-4">
              <FaPaperPlane className="text-2xl text-orange-500" />
              <h2 className="font-semibold text-lg text-gray-700">
                SEND MESSAGE
              </h2>
            </div>

            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <FaPaperPlane />
                Send Message
              </motion.button>

            </form>

          </div>

        </motion.div>
      </div>

      {/* Map (UNCHANGED) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <iframe
          className="w-full h-72 md:h-96 rounded-2xl shadow-md"
          src="https://www.google.com/maps?q=Hingoli,Maharashtra,India&output=embed"
          loading="lazy"
        ></iframe>
      </motion.div>

    </div>
  )
}

export default Contact
