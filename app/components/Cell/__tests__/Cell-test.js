// __tests__/Dummy-test.js
import React from 'react';
import Cell from '../CellComponent';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const item = {
    id: '1',
    title: 'some title to test',
    thumbnailUrl: 'https://via.placeholder.com/150/771796'
  }
  const tree = renderer.create(<Cell item={item}/>).toJSON();
  expect(tree).toMatchSnapshot();
});