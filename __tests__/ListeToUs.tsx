import 'react-native';
import React from 'react';
import {
  act,
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react-native';
import ListenToUs from '../src/components/ListenToUs';

let component: RenderResult;

describe('listen to us componente', () => {
  beforeEach(() => {
    component = render(<ListenToUs />);
  });

  it('render listen component', () => {
    expect(component.getByTestId('listen-to-us')).toBeDefined();
  });

  it('on press external listen button', () => {
    expect(component.getByTestId('listen-to-us')).toBeDefined();
    const onPress = component.getByTestId('listen-to-us');

    act(() => {
      fireEvent(onPress, 'press');
    });

    waitFor(() => expect(component.getByTestId('listen-to-us')).toBeNull());
  });
});
