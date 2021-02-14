const baseURL = process.env.REACT_APP_API_URI;

const config = {
  api: {
    baseUrl: baseURL,
  },
  pagination: {
    defaultPageSize: 4,
    defaultRowsPerPageOptions: [2, 4, 25, 50, 100],
  },
};

export default config;