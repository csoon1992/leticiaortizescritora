import React from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const BorderedText = styled.span`
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5),
    1px 1px 0 rgba(255, 255, 255, 0.5), 1px 1px 0 rgba(255, 255, 255, 0.5),
    1px 1px 0 rgba(255, 255, 255, 0.5), 1px 1px 0 rgba(255, 255, 255, 0.5);
`;

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
        className="xl:text-2xl transition duration-300 text-grey-warm-800 hover:text-primary-800 "
      >
        <BorderedText>{title}</BorderedText>
      </AnchorLink>
    </motion.span>
  );
}

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuItem;
