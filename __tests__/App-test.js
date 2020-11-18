/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer';

// jest.mock(../__mocks__/@react-native-community/async-storage');
it('renders correctly', async () => {
  await act(async () => {
    renderer.create(<App />);
  });
});

it('renders correctly across screens', () => {
  const tree = renderer.create().toJSON();
  expect(tree).toMatchSnapshot();
});
