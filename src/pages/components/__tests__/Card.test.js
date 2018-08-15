import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

describe('Card test', () => {
  it('should be render this card', () => {
    const wrapper = shallow(<Card onClick={() => {}} title="teste" source="" />);

    expect(
      wrapper
        .dive()
        .find('h3')
        .exists(),
    ).toBe(true);
  });
});
