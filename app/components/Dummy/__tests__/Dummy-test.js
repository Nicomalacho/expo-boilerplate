// __tests__/Dummy-test.js
import React from 'react';
import Dummy from '../DummyComponent';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Dummy />).toJSON();
  expect(tree).toMatchSnapshot();
});