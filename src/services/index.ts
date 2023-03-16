import {
  BASE_URL_ALERTS,
  BASE_URL_API,
  BASE_URL_CLIMATE,
} from '../utils/constants/url';

interface Options {
  headers: {
    'content-type': string;
  };
}

interface Config {
  api: string;
  alerts: string;
  climate: string;
  options: Options;
}

const config: Config = {
  api: BASE_URL_API,
  alerts: BASE_URL_ALERTS,
  climate: BASE_URL_CLIMATE,
  options: {
    headers: {'content-type': 'application/json'},
  },
};

export const httpGet = <T>(url: keyof Config, endpoint: string): Promise<T> => {
  return fetch(`${config[url]}${endpoint}`, {
    ...config.options,
  })
    .then(response => handleResponse(response))
    .then(response => {
      if (!response.data) {
        return response;
      }
      return response.data;
    })
    .catch(error => {
      throw Error(error);
    });
};

const handleResponse = (response: Response) => {
  if (response.status === 200) {
    return response.json();
  } else {
    throw Error('error');
  }
};
