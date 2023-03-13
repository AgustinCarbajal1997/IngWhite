import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import ClimateBadge from '../src/components/Climate';
import {Climate} from '../src/models/models';

const mockItem: Climate = {
  coord: {
    lon: -62.2664,
    lat: -38.7802,
  },
  weather: [
    {
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d',
    },
  ],
  base: 'stations',
  main: {
    temp: 23.45,
    feels_like: 24.15,
    temp_min: 23.45,
    temp_max: 23.45,
    pressure: 1013,
    humidity: 88,
    sea_level: 100,
    grnd_level: 200,
  },
  visibility: 10000,
  wind: {
    speed: 5.66,
    deg: 60,
    gust: 1,
  },
  clouds: {
    all: 40,
  },
  dt: 1678718150,
  sys: {
    country: 'AR',
    sunrise: 1678701890,
    sunset: 1678746753,
  },
  timezone: -10800,
  id: 3853773,
  name: 'Ingeniero White',
  cod: 200,
};

describe('climate badge', () => {
  it('render component receives props correctly', () => {
    const component = render(<ClimateBadge data={mockItem} />);
    const climateBadge = component.getByTestId('ClimateBadge');
    expect(climateBadge).toBeDefined();
  });
});
