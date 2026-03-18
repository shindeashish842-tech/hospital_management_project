import React from 'react'
import { motion } from 'framer-motion'

import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const Home = () => {

  const sectionVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  return (
    <div>

      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <Header />
      </motion.div>

      {/* Speciality Menu (Scroll Animation) */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SpecialityMenu />
      </motion.div>

      {/* Top Doctors */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <TopDoctors />
      </motion.div>

      {/* Banner */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Banner />
      </motion.div>

    </div>
  )
}

export default Home
