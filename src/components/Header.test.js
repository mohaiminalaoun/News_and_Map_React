import React from 'react';
import { shallow } from 'enzyme';

test('object assignment', () => {
  const data = {one: 1};
  data['three'] = 3;
  expect(data).toEqual({one: 1, three: 3});
});
