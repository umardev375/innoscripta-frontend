const dev = {
  // API_ENDPOINT: process.env.NEXT_PUBLIC_APP_BACKEND_LINK,
  // API_ENDPOINT: "http://localhost:3084/api/v1",
  API_ENDPOINT: "http://192.168.1.48:8000/api"
};

const stag = {
  API_ENDPOINT: process.env.NEXT_PUBLIC_APP_BACKEND_LINK,
  // API_ENDPOINT: "http://localhost:3084/api/v1",
};

const prod = {
  API_ENDPOINT: process.env.NEXT_PUBLIC_APP_BACKEND_LINK,
    // API_ENDPOINT: "http://localhost:3084/api/v1",

};

const config = {
  ...(process.env.REACT_APP_STAGE === "prod" ||
  process.env.REACT_APP_STAGE === "production"
    ? prod
    : process.env.REACT_APP_STAGE === "dev"
    ? stag
    : dev),
};

export default config;
