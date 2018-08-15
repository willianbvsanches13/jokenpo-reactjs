import React from 'react';
import PropTypes from 'prop-types';
import Container from './styles';

const Button = ({ source }) => <Container source={source} />;

Button.propTypes = {
  source: PropTypes.string.isRequired,
};

export default Button;
