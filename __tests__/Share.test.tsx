import 'react-native';
import React from 'react';
import {
  act,
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react-native';
import ShareData from '../src/components/Share ';

const mockData = 'Estas compartiendo un articulo!';

let component: RenderResult;

describe('share data', () => {
  beforeEach(() => {
    component = render(<ShareData message={mockData} />);
  });

  it('render share component', () => {
    expect(component.getByTestId('share-data')).toBeDefined();
  });

  it('on press share button', () => {
    expect(component.getByTestId('share-data')).toBeDefined();
    const onPress = component.getByTestId('onpress-button');

    act(() => {
      fireEvent(onPress, 'press');
    });

    waitFor(() => expect(component.getByTestId('share-data')).toBeNull());
  });
});
