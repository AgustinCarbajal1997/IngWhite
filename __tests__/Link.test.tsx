import 'react-native';
import React from 'react';
import {
  act,
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react-native';
import Link from '../src/components/Link';
import {Linking} from 'react-native';

const mockData = {
  url: 'https://www.ingenierowhite.com/',
  message: 'Visitá nuestra página web',
};

let component: RenderResult;

const handleLink = async (url: string) => {
  await Linking.openURL(url);
};

describe('link', () => {
  beforeEach(() => {
    component = render(<Link url={mockData.url} message={mockData.message} />);
  });

  it('render link component', () => {
    expect(component.getByTestId('external-link')).toBeDefined();
  });

  it('handle link', () => {
    const link = jest.fn();
    handleLink(mockData.url);
    expect(link).not.toHaveBeenCalled();
  });

  it('on press external link button', () => {
    expect(component.getByTestId('external-link')).toBeDefined();
    const onPress = component.getByTestId('onpress-button');

    act(() => {
      fireEvent(onPress, 'press');
    });

    waitFor(() => expect(component.getByTestId('external-link')).toBeNull());
  });
});
