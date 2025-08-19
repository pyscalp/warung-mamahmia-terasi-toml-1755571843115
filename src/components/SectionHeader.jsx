import React from 'react';
import { motion } from 'framer-motion';

function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-secondary text-lg font-semibold mb-2"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl font-bold text-gray-800"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '60px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-1 bg-primary mx-auto mt-4 rounded-full"
      ></motion.div>
    </div>
  );
}

export default SectionHeader;