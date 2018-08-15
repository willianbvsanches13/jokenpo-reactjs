import React from 'react';
import { shallow } from 'enzyme';
import createMockStore from 'redux-mock-store';
import OptionList from '../OptionList';

import { Creators as JokenpoActions } from '../../../store/ducks/jokenpo';
import { JokenpoType } from '../../../constantes';

const INITIAL_STATE = {
  jokenpo: {
    player: 5,
    computer: 5,
    message: '',
  },
};

const mockStore = createMockStore();
const store = mockStore(INITIAL_STATE);

describe('Jokenpo tests', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should be set a player to lizard', () => {
    const wrapper = shallow(<OptionList />, { context: { store } });

    wrapper
      .dive()
      .find('Card')
      .first()
      .simulate('click');

    expect(store.getActions()).toContainEqual(JokenpoActions.setJokenpoPlayer(JokenpoType.LAGARTO));
  });

  it('should be set a player to paper', () => {
    const wrapper = shallow(<OptionList />, { context: { store } });

    wrapper
      .dive()
      .find('Card')
      .at(1)
      .simulate('click');

    expect(store.getActions()).toContainEqual(JokenpoActions.setJokenpoPlayer(JokenpoType.PAPEL));
  });

  it('should be set a player to stone', () => {
    const wrapper = shallow(<OptionList />, { context: { store } });

    wrapper
      .dive()
      .find('Card')
      .at(2)
      .simulate('click');

    expect(store.getActions()).toContainEqual(JokenpoActions.setJokenpoPlayer(JokenpoType.PEDRA));
  });

  it('should be set a player to spock', () => {
    const wrapper = shallow(<OptionList />, { context: { store } });

    wrapper
      .dive()
      .find('Card')
      .at(3)
      .simulate('click');

    expect(store.getActions()).toContainEqual(JokenpoActions.setJokenpoPlayer(JokenpoType.SPOCK));
  });

  it('should be set a player to scissers', () => {
    const wrapper = shallow(<OptionList />, { context: { store } });

    wrapper
      .dive()
      .find('Card')
      .at(4)
      .simulate('click');

    expect(store.getActions()).toContainEqual(JokenpoActions.setJokenpoPlayer(JokenpoType.TESOURA));
  });
});
