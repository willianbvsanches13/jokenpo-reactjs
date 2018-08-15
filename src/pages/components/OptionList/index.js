import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as JokenpoCreators } from '../../../store/ducks/jokenpo';
import { Container, Content } from './styles';
import Card from '../Card';
import { JokenpoType, JokenpoImages } from '../../../constantes';

class OptionList extends Component {
  static propTypes = {
    setJokenpoPlayer: PropTypes.func.isRequired,
    setJokenpoComputer: PropTypes.func.isRequired,
    setJokenpoMessage: PropTypes.func.isRequired,
    jokenpo: PropTypes.shape({
      player: PropTypes.number,
      computer: PropTypes.number,
    }).isRequired,
  };

  handleClick = async (type) => {
    const { setJokenpoPlayer, setJokenpoComputer, playJokenpo } = this.props;
    await setJokenpoPlayer(type);
    await setJokenpoComputer(Math.floor(Math.random() * 5));
    await playJokenpo();
  };

  render() {
    return (
      <Container>
        <h1>
Escolha uma das opções!
        </h1>
        <Content>
          <li>
            <Card
              onClick={_e => this.handleClick(JokenpoType.LAGARTO)}
              title="Lagarto"
              source={JokenpoImages[JokenpoType.LAGARTO]}
            />
          </li>
          <li>
            <Card
              onClick={_e => this.handleClick(JokenpoType.PAPEL)}
              title="Papel"
              source={JokenpoImages[JokenpoType.PAPEL]}
            />
          </li>
          <li>
            <Card
              onClick={_e => this.handleClick(JokenpoType.PEDRA)}
              title="Pedra"
              source={JokenpoImages[JokenpoType.PEDRA]}
            />
          </li>
          <li>
            <Card
              onClick={_e => this.handleClick(JokenpoType.SPOCK)}
              title="Spock"
              source={JokenpoImages[JokenpoType.SPOCK]}
            />
          </li>
          <li>
            <Card
              onClick={_e => this.handleClick(JokenpoType.TESOURA)}
              title="Tesoura"
              source={JokenpoImages[JokenpoType.TESOURA]}
            />
          </li>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  jokenpo: state.jokenpo,
});

const mapDispatchToProps = dispatch => bindActionCreators(JokenpoCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OptionList);
