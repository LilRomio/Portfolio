import React from 'react';
import {  FaWhatsappSquare } from 'react-icons/fa';
import {  BsLinkedin, BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="whatsapp://send?text=Hello World!&phone=+447534146792"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            whileInView={{ scale: [0, 1] }}
            whileHover={{ scale: [1, 0.9] }}
            transition={{ duration: 0.25 }}
            className="app__flex"
          >
            <FaWhatsappSquare />
          </motion.div>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/romeo-popescu-5186a3b1/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            whileInView={{ scale: [0, 1] }}
            whileHover={{ scale: [1, 0.9] }}
            transition={{ duration: 0.25 }}
            className="app__flex"
          >
            <BsLinkedin />
          </motion.div>
        </a>
      </div>
      
      <div>
        <a
          href="https://github.com/LilRomio"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            whileInView={{ scale: [0, 1] }}
            whileHover={{ scale: [1, 0.9] }}
            transition={{ duration: 0.25 }}
            className="app__flex"
          >
            <BsGithub />
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
