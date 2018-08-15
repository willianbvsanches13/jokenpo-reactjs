import React from 'react';
import PropTypes from 'prop-types';
import Button from './components/Button';

import { Container } from './styles';

const Card = ({ onClick, title, source }) => (
  <Container onClick={onClick}>
    <h3>
      {title}
    </h3>
    <Button source={source} />
  </Container>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
