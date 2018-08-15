import { JokenpoType } from '../../constantes';

export const Types = {
  SET_PLAYER: 'jokenpo/SET_PLAYER',
  SET_COMPUTER: 'jokenpo/SET_COMPUTER',
  SET_MESSAGE: 'jokenpo/SET_MESSAGE',
  PLAY: 'jokenpo/PLAY',
};

const INITIAL_STATE = {
  player: 5,
  computer: 5,
  message: '',
};

export const Creators = {
  setJokenpoPlayer: player => ({
    type: Types.SET_PLAYER,
    payload: { player },
  }),

  setJokenpoComputer: computer => ({
    type: Types.SET_COMPUTER,
    payload: { computer },
  }),

  setJokenpoMessage: message => ({
    type: Types.SET_MESSAGE,
    payload: { message },
  }),

  playJokenpo: () => ({
    type: Types.PLAY,
  }),
};

const Rule = {
  stone: (computer) => {
    switch (computer) {
      case JokenpoType.PEDRA:
        return 'Empatou, tente novamente!';
      case JokenpoType.LAGARTO:
      case JokenpoType.TESOURA:
        return 'Parabéns Você Ganhou!!!';
      default:
        return 'Você Perdeu, tente novamente!';
    }
  },

  paper: (computer) => {
    switch (computer) {
      case JokenpoType.PAPEL:
        return 'Empatou, tente novamente!';
      case JokenpoType.PEDRA:
      case JokenpoType.SPOCK:
        return 'Parabéns Você Ganhou!!!';
      default:
        return 'Você Perdeu, tente novamente!';
    }
  },

  scissors: (computer) => {
    switch (computer) {
      case JokenpoType.TESOURA:
        return 'Empatou, tente novamente!';
      case JokenpoType.PAPEL:
      case JokenpoType.LAGARTO:
        return 'Parabéns Você Ganhou!!!';
      default:
        return 'Você Perdeu, tente novamente!';
    }
  },

  lizard: (computer) => {
    switch (computer) {
      case JokenpoType.LAGARTO:
        return 'Empatou, tente novamente!';
      case JokenpoType.PAPEL:
      case JokenpoType.SPOCK:
        return 'Parabéns Você Ganhou!!!';
      default:
        return 'Você Perdeu, tente novamente!';
    }
  },

  spock: (computer) => {
    switch (computer) {
      case JokenpoType.SPOCK:
        return 'Empatou, tente novamente!';
      case JokenpoType.TESOURA:
      case JokenpoType.PEDRA:
        return 'Parabéns Você Ganhou!!!';
      default:
        return 'Você Perdeu, tente novamente!';
    }
  },
};

const Play = (player, computer) => {
  switch (player) {
    case JokenpoType.PEDRA:
      return Rule.stone(computer);
    case JokenpoType.PAPEL:
      return Rule.paper(computer);
    case JokenpoType.TESOURA:
      return Rule.scissors(computer);
    case JokenpoType.SPOCK:
      return Rule.spock(computer);
    default:
      return Rule.lizard(computer);
  }
};

export default function jokenpo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_PLAYER:
      return { ...state, player: action.payload.player };
    case Types.SET_COMPUTER:
      return { ...state, computer: action.payload.computer };
    case Types.SET_MESSAGE:
      return { ...state, message: action.payload.message };
    case Types.PLAY:
      return { ...state, message: Play(state.player, state.computer) };
    default:
      return state;
  }
}
