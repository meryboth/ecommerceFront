const config = {
  development: {
    apiUrl: process.env.REACT_APP_API_URL,
  },
  production: {
    apiUrl: process.env.REACT_APP_API_URL,
  },
};

const env = process.env.REACT_APP_ENV || 'development';

export default config[env];
