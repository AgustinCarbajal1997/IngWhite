import 'react-native';
import React from 'react';
import {render, fireEvent, act, waitFor} from '@testing-library/react-native';
import News from '../src/components/Boxes/BoxNews/index';

const mockItem = {
  id: 1213,
  date: '2023-03-13T03:49:23',
  title: {
    rendered:
      'Los equipos whitenses empezaron la temporada de la Liga del Sur con el pie derecho',
  },
  jetpack_featured_media_url:
    'https://www.ingenierowhite.com/wp-content/uploads/2023/03/globo.jpg',
  excerpt: {
    rendered:
      '<p>Se impuso en la competencia principal de 5K. El podio lo completaron Soledad Fuhr y Nadia Montiel.</p>\n',
  },
  link: 'https://www.ingenierowhite.com/malena-hefner-la-ganadora-de-una-nueva-edicion-de-la-carrera-de-la-mujer/',
};

describe('box news', () => {
  it('render component receives props correctly', () => {
    const component = render(<News item={mockItem} />);
    const preview = component.getByTestId('NewsPreview');
    expect(preview).toBeDefined();
    expect(component.queryAllByTestId('DetailNews').length).toEqual(0);
  });
  it('dropdown news press', () => {
    const component = render(<News item={mockItem} />);
    const preview = component.getByTestId('NewsPreview');

    act(() => {
      fireEvent(preview, 'press');
    });
  });

  it('details news activated', () => {
    const component = render(<News item={mockItem} />);
    const preview = component.getByTestId('NewsPreview');
    act(() => {
      fireEvent(preview, 'press');
    });
    waitFor(() => expect(component.getByTestId('DetailNews')).toBeDefined());
  });
});
