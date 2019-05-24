import React from 'react';
import { shallow } from 'enzyme';
import Searchbox from './Searchbox';


test('testing convertInput function', () => {
  let testInput = "bangladesh!r!";
  const wrapper = shallow(<Searchbox/>); // shallow render of the component

  return (expect(wrapper.instance().convertInput(testInput)).toBe('bangladeshr'));
});
