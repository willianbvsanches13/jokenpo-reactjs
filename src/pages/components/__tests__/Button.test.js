import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Card/components/Button';

describe('Button test', () => {
  it('should be render this button', () => {
    const wrapper = shallow(<Button source="" />);

    expect(wrapper.exists()).toBe(true);
  });
});
