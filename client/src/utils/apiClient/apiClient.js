export const BASE_URL = 'http://127.0.0.1:8001';

export const defaultConfig = {
  timeout: 5000,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const canHaveBody = (config) => {
  return config && config.method
    && !(['GET', 'HEAD'].includes(config.method.toUpperCase()));
};

export const handleSuccessAndError = (response) => {
  return new Promise((resolve, reject) => {
    return response.json()
      .then((data) => {
        const jsonResponse = {
          ok: response.ok,
          status: response.status,
          statusText: response.statusText,
          data: data,
        };
        if (response.status >= 400) {
          return reject(jsonResponse);
        }
        return resolve(jsonResponse);
      })
      .catch((err) => {
        console.error(err);
        return reject(err);
      });
  });
};

export default (endpoint, config) => {
  const url = `${BASE_URL}${endpoint}`;
  config = Object.assign(defaultConfig, config);

  delete config.body;
  if (canHaveBody(config)) {
    config.body = JSON.stringify(config.data);
    delete config.data;
    config = {...config};
  }

  return fetch(url, config)
    .then(handleSuccessAndError);
};