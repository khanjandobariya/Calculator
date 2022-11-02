import Button from '../index';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Button', () => {
  test('should match to button snapshot', () => {
    const component = renderer
      .create(<Button label="Demo" onPress={() => {}} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
