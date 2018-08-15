import reducer, { Creators as JokenpoActions } from '../jokenpo';
import { JokenpoType } from '../../../constantes';

describe('Jokenpo Reducer', () => {
  it('should be set a player', () => {
    const state = reducer(
      {
        player: 5,
        computer: 5,
        message: '',
      },
      JokenpoActions.setJokenpoPlayer(JokenpoType.LAGARTO),
    );

    expect(state.player).toBe(JokenpoType.LAGARTO);
  });

  it('should be set a computer', () => {
    const state = reducer(
      {
        player: 5,
        computer: 5,
        message: '',
      },
      JokenpoActions.setJokenpoComputer(JokenpoType.LAGARTO),
    );

    expect(state.computer).toBe(JokenpoType.LAGARTO);
  });

  it('should be set a message', () => {
    const state = reducer(
      {
        player: 5,
        computer: 5,
        message: '',
      },
      JokenpoActions.setJokenpoMessage('Você alterou a mensagem'),
    );

    expect(state.message).toBe('Você alterou a mensagem');
  });

  it('should be play and have a lizard tie', () => {
    const state = reducer(
      {
        player: JokenpoType.LAGARTO,
        computer: JokenpoType.LAGARTO,
        message: '',
      },
      JokenpoActions.playJokenpo(),
    );

    expect(state.message).toBe('Empatou, tente novamente!');
  });

  it('should be play and have a lizard win', () => {
    const state = reducer(
      {
        player: JokenpoType.LAGARTO,
        computer: JokenpoType.PAPEL,
        message: '',
      },
      JokenpoActions.playJokenpo(),
    );

    expect(state.message).toBe('Parabéns Você Ganhou!!!');
  });

  it('should be play and have a lizard defeat', () => {
    const state = reducer(
      {
        player: JokenpoType.LAGARTO,
        computer: JokenpoType.TESOURA,
        message: '',
      },
      JokenpoActions.playJokenpo(),
    );

    expect(state.message).toBe('Você Perdeu, tente novamente!');
  });

  it('should be play and have a stone tie', () => {
    const state = reducer(
      {
        player: JokenpoType.PEDRA,
        computer: JokenpoType.PEDRA,
        message: '',
      },
      JokenpoActions.playJokenpo(),
    );

    expect(state.message).toBe('Empatou, tente novamente!');
  });

  it('should be play and have a stone win', () => {
    const state = reducer(
      {
        player: JokenpoType.PEDRA,
        computer: JokenpoType.LAGARTO,
        message: '',
      },
      JokenpoActions.playJokenpo(),
    );

    expect(state.message).toBe('Parabéns Você Ganhou!!!');
  });

  it('should be play and have a stone defeat', () => {
    const state = reducer(
      {
        player: JokenpoType.PEDRA,
        computer: JokenpoType.PAPEL,
        message: '',
      },
      JokenpoActions.playJokenpo(),
    );

    expect(state.message).toBe('Você Perdeu, tente novamente!');
  });

  it('should be play and have a paper tie', () => {
    const state = reducer(
      {
        player: JokenpoType.PAPEL,
        computer: JokenpoType.PAPEL,
        message: '',
      },
      JokenpoActions.playJokenpo(),
    );

    expect(state.message).toBe('Empatou, tente novamente!');
  });

  it('should be play and have a paper win', () => {
    const state = reducer(
      {
        player: JokenpoType.PAPEL,
        computer: JokenpoType.PEDRA,
        message: '',
      },
      JokenpoActions.playJokenpo(),
    );

    expect(state.message).toBe('Parabéns Você Ganhou!!!');
  });

  it('should be play and have a paper defeat', () => {
    const state = reducer(
      {
        player: JokenpoType.PAPEL,
        computer: JokenpoType.TESOURA,
        message: '',
      },
      JokenpoActions.playJokenpo(),
    );

    expect(state.message).toBe('Você Perdeu, tente novamente!');
  });

  it('should be play and have a scissors tie', () => {
    const state = reducer(
      {
        player: JokenpoType.TESOURA,
        computer: JokenpoType.TESOURA,
        message: '',
      },
      JokenpoActions.playJokenpo(),
    );

    expect(state.message).toBe('Empatou, tente novamente!');
  });

  it('should be play and have a scissors win', () => {
    const state = reducer(
      {
        player: JokenpoType.TESOURA,
        computer: JokenpoType.PAPEL,
        message: '',
      },
      JokenpoActions.playJokenpo(),
    );

    expect(state.message).toBe('Parabéns Você Ganhou!!!');
  });

  it('should be play and have a scissors defeat', () => {
    const state = reducer(
      {
        player: JokenpoType.TESOURA,
        computer: JokenpoType.PEDRA,
        message: '',
      },
      JokenpoActions.playJokenpo(),
    );

    expect(state.message).toBe('Você Perdeu, tente novamente!');
  });

  it('should be play and have a spock tie', () => {
    const state = reducer(
      {
        player: JokenpoType.SPOCK,
        computer: JokenpoType.SPOCK,
        message: '',
      },
      JokenpoActions.playJokenpo(),
    );

    expect(state.message).toBe('Empatou, tente novamente!');
  });

  it('should be play and have a spock win', () => {
    const state = reducer(
      {
        player: JokenpoType.SPOCK,
        computer: JokenpoType.TESOURA,
        message: '',
      },
      JokenpoActions.playJokenpo(),
    );

    expect(state.message).toBe('Parabéns Você Ganhou!!!');
  });

  it('should be play and have a spock defeat', () => {
    const state = reducer(
      {
        player: JokenpoType.SPOCK,
        computer: JokenpoType.PAPEL,
        message: '',
      },
      JokenpoActions.playJokenpo(),
    );

    expect(state.message).toBe('Você Perdeu, tente novamente!');
  });

  it('should be skip with action not exist', () => {
    const state = reducer(
      {
        player: 5,
        computer: 5,
        message: '',
      },
      () => {},
    );

    expect(state).toEqual(state);
  });
});
