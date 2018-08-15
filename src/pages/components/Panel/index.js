import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Content } from './styles';
import { JokenpoImages } from '../../../constantes';
import Card from '../Card';

const Panel = ({ jokenpo: { player, computer, message } }) => (
  <Container>
    <h3>
      {message || 'Escolha uma das opções para iniciar o jogo!'}
    </h3>
    <Content>
      <Card onClick={() => {}} source={JokenpoImages[player]} title="Jogador" />
      <Card onClick={() => {}} source={JokenpoImages[computer]} title="Computador" />
    </Content>
  </Container>
);

Panel.propTypes = {
  jokenpo: PropTypes.shape({
    player: PropTypes.number,
    computer: PropTypes.number,
    message: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  jokenpo: state.jokenpo,
});

export default connect(mapStateToProps)(Panel);
