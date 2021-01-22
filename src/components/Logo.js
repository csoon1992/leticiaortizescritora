import React from 'react';
import { motion } from 'framer-motion';

const logoContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.5,
    },
  },
};

const logoItem = {
  hidden: { x: 200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

function Logo() {
  return (
    <div className="font-bold font-serif text-3xl text-center">
      <motion.a
        href="/"
        className="block"
        variants={logoContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="block text-4xl"
          variants={logoItem}
          initial="hidden"
          animate="visible"
        >
          Leticia
        </motion.span>
        <motion.span
          className="block"
          variants={logoItem}
          initial="hidden"
          animate="visible"
        >
          Ortiz
        </motion.span>
      </motion.a>
    </div>
  );
}

export default Logo;
