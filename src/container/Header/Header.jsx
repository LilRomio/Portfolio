import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import Lottie from 'lottie-react';
import './Header.scss';
import Doggo from './Doggo.json';
import ReactLogo from './ReactLogo.json';
import WebDevIcons1 from './WebDevIcons1.json';
import WebDevIcons2 from './WebDevIcons2.json';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app_header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <Lottie style={{ width: 60 }} animationData={Doggo} />

            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Romeo</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Junior Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile-circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        <div className="circle-cmp app__flex">
          <Lottie style={{ width: '80%' }} animationData={WebDevIcons2} />
        </div>
        <div className="circle-cmp app__flex">
          <Lottie style={{ width: '80%' }} animationData={ReactLogo} />
        </div>
        <div className="circle-cmp app__flex">
          <Lottie
            style={{ width: '100%', height: '100%' }}
            animationData={WebDevIcons1}
          />
        </div>

        {/* {[images.angular, images.react, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))} */}
      </motion.div>
    </div>
  );
};

export default AppWrap(MotionWrap(Header, 'home'), 'home', 'app__primarybg');
