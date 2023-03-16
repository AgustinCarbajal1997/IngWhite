import 'react-native';
import React from 'react';
import {render, fireEvent, act, waitFor} from '@testing-library/react-native';
import AlertsTemplate from '../src/templates/Alerts';

const mockItems = [
  {
    id: 1213,
    date: '2023-03-13T03:49:23',
    nivel: 'aviso',
    titulo: 'Choque en cadena',
    contenido:
      '<p>Se impuso en la competencia principal de 5K. El podio lo completaron Soledad Fuhr y Nadia Montiel.</p>\n',
    fecha_publicacion: '2023-03-13T03:49:23',
    fecha_fin: '2023-03-13T03:49:23',
  },
  {
    id: 1215,
    date: '2023-03-13T03:49:23',
    nivel: 'aviso',
    titulo: 'Choque en cadena',
    contenido:
      '<p>Se impuso en la competencia principal de 5K. El podio lo completaron Soledad Fuhr y Nadia Montiel.</p>\n',
    fecha_publicacion: '2023-03-13T03:49:23',
    fecha_fin: '2023-03-13T03:49:23',
  },
];

describe('template alerts', () => {
  it('template component mounts while fetching data from API', () => {
    const component = render(
      <AlertsTemplate
        data={undefined}
        isLoading={true}
        isRefetching={false}
        refetch={() => {}}
      />,
    );
    const loader = component.getByTestId('loader');
    expect(loader).toBeDefined();
  });

  it('template component refetch data from API after pulling up', async () => {
    const asyncMock = jest.fn().mockResolvedValueOnce(mockItems);
    const alerts = await asyncMock();

    const component = render(
      <AlertsTemplate
        data={alerts}
        isLoading={false}
        isRefetching={true}
        refetch={() => {}}
      />,
    );
    const loader = component.getByTestId('loader');
    expect(loader).toBeDefined();
  });

  it('flat list render correctly alerts, open a post and share via social network', async () => {
    const component = render(
      <AlertsTemplate
        data={undefined}
        isLoading={true}
        isRefetching={false}
        refetch={() => {}}
      />,
    );

    expect(component.queryAllByTestId('loader').length).toEqual(1);

    const asyncMock = jest.fn().mockResolvedValueOnce(mockItems);
    const alerts = await asyncMock();

    component.rerender(
      <AlertsTemplate
        data={alerts}
        isLoading={false}
        isRefetching={false}
        refetch={() => {}}
      />,
    );

    expect(component.queryAllByTestId('loader').length).toEqual(0);

    const flatList = component.getByTestId('alerts-list');
    expect(flatList).toBeDefined();

    const preview = component.getAllByTestId('BoxAlerts')[0];

    act(() => {
      fireEvent(preview, 'press');
    });

    const onPress = component.getAllByText('Compartir')[0];

    act(() => {
      fireEvent(onPress, 'press');
    });

    waitFor(() => expect(component.getByTestId('share-data')).toBeNull());
  });
});
