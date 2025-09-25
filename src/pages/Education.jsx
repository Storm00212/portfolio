import React from 'react';
import { motion } from 'framer-motion';
import { dekut, teach2give, Alliance } from '../assets';

// For Alliance, use engineer as placeholder

const Education = () => {
  return (
    <section className="education-container c-space my-20">
      <h2 className="head-text text-center">Education & Training</h2>

      <div className="grid lg:grid-cols-1 grid-cols-1 gap-10 mt-12">
        {/* University */}
        <motion.div
          className="education-item bg-black-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-6">
            <img src={dekut} alt="Dedan Kimathi University" className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="text-xl font-semibold text-white">Dedan Kimathi University of Technology</h3>
              <p className="text-gray-400">BSc Electrical and Electronics Engineering</p>
              <p className="text-sm text-gray-500">September 2023 - Present</p>
              <p className="text-gray-300 mt-2">
                Currently pursuing my degree in Electrical and Electronics Engineering, focusing on innovative solutions
                in electronics, IoT, and automation systems. Actively involved in practical projects and research.
              </p>
            </div>
          </div>
        </motion.div>

        {/* High School */}
        <motion.div
          className="education-item bg-black-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-6">
            <img src={Alliance} alt="Alliance High School" className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="text-xl font-semibold text-white">Alliance High School</h3>
              <p className="text-gray-400">Kenya Certificate of Secondary Education</p>
              <p className="text-sm text-gray-500">2019 - 2022</p>
              <p className="text-gray-300 mt-2">
                Graduated with an A- grade (79 points), excelling in Mathematics, Physics, and Chemistry. The experience at this prestigious school helped me
                develop a strong foundation in sciences and problem-solving skills that prepared me for engineering studies and software development.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Training */}
        <motion.div
          className="education-item bg-black-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-6">
            <img src={teach2give} alt="Teach2Give" className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="text-xl font-semibold text-white">Teach2Give</h3>
              <p className="text-gray-400">Quality Assurance / Quality Engineering Trainee</p>
              <p className="text-sm text-gray-500">Current</p>
              <p className="text-gray-300 mt-2">
                Gaining hands-on experience in quality assurance and engineering processes. Learning industry-standard
                practices in software testing, process optimization, and quality management systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;