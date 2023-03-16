import 'react-native';
import React from 'react';
import {render, fireEvent, act, waitFor} from '@testing-library/react-native';
import NewsTemplate from '../src/templates/News';

const mockItems = [
  {
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
  },
  {
    id: 1215,
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
  },
];

describe('template news', () => {
  it('template component mounts while fetching data from API', async () => {
    const component = render(
      <NewsTemplate
        data={undefined}
        isLoading={true}
        isLoadingMutation={false}
        isRefreshing={false}
        addPosts={() => {}}
        handleRefresh={() => {}}
      />,
    );
    const loader = component.getByTestId('loader');
    expect(loader).toBeDefined();
  });

  it('template component fetch data from API after mounting', async () => {
    const asyncMock = jest.fn().mockResolvedValueOnce(mockItems);
    const newsPosts = await asyncMock();

    const component = render(
      <NewsTemplate
        data={newsPosts}
        isLoading={false}
        isLoadingMutation={false}
        isRefreshing={true}
        addPosts={() => {}}
        handleRefresh={() => {}}
      />,
    );

    const loader = component.getByTestId('loader');
    expect(loader).toBeDefined();
  });

  it('template component refetch data from API after pulling up', async () => {
    const asyncMock = jest.fn().mockResolvedValueOnce(mockItems);
    const newsPosts = await asyncMock();

    const component = render(
      <NewsTemplate
        data={newsPosts}
        isLoading={false}
        isLoadingMutation={false}
        isRefreshing={true}
        addPosts={() => {}}
        handleRefresh={() => {}}
      />,
    );
    const loader = component.getByTestId('loader');
    expect(loader).toBeDefined();
  });

  it('template component fetch data from API after scrolling down', async () => {
    const asyncMock = jest.fn().mockResolvedValueOnce(mockItems);
    const newsPosts = await asyncMock();

    const component = render(
      <NewsTemplate
        data={newsPosts}
        isLoading={false}
        isLoadingMutation={true}
        isRefreshing={false}
        addPosts={() => {}}
        handleRefresh={() => {}}
      />,
    );
    const loader = component.getByTestId('loader');
    expect(loader).toBeDefined();
  });

  it('flat list render correctly news posts, open a post and share via social network', async () => {
    const component = render(
      <NewsTemplate
        data={undefined}
        isLoading={true}
        isLoadingMutation={false}
        isRefreshing={false}
        addPosts={() => {}}
        handleRefresh={() => {}}
      />,
    );

    expect(component.queryAllByTestId('loader').length).toEqual(1);

    const asyncMock = jest.fn().mockResolvedValueOnce(mockItems);
    const newsPosts = await asyncMock();

    component.rerender(
      <NewsTemplate
        data={newsPosts}
        isLoading={false}
        isLoadingMutation={false}
        isRefreshing={false}
        addPosts={() => {}}
        handleRefresh={() => {}}
      />,
    );

    expect(component.queryAllByTestId('loader').length).toEqual(0);

    const flatList = component.getByTestId('news-list');
    expect(flatList).toBeDefined();

    const preview = component.getAllByTestId('NewsPreview')[0];

    act(() => {
      fireEvent(preview, 'press');
    });

    const onPress = component.getAllByText('Compartir')[0];

    act(() => {
      fireEvent(onPress, 'press');
    });

    waitFor(() => expect(component.getByTestId('share-data')).toBeNull());
  });

  it('flat list render correctly news posts, open a post and enter the link', async () => {
    const component = render(
      <NewsTemplate
        data={undefined}
        isLoading={true}
        isLoadingMutation={false}
        isRefreshing={false}
        addPosts={() => {}}
        handleRefresh={() => {}}
      />,
    );

    expect(component.queryAllByTestId('loader').length).toEqual(1);

    const asyncMock = jest.fn().mockResolvedValueOnce(mockItems);
    const newsPosts = await asyncMock();

    component.rerender(
      <NewsTemplate
        data={newsPosts}
        isLoading={false}
        isLoadingMutation={false}
        isRefreshing={false}
        addPosts={() => {}}
        handleRefresh={() => {}}
      />,
    );

    expect(component.queryAllByTestId('loader').length).toEqual(0);

    const flatList = component.getByTestId('news-list');
    expect(flatList).toBeDefined();

    const preview = component.getAllByTestId('NewsPreview')[0];

    act(() => {
      fireEvent(preview, 'press');
    });

    const onPress = component.getAllByText('Seguir leyendo')[0];

    act(() => {
      fireEvent(onPress, 'press');
    });

    waitFor(() => expect(component.getByTestId('external-link')).toBeNull());
  });
});
