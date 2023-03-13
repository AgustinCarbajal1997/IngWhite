import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import Alerts from '../src/components/Boxes/BoxAlerts/index';

const mockItem = {
  id: 1213,
  date: '2023-03-13T03:49:23',
  nivel: 'aviso',
  titulo: 'Choque en cadena',
  contenido:
    '<p>Se impuso en la competencia principal de 5K. El podio lo completaron Soledad Fuhr y Nadia Montiel.</p>\n',
  fecha_publicacion: '2023-03-13T03:49:23',
  fecha_fin: '2023-03-13T03:49:23',
};

describe('box alerts', () => {
  it('render component receives props correctly', () => {
    const component = render(<Alerts item={mockItem} />);
    const alerts = component.getByTestId('BoxAlerts');
    expect(alerts).toBeDefined();
  });
});
