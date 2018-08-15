import React from 'react';
import { shallow } from 'enzyme';
import createMockStore from 'redux-mock-store';
import Panel from '../Panel';

const INITIAL_STATE = {
  jokenpo: {
    player: 5,
    computer: 5,
    message: '',
  },
};

const mockStore = createMockStore();
const store = mockStore(INITIAL_STATE);

describe('Panel test', () => {
  it('should be render this panel', () => {
    const wrapper = shallow(<Panel />, { context: { store } });

    expect(
      wrapper
        .dive()
        .find('h3')
        .exists(),
    ).toBe(true);
  });
});
