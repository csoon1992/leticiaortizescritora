import React from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

const menuItemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function MenuItem({ href, title }) {
  return (
    <motion.span className="inline-block" variants={menuItemAnimation}>
      <AnchorLink
        href={href}
        className="transition duration-300 text-grey-warm-800 hover:text-primary-800 "
      >
        {title}
      </AnchorLink>
    </motion.span>
  );
}

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuItem;
