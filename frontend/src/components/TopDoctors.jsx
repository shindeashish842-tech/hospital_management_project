import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const TopDoctors = () => {

    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    // Container animation (stagger)
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    // Card animation
    const item = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='text-3xl font-medium'
            >
                Top Doctors to Book
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='sm:w-1/3 text-center text-sm'
            >
                Simply browse through our extensive list of trusted doctors.
            </motion.p>

            {/* Doctors Grid with Stagger */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'
            >
                {doctors.slice(0, 10).map((item, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        onClick={() => {
                            navigate(`/appointment/${item._id}`)
                            scrollTo(0, 0)
                        }}
                        whileHover={{ scale: 1.05 }}
                        className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer
                                   hover:shadow-xl transition-all duration-300'
                    >
                        <img className='bg-[#EAEFFF]' src={item.image} alt="" />

                        <div className='p-4'>

                            <div className={`flex items-center gap-2 text-sm text-center 
                                ${item.available ? 'text-green-500' : "text-gray-500"}`}>

                                <p className={`w-2 h-2 rounded-full 
                                    ${item.available ? 'bg-green-500' : "bg-gray-500"}`}>
                                </p>

                                <p>{item.available ? 'Available' : "Not Available"}</p>
                            </div>

                            <p className='text-[#262626] text-lg font-medium'>
                                {item.name}
                            </p>

                            <p className='text-[#5C5C5C] text-sm'>
                                {item.speciality}
                            </p>

                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Button Animation */}
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}
                className='bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10'
            >
                more
            </motion.button>

        </div>
    )
}

export default TopDoctors
