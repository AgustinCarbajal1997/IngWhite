import 'react-native';
import React from 'react';
import {
  act,
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react-native';
import Dropdown from '../src/components/Dropdown';

let component: RenderResult;

describe('dropdown', () => {
  beforeEach(() => {
    component = render(<Dropdown />);
  });

  it('render dropdown component', () => {
    expect(component.getByTestId('dropdown-container')).toBeDefined();
  });

  it('text dropdown component to be defined', () => {
    expect(component.getByText('Seguinos')).toBeDefined();
  });

  it('not render dropdown detail on mount', () => {
    const onPress = component.getByTestId('dropdown-container');

    act(() => {
      fireEvent(onPress, 'press');
    });

    expect(component.getByTestId('dropdown-detail')).toBeDefined();

    expect(component.getByText('Facebook')).toBeDefined();
  });

  it('on press external link button', () => {
    const onPressContainer = component.getByTestId('dropdown-container');

    act(() => {
      fireEvent(onPressContainer, 'press');
    });

    expect(component.getByTestId('dropdown-detail')).toBeDefined();

    expect(component.getByText('Facebook')).toBeDefined();

    const onPressSocialMedia = component.getByText('Facebook');

    act(() => {
      fireEvent(onPressSocialMedia, 'press');
    });

    waitFor(() =>
      expect(component.getByTestId('dropdown-container')).toBeNull(),
    );
  });
});
