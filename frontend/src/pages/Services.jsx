import React from "react";
import { motion } from "framer-motion";
import {
  FaUserMd,
  FaAmbulance,
  FaHospital,
  FaStethoscope,
  FaProcedures,
  FaHeartbeat
} from "react-icons/fa";

const Services = () => {

  const services = [
    { title: "Emergency Care", icon: <FaAmbulance />, color: "text-red-500" },
    { title: "Expert Doctors", icon: <FaUserMd />, color: "text-blue-600" },
    { title: "Modern Technology", icon: <FaHospital />, color: "text-purple-600" },
    { title: "General Checkup", icon: <FaStethoscope />, color: "text-green-600" },
    { title: "Surgery Services", icon: <FaProcedures />, color: "text-orange-500" },
    { title: "Cardiac Care", icon: <FaHeartbeat />, color: "text-pink-500" }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 px-6 py-20">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-gray-800">
          Our Services
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-8 shadow-md
                       hover:shadow-2xl transition-all duration-300
                       text-center"
          >

            <div className="flex justify-center mb-6">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`text-4xl ${item.color}`}
              >
                {item.icon}
              </motion.div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Providing high-quality medical services with care,
              trust and modern facilities.
            </p>

          </motion.div>
        ))}

      </div>

      {/* Statistics Section */}
      <div className="mt-28 max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

        {[
          { number: "5000+", label: "Happy Patients" },
          { number: "50+", label: "Expert Doctors" },
          { number: "24/7", label: "Emergency Support" },
          { number: "100%", label: "Care & Trust" }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold text-primary">
              {item.number}
            </h2>
            <p className="text-gray-600 mt-2">
              {item.label}
            </p>
          </div>
        ))}

      </div>

      {/* Image Section */}
      <div className="mt-28 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
          alt="Hospital"
          className="w-full md:w-1/2 rounded-3xl shadow-xl
                     hover:scale-105 transition duration-500"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >

          <h2 className="text-3xl font-semibold text-gray-800">
            Advanced Medical Infrastructure
          </h2>

          <div className="w-16 h-1 bg-primary mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-600 leading-7">
            We provide state-of-the-art facilities, modern equipment
            and highly trained professionals to ensure the best care
            for every patient.
          </p>

          <button className="mt-8 px-8 py-3 bg-primary text-white
                             rounded-full hover:scale-105
                             transition duration-300 shadow-md">
            Learn More
          </button>

        </motion.div>

      </div>

      {/* Banner Section */}
      <div className="mt-28 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden
                     h-[400px] shadow-2xl"
        >

          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1400&q=80"
            alt="Hospital Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

            <h2 className="text-3xl md:text-4xl font-semibold">
              Trusted Healthcare For Everyone
            </h2>

            <p className="mt-4 text-white/90">
              Quality treatment with modern technology.
            </p>

            <button className="mt-8 px-8 py-3 bg-primary
                               rounded-full hover:scale-105
                               transition duration-300 shadow-lg">
              Explore Services
            </button>

          </div>

        </motion.div>

      </div>

    </div>
  );
};

export default Services;
